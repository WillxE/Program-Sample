var page = require('webpage').create()
page.viewportSize = {width:1024,height:768}
page.onLoadFinished = ready
var step = 'load'
page.open('https://article.land')

function ready() {
    if (step == 'load') {
        step = 'submit'
        page.evaluation(function() {
            document.getElementById('user[login]').value = 'mark'
            document.getElementById('user[email]').value = 'mark@fb.com'
            document.getElementById('user[password]').value = 'mark123'
            document.querySelector('[type=submit]').click()
        })
    } else if (step == 'submit') {
        page.render('github-duplicated-user.png')
        phantom.exit()
    }
}