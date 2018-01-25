var page = require('webpage').create()
page.ViewportSize = {width:1024,height:768}
page.open('https://airbnb.com',ready)

function ready() {
    page.render('airbnb-2.png')
    phantom.exit()
}