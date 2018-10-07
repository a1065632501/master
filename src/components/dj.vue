<template>
        <div id="app1">
            <ul> 
                <div class="start" v-show='show'>2048</div>
                <li class='box' 
                    v-for="num in nums"      
                >
               {{num}}
                </li>
            </ul>
            <a href="#" @click="reset()">重置</a>
            <a class='right' href="#" @click="reset()">开始游戏</a>
        </div>    
    </template>
        <script>
            export default {
                data () {
                return {
                    show:true,
                    nums : [] 
                }
            },
            methods:{
               
                randomAdd(){
                let arr = this.shuffle(this.blankIndex());
                setTimeout(_=>{
                   this.$set(this.nums,arr.pop(),Math.random()>0.7 ? 4 : 2); 
                },100);
                },
                blankIndex(){
                    let arr = [];
                    
                    this.nums.forEach((i,j)=>{
                        i==='' && arr.push(j);
                    });                  
                    return arr;
                },
                shuffle(arr){
                    let l = arr.length,j;              
                    while(l--){
                        j = parseInt(Math.random()*l);
                        [arr[l],arr[j]] = [arr[j],arr[l]]
                    }
                    return arr;
                },
                reset(){
                this.show=false;
                this.nums = Array(16).fill('');
                let q =0;
                while(q++<8){
                   this.randomAdd();              
                }
            },
            T(arr,n){
                n=n%4;
                if(n===0)return arr;
                var l = arr.length,d = Math.sqrt(l),tmp = [];
                for(var i=0;i<d;i+=1)
                    for(var j=0;j<d;j+=1)
                        tmp[d-i-1+j*d] = arr[i*d+j];
                if(n>1)tmp=this.T(tmp,n-1);
                return tmp;
            },
            keyDown(e){
            },
            handle(i){
                this.move(i);
            },
            move(i){
                let tmp = this.T(this.nums,i),
                    hasMove = false, 
                    hasCombin = {};
                tmp.forEach((j,k)=>{
                    while(k%4 && j!==''){
                        if(tmp[k-1] === ''){ 
                            tmp[k-1] = j;
                            tmp[k] = '';
                            hasMove = true;
                            if(hasCombin[k]){
                                hasCombin[k-1] = true;
                                hasCombin[k] = false;
                            }
                        }else if(tmp[k-1] === j && !hasCombin[k] && !hasCombin[k-1]){
                            j *= 2;
                            tmp[k-1] = j;
                            tmp[k] = '';
                            hasMove = true;
                            hasCombin[k-1] = true;
                        }else{
                            break;
                        }
                        k--;
                    } 
                });
                this.nums = this.T(tmp,4-i);
                hasMove && this.randomAdd();
                this.isPass();
                console.log(this.nums)
                console.log(i)
            },
            isPass(){
            let isOver=true,hasPass=false,tmp = this.T(this.nums,1);
            this.nums.forEach((i,j)=>{
                if(this.nums[j-4] == i || this.nums[j+4] == i || tmp[j-4] == tmp[j] || tmp[j+4] == tmp[j]){
                    isOver = false;
                }
                if(i==2048){
                    hasPass = true;
                    setTimeout(()=>{
                        alert('你赢了！');
                        this.show='false';
                        this.nums='';
                    },200 );       
                }
            });
            if(this.nums.length == 0){
                isOver = false;
            }
            if(!this.blankIndex().length){               
                if(isOver == true){
                setTimeout(()=>{
                alert('游戏结束！');
                this.show='false';
                this.nums='';
            },200 ); 
            }
            };
        }
            },
            created:function () {
                    let _this = this;
                    document.onkeydown = function(e){
                        let _key = window.event.keyCode;
                        const map = {37:0,38:3,39:2,40:1};
                        if(!(e.keyCode in map))return;
                        _this.handle(map[e.keyCode]);  
                    }             
                },
    
            }
        </script>
        <style>
            * {
            padding: 0px;
            margin:0px;
            list-style: none;

        }
        #app1 {
            width: 100%;
            height:535px;
        }
        #app1 ul {
            margin-top:10px;
            width: 410px;
            height: 420px;
            margin-left: 200px;
            font-size:40px;
        }
        #app1 a{
            text-decoration: none;
            display: block;
            width: 80px;
            height:40px;
            line-height: 40px;
            text-align: center;
            background: rgb(124, 227, 235);
            border-radius: 14px;
            margin-left: 290px;
            float: left;
        }
        #app1 a:hover{
            animation: colors 0.5s forwards ;
        }
        @keyframes colors
            {
            from { background: rgb(124, 227, 235);}
            to {background: yellow;}
            }
                    
        #app1 .right{
            margin-left:50px;
        }
        #app1 ul .start{
            margin-top:10px;
            width:410px;
            height:410px;
            line-height: 410px;
            text-align: center;
            font-size: 60px;
            color:red;
            border: 2px solid #666;
            border-radius: 4px;
        }
        #app1 ul .box {
            float: left;
            display: block;
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            border:1px solid red;  
        }
        </style>
        