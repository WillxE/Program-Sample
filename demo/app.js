var express = require('express')
var ejs     = require('ejs')
var body    = require('body-parser')
var cookie  = require('cookie')
var app     = express()
var valid   = []
app.engine('html', ejs.renderFile)
app.listen(2000)
app.use(body.urlencoded({extended: false}))
app.use(express.static('public'))
app.get('/',showIndex)
app.get('/login',showLogin)
app.post('/login',checkLogin)
app.get('/profile',showProfile)
app.get('/error',showError)
app.get('/logout',userLogout)
function showIndex(req,res) {
    res.render('index.html')
}
function showLogin(req,res) {
    res.render('login.html')
}
function checkLogin(req,res) {
    if (req.body.email == 'mark@fb.com' && req.body.password == 'mark123') {
        var card = genenrateCard()
        valid[card] = req.body.email
        res.header('Set-Cookie','card=12345')
        res.redirect('/profile')
    } else {
        res.redirect('/')
    }
}
function showError(req,res) {
    res.render(error.html)
}

function generateCard(req,res) {
    var a = parse(Math.random() * 10000)
    var b = parse(Math.random() * 10000)
    var c = parse(Math.random() * 10000)
    var d = parse(Math.random() * 10000)
    return a+'-'+b+'-'+c+'-'+d
}
function showProfile(req,res) {
    if (valid[req.cookie.card]) {
        res.render(profile.html)
    } else {
        res.redirect('/login')
    }
}
function userLogout(req,res) {
    delete valid[req.cookie.cord]
}