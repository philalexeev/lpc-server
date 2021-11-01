const express = require('express')
const path = require('path')
const fs = require('fs-extra')
const app = express()
const port = process.env.PORT || 5000
const minify = require('html-minifier').minify;

const zip = require("zip-a-folder").zip

app.use(express.static('app'))
app.use(express.json())

app.get('/download', (req, res) => {
    fs.copySync(
        path.join(__dirname, 'assets', 'beeline'),
        path.join(__dirname, 'assets', 'outfiles')
    )

    const outIndexPath = path.join(__dirname, 'assets', 'outfiles', 'order.html')

    let resultCss = ''
    req.query.lpCssList.forEach(compName => {
        const filePath = path.join(__dirname, 'app', 'comp-styles', `${compName}.css`)

        fs.readFile(filePath, 'utf8', function (err, innerData) {
            if (err) {
                return console.log(err);
            }
            resultCss = resultCss + innerData
        })
    })

    fs.readFile(outIndexPath, 'utf8', function (err, htmlData) {
        if (err) {
            return console.log(err);
        }

        let resultHtml = htmlData.replace('<!--HTMLCODE-HEADER-->', req.query.headerHtml);
        resultHtml = resultHtml.replace('<!--HTMLCODE-MAIN-->', req.query.mainHtml);
        resultHtml = resultHtml.replace('<!--HTMLCODE-FOOTER-->', req.query.footerHtml);
        resultHtml = resultHtml.replace('.cssstyles{}', resultCss);
        const minifiedHtml = minify(resultHtml, {
            minifyCSS: true
        });

        fs.writeFile(outIndexPath, minifiedHtml, 'utf8', function (err) {
            if (err) return console.log(err);
            console.log('done!');
        });
    })

    class Archiver {
        static async main() {
            await zip(
                path.join(__dirname, 'assets', 'outfiles'),
                path.join(__dirname, 'assets', 'archive.zip')
            );
        }
    }
    
    const promise = Archiver.main();
    promise.then(() => {
        res.send(path.join(__dirname, 'assets', 'archive.zip'))
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
