// sign签名：sha1数据加密算法
const {hex_sha1} = require('./crypto.js')

let xpYun = {
    user:'365409156@qq.com',
    timestamp:new Date().getTime(),
    UserKEY:'3f90f045102e4aef8c7fc1ce8b1997a1',
    sn:'02TW7KEC1901A48',
    name:'砂锅面馆'
}

// sign签名;数据加密算法
let siGn = function(){
	let {user,UserKEY,timestamp} = xpYun
	let sign = hex_sha1(user + UserKEY + timestamp)
	return sign
}

export {xpYun,siGn}