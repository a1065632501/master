<template>
        <div class='all2'>
            <div class='logo'>
                <router-link :to='{path:"/fmusic/recommend"}' class="a1">推荐</router-link>
                <router-link :to='{path:"/fmusic/ranking"}' class="a2">排行榜</router-link>
                <router-link :to='{path:"/fmusic/list"}' class="a3">歌单</router-link>
                <router-link :to='{path:"/fmusic/dj"}' class="a4">2048</router-link>
                <router-link :to='{path:"/fmusic/singer"}' class="a5">贪吃蛇</router-link>
                <router-link :to='{path:"/fmusic/news"}' class="a6">新碟上架</router-link>
            </div>
            <button class="fanhui" @click="top()" v-show='show3'></button>
            <router-view></router-view>
            
        </div>  
    </template>
    <script>
    export default {
        mounted () {
              window.addEventListener('scroll', this.handleScroll)
            },
            watch:{
                long:function(){
                    if(this.long>0){ 
                        this.show3=true
                    }else{
                        this.show3=false
                    }
                }
            },
            data () {
                return {
                    long:0,
                    show3:false,
                }
            },
            methods: {
                handleScroll(){
                    var scrollTop = window.pageYOffset
                    this.long=scrollTop
                },           
                top(){
                    window.scroll(0,0)
                },
                
            }
        }
    </script>
    <style scoped>
         .all2 .fanhui{
            position: fixed;
            width: 45px;
            height:45px;
            right:125px;
            top:450px;
            display: block;
            background:url(../assets/buttom.png);
            border:1px solid rgb(170, 169, 169);
            outline:none ;
            border-radius: 3px;
        }
        .sll2 .fanhui:hover{
            background:url(../assets/buttom1.png);
        }
        .all2 .shanzhai {
            width: 100%;
            height:200px;
            color:red;
            line-height: 200px;
            font-size: 60px;
            text-align: center;
        }
        .all2{
            min-width: 1300px;
            width:100%;
            height:100%;
            background:#f5f5f5;
        }
        .logo {
            min-width: 1300px;
            width:100%;
            height:35px;
            background:#c20c0c;
        }
        .all2 .logo a{
            display: block;
            float: left;
            margin-top:7px;
            text-align: center;
            line-height: 20px;
            font-size:12px;
            color:#fff;
            text-decoration: none;
            width:65px;
            height: 20px;
            border-radius: 30px;
            background:#c20c0c;
        }
        .all2 .logo a:hover{
    
            background:#9b0909;
        }
        .all2 .logo .router-link-active{
            
            background:#9b0909;
        }
        .a1 {
    
            margin-left:313px;
        }
        .a2 {
            margin-left:28px;
        }
        .a3 {
            margin-left:28px;
        }
        .a4 {
            margin-left:28px;
        }
        .a5 {
            margin-left:28px;
        }
        .a6 {
            margin-left:28px;
        }
    
    </style>
    