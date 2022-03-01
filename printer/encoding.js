const TextEncoder = require('./text-encoding').TextEncoder;

// 计算文本有多少字符的
function CalcGbkLenForPrint(data) {
    let _encoder = new TextEncoder("gb2312", { NONSTANDARD_allowLegacyEncoding: true });
    let gbkData = _encoder.encode(data);
    return gbkData.length;
}

function CalcAsciiLenForPrint(data) {
    return data.length;
}

module.exports = {CalcGbkLenForPrint, CalcAsciiLenForPrint};