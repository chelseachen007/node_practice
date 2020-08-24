//暗号：二分查找
const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        // ##BEGIN## 代码已加密
        // console.log(readStream)
        readStream.on('data', (data) => {
            // console.log('>>>req on', data);
            reqData.push(data);
            size += data.length;
        })
        readStream.on("end", () => {
            const data = Buffer.concat(reqData, size);
            console.log(data.toString())
            let res = JSON.parse(data.toString())
            resolve(res)
        })
        // ##END##
    })
}
