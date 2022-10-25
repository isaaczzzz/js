//默认情况下, module.exports = {}
//使用require()导入的就是exports指向的对象
const age = 20

module.exports.sayHello = function() {
    console.log("Hello World")
}

module.exports.age = age
