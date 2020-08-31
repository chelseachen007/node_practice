const crypto = require('crypto')
// 暗号：贪心算法
module.exports.createToken = token => {
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }

    return {
        getExp: () => {
            const payload = new Buffer(ary[1], "base64").toString();
            const exp  = JSON.parse(payload).exp
            return exp
        },

        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0] + '.' + ary[1]).digest('base64');
            return hmac === ary[2] + '='
        }
    }
}
