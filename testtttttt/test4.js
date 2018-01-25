var page = require('webpage').create()
page.viewportSize = {wodth: 1024, height: 768}
page.onLoadFinished = ready
var step = 'open'
page.open('https://article.land/login')

function ready() {
    if (step == 'open') {
        step = 'verify'
        page.evaluate(function(){
            document.querySelector('[name=email]').value = 'test01@article.land'
        })
    }
}