<template>
    <div class='all'>
        <div class='d1'>
            <el-input v-model="str" placeholder="请输入数字,用空格隔开" class='i1'></el-input>
            <el-button class='b1' type="success" @click="resever()">数组逆序</el-button>
            <div><el-tag v-if='show'>{{result}}</el-tag></div>
        </div>
        <div class='d1'>
           
            <el-button class='b2' type="success" @click="remove()">数组去重</el-button>
            <div><el-tag v-if='show1'>{{result1}}</el-tag></div>
        </div>
        <div class='d1'>
          
            <el-button class='b2' type="success" @click="sort()">数组排序</el-button>
            <div><el-tag v-if='show2'>{{result2}}</el-tag></div>
        </div>
        <div class='d1'>
       
            <el-button class='b2' type="success" @click="add()">数组求和</el-button>
            <div><el-tag v-if='show3'>{{result3}}</el-tag></div>
        </div>
        <div class='d1'>
          
            <el-button class='b2' type="success" @click="reduce()">最大差值</el-button>
            <div><el-tag v-if='show4'>{{result4}}</el-tag></div>
        </div>
    </div> 
    </template>
    <script>
        export default {
            data(){
                return {
                    result:'',
                    result1:'',
                    result2:'',
                    result3:'',
                    result4:'',
                    result5:'',
                    str:'',
                    show:false,
                    show1:false,
                    show2:false,
                    show3:false,
                    show4:false,
                }
            },
            methods:{
                resever(){
                    this.show=true
                    return this.result=this.str.split(' ').reverse().join(' ');
                },
                remove(){
                    this.show1=true
                    
                    var temp = []; 
                    var arr=this.str.split(' ')
                    for(var i = 0; i < arr.length; i++){
                        if(temp.indexOf(arr[i]) == -1){
                            temp.push(arr[i]);
                        }
                    }
                    return this.result1=temp.join(' ');
                },
                sort(){
                    this.show2=true

                    var arr=this.str.split(' ')
                    for(let i = 0,l=arr.length;i<l-1;i++) {
                        for(let j = i+1;j<l;j++) { 
                        if(arr[i]>arr[j]) {
                                let tem = arr[i];
                                arr[i] = arr[j];
                                arr[j] = tem;
                            }
                                    }
                        }
                        return this.result2=arr.join(' ');
                },
                add(){
                    this.show3=true

                    var arr=this.str.split(' ')
                    var sum = 0

                    for(let i=0;i<arr.length;i++){
                        sum+=Number(arr[i])
                    }
                    return this.result3=sum
                    
                },
                reduce(){
                    this.show4=true

                    var arr=this.str.split(' ')
                    var minPrice = arr[0];
                    var maxProfit = 0;
                    for (var i = 0; i < arr.length; i++) {
                        var currentPrice = arr[i];

                        minPrice = Math.min(minPrice, currentPrice);

                        var potentialProfit = currentPrice - minPrice;

                        maxProfit = Math.max(maxProfit, potentialProfit);
                    }
                    return this.result4=maxProfit;
                    
                }
            }
        }
    </script>
    <style scoped>
        .all .d1 div{
            float: left;
            width:600px;
            }
        .d1{
            float: left;
        }

        .el-tag{
          float: left;
            width: 400px;
            height:40px;
            margin-top: 10px;
            margin-left: 10px;
            line-height: 40px;
        }
        .all .d1 .i1{
            float: left;
            width: 400px;
        margin-top: 10px;
            
        }
    .b1{
        margin-top: 10px;
        margin-left: 10px;
        float: left;
    }.b2{
        margin-top: 10px;
        margin-left: 410px;
        float: left;
    }
   
    </style>
    