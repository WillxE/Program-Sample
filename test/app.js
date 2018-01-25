class Rectangle {
    constructor(w,h) {
        this.width = w
        this.height = h
    }
}
class Square extends Rectangle {
    constructor(x) {
        super(x,x)
    }
}
var l = new Square(5)
if (l instanceof Square) {
    console.log("yes")
} else {
    console.log("no")
}



function qwe(a) {
    var b = a.split("")
    var q = new Array()
    for (i of b) {
        i = parseInt(i)
        if (isNaN(i) == false) {
            q.push(i)           
        }
    }
    return q
}

console.log(qwe("-1q123qw61235wtegsdv34yerrqyethfgwuyjuituy8uerwdfqr13we1"))


process.exit()