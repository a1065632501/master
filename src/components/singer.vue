<template>
    <div id="snake">
        <table>
        <tr v-for="(col,y) in cols"><td v-for="(row,x) in rows" :class="body(x,y)||showfood(x,y)?'active':''"></td></tr>
        </table>
        <div class="show" v-show='show'>贪吃蛇~</div>
        <a href="#" @click="start()">开始</a>
    </div>

</template>
    <script>
        
        export default {
            data(){
                return{
                    rows:'',//横框
                    cols:'',//竖框
                    position:[[0,0],[1,0],[2,0],[3,0]],//蛇的初始位置
                    direction:1,//方向
                    food:[],//食物的位置
                    show:true,
                }
            },
            methods:{
                background(){//生成横框和竖框的函数
                    this.rows=Array(30)
                    this.cols=Array(30)
                }, 
                keyboard(){//键盘事件
                    let _this = this;
                    document.onkeydown = function(e){
                        if(e.keyCode===37){
                            // setTimeout(_=>{
                                _this.change(-1)
                        // },45); 
                        }else if(e.keyCode===38){
                            // setTimeout(_=>{
                                _this.change(-2)
                        // },46); 
                        }else if(e.keyCode===39){
                            // setTimeout(_=>{
                                _this.change(1)
                        // },47); 
                        }else{
                            // setTimeout(_=>{
                                _this.change(2)
                        // },48); 
                        }
                    }
                },
                creatfood(){//创造食物
                        
                        this.food[0]=Math.floor(Math.random()*30)
                        this.food[1]=Math.floor(Math.random()*30)
                  
                    
                },
                showfood(x,y){//显示食物
                    if(this.food[0]===x&&this.food[1]===y){
                        return true
                    }
                },
                body(x,y){//显示身体
                    for(let i=0;i<this.position.length;i++){//循环身体函数，利用索引和身体位置做毕竟，如果索引和身体数组重合就会添加active样式
                        if(this.position[i][0]===x&&this.position[i][1]===y){
                            return true
                        }
                    }
                },
                autorun(){                    
                let direction=this.direction//目前方向
                let headX=this.headX
                let headY=this.headY
                    headX=this.position[this.position.length-1][0]//复制蛇头的X坐标
                    headY=this.position[this.position.length-1][1]//复制蛇头的Y坐标
                    if(direction===1||direction===-1){//如果方向是在左右跑动                        
                        direction>0?headX++:headX--//往右跑X坐标+1，往左跑X坐标-1                                        
                    }else{
                        direction>0?headY++:headY--//如果方向是在上下跑动，Y坐标做对应处理
                    }
            //此时蛇头的下一个坐标位置就是[headX,headY]，接下来就可以判断是否结束游戏，如果结束了，蛇头就没必要添加了
                    if(headX<0||headX>29||headY<0||headY>29||this.body(headX,headY)){//当蛇头下一个位置出了边界或者这个位置是符合身体函数（即蛇头撞上了身体）
                        
                        this.position=[[0,0],[1,0],[2,0],[3,0]]//还原身体
                        this.creatfood()//重新创造食物
                        this.direction=1//还原方向
                        alert('Game Over')//结束        
                        setTimeout(_=>{
                            clearInterval(this.timer)//清除定时器
                        },100);
                        
                        
                    }else{//如果蛇头下一个位置是符合规则的                        
                        this.position.push([headX,headY])//将下一个位置添加进数组，头部长一节
                        if(headX!==this.food[0]||headY!==this.food[1]){//如果下一个头部位置不是食物的位置，即吃食物开始                            
                            this.position.shift()//我们将尾部去掉，一长一短实现了蛇的走动
                        }else{//如果下一个头部位置是食物
                            this.creatfood()//不去除尾部，再次创建食物（这里有个小bug，随机的食物有几率与身体重合）
                        }
                    }                                    
                    },
                    start(){//开始按钮
                    this.position=[[0,0],[1,0],[2,0],[3,0]]//还原身体
                    this.direction=1//还原方向
                    clearInterval(this.timer)//清除定时器
                    this.show=false
					 this.timer=setInterval(()=>this.autorun(),100)
                     this.keyboard()
                    this.background() 
                    this.creatfood()
                    },			
                    change(dir){//改变方向
                        if(Math.abs(dir)===Math.abs(this.direction)){//如果方向相同或者想法，不做任何操作
                            return
                        }else{ 
                            setTimeout(_=>{
                                this.direction=dir//否则把方向改动
                        },80); 
                    
                        }
                    }
                    
            },
            mounted(){
                let timer = ''
                let headX,headY
			},
        }
    </script>
    <style>
    #snake {
        background: rgb(245, 245, 245);
        height:495px;
        position: relative;
    }
    #snake a {
        display: block;
        width: 60px;
        height: 40px;
        font-size:24px;
        text-align: center;
        text-decoration: none;
        line-height: 40px;
        border:1px solid #555;
        margin-left:370px;
        margin-top:20px;
        border-radius:5px;
    }
    #snake .show {
            width:310px;
            height:310px;
            border:1px solid black;
            position: absolute;
            top:0px;
            left:300px;
            font-size:60px;
            line-height: 310px;
            text-align: center;

    }
    td{
			
            
			width: 10px;
			height: 10px;
		}
		table{
            width:310px;
            height:310px;
            border:1px solid black;
            margin-left:300px;
			margin-top:50px;
			border-collapse: collapse;
		}
		.active{background: rgb(7, 22, 233)}
    </style>
    