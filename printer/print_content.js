// 内容排版
let {Print_order} = require('./formatter.js')

function strRepeat(str,num){
	let len = num + 1
	return new Array(len).join(str)
}


let content = function(table_number,number_of_diners,content_arr,total,time){
    let Content = ''
    Content += "<C>" + "<B>健哥砂锅面馆</B>" + "<BR><BR></C>";
    Content += "桌号：" + table_number + "<BR>";
    Content += "用餐人数：" + number_of_diners + "<BR>";
    Content += strRepeat('-',32) + "<BR>";
    // 要对菜单进行遍历
    content_arr.forEach(item=>{
    	Content += Print_order(item.name,item.good_specs,'*' + item.quantity,item.total_price)
    })
    Content += strRepeat('-',32) + "<BR>"
    Content += "<R>" + "合计: " + total + "元" + "<BR></R>"
    Content += "<BR>"
    Content += "下单时间: " + time + "<BR>"
    Content += "店铺地址: " + '湖北省简直是公安县孱陵大道120号' + "<BR>"
    Content += "商家电话: " + '15826574314' + "<BR>"
    return Content
    
}

export {content}