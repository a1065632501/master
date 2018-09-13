<template>
        <div class='all2'>
            <div class='logo'>
                <router-link :to='{path:"/fmusic/recommend"}' class="a1">推荐</router-link>
                <router-link :to='{path:"/fmusic/ranking"}' class="a2">排行榜</router-link>
                <router-link :to='{path:"/fmusic/list"}' class="a3">歌单</router-link>
                <router-link :to='{path:"/fmusic/dj"}' class="a4">主播电台</router-link>
                <router-link :to='{path:"/fmusic/singer"}' class="a5">歌手</router-link>
                <router-link :to='{path:"/fmusic/news"}' class="a6">新碟上架</router-link>
            </div>
            <router-view></router-view>
            
        </div>  
    </template>
    <script>
    export default {
        name: 'Bottom'
    }
    </script>
    <style scoped>
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
            height:1700px;
            background:pink;
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
    