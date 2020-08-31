const { EventEmitter } = require('events')
//暗号：冒泡排序
module.exports = class Connection {
    constructor() {
        this.emmiter = new EventEmitter()
        this.queen = []
    }
    onConn(conf) {
        this.queen.push(conf)
    }
    connection(query) {
        this.queen.forEach(v => v(query))
    }

}
