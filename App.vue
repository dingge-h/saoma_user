<script>
    import {AddPrinters} from './printer/request.js'
	export default {
		onLaunch: function() {
			// 连接要操作的云环境
			wx.cloud.init({
                env: 'saoma-8gaq63bwa475ad24',
                traceUser: true,
			})
            //建立即时通讯连接
            this.goeasy.connect({
            	id:"", //pubsub选填，im必填
            	data:{}, //必须是一个对象，pubsub选填，im必填，用于上下线提醒和查询在线用户列表时，扩展更多的属性
            	onSuccess: function () {  //连接成功
            	  console.log("连接成功") //连接成功
            	},
            	onFailed: function (error) { //连接失败
            	  console.log("连接失败");
            	},
            	onProgress:function(attempts) { //连接或自动重连中
            	  console.log("连接或自动重连中");
            	}
            });
            // 进入页面连接打印机
            this.addPrint()
		},
        
        methods:{
            async addPrint(){
                try{
                    let add = await AddPrinters()
                    console.log(add)
                }catch(e){
                    console.log(e)
                }
            }
        }
	}
</script>

<style>
	/*每个页面公共css */
</style>
