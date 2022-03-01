// 对菜单排版
let encoding = require('./encoding.js')


let MAX_APECS = 20;//规格长度
let MAX_QUANTITY = 5;//数量长度
let MAX_PRICE = 7;//价格

// 计算规格，数量，价格要补多少空格
function strRepeat(str,num){
	let len = num + 1
	return new Array(len).join(str)
}

function Print_order(name='酸辣土豆丝', sprcs='微辣', quantity=10, price=20){
    // 菜名
    let result = name
    result += '<BR>'
    // 规格(8km)
    let sprcs_str = '' + sprcs
    let sprcsLen = encoding.CalcGbkLenForPrint(sprcs_str)
    // 数量
    let quantity_str = '' + quantity//''空字符传
    let quantityLen = encoding.CalcAsciiLenForPrint(quantity_str)
    // 小计
    let price_str = '' + price
    let priceLen = encoding.CalcAsciiLenForPrint(price_str)
    
    // 计算规格字符是否满足20个
    result += sprcs_str + strRepeat(" ", MAX_APECS - sprcsLen)        
    // 计算数量字符是否满足5个
    result += quantity_str + strRepeat(" ", MAX_QUANTITY - quantityLen)
    // 计算小计字符是否满足7个
    result += strRepeat(" ", MAX_PRICE - priceLen) + price_str
    result += "<BR>"
    return result
}

module.exports = {Print_order}