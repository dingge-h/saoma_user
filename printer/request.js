// 请求地址
let URL = 'https://open.xpyun.net/api/openapi/'
import {xpYun,siGn} from './Xpyun.js'
import {content} from './print_content.js'

// 公用请求
let request = function(url,json){
    return new Promise((resolve,reject)=>{
        uni.request({
        	url:url,
        	data:json,
        	method:"POST",
        	header:{"Content-Type": "application/json;charset=UTF-8"}
        })
        .then(res=>{
        	resolve(res)
        })
        .catch(err=>{
        	reject(err)
        })
    })
}


// 1.连接打印机
let AddPrinters = async function(){
	let url = URL + "xprinter/addPrinters"
	let json = {
		"user":xpYun.user,
		"timestamp":xpYun.timestamp,
		"sign":siGn(),
		"items":[{"name":xpYun.name,"sn":xpYun.sn}]
	}
	return await request(url,json)
}


// 2.打印小票
let yunPrint = async function(table_number,number_of_diners,content_arr,total,time){
    let url = URL + "xprinter/print"
    let json = {
    	"user":xpYun.user,
    	"timestamp":xpYun.timestamp,
    	"sign":siGn(),
    	"sn":xpYun.sn,
    	"content":content(table_number,number_of_diners,content_arr,total,time)
    }
    return await request(url,json)
}


export {AddPrinters,yunPrint}