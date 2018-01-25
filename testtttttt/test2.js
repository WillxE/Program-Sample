var page = require('webpage').create()
page.viewportSize = {width:1024, height:768}
page.open('http://superrichthailand.com',ready)

function ready(){
    console.log(page.plainText)
    phantom.exit()
}