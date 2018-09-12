<template>
    <div id='all1'>
        <div class='logo'></div>
        <div class='chose'>
            <router-link :to='{path:"/fmusic"}' class="a">发现音乐</router-link>
            <router-link :to='{path:"/mymusic"}' class="b">我的音乐</router-link>
            <router-link :to='{path:"/friend"}' class="c">朋友</router-link>
            <router-link :to='{path:"/shop"}' class="d">商城</router-link>
            <router-link :to='{path:"/people"}' class="e">音乐人</router-link>
            <router-link :to='{path:"/down"}' class="f">下载客户端</router-link>
        </div>
        <div class='input'>
            <input type="text" value="音乐/视频/电台/用户"
            onfocus='if(this.value=="音乐/视频/电台/用户"){this.value="";};'   
            onblur='if(this.value==""){this.value="音乐/视频/电台/用户";};'> 
        </div>
        <div class='video'>
            <a href="" class='all'>
                <div class='left'></div>
                <div class='right'>视频投稿</div>
            </a>
        </div>
        <div class='on' v-on:mouseenter="show=false" v-on:mouseleave="show=true">
            <a class='a1' href="">登录</a>
            <div class='pic'></div>
            <div class='list' :class="{'lists':show}">
                <div class='san'></div>
                <ul>
                    <li class='l1'>
                        <div class='left'></div>
                        <a href="" class='right'>手机号登录</a>
                    </li>
                    <li class='l2'>
                        <div class='left2'></div>
                        <a href="" class='right'>微信号登录</a>
                    </li>
                    <li class='l3'>
                        <div class='left3'></div>
                        <a href="" class='right'>QQ登录</a>
                    </li>
                    <li class='l4'>
                        <div class='left4'></div>
                        <a href="" class='right'>新浪微博登录</a>
                    </li>
                    <li class='l5'>
                        <div class='left5'></div>
                        <a href="" class='right'>网易邮箱登录</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>  
export default {
    name: 'Top',
    data(){
        return{
            show:true
        }
    }
}
</script>
<style scoped>
    #all1 {
        min-width: 1300px;
        width:100%;
        height:68px;
        background:#242424;
        border-bottom:1px solid #000;
        position: relative;
    }
    .text {
        height:68px;
        width:100%;
        background:#fff;
    }
    #all1 div{
        float: left;
    }
    #all1 .logo {
        width: 175px;
        height:100%;
        margin-left:125px;
        background:url(../assets/logo.png) no-repeat;
    }
    #all1 .chose {
        width: 555px;
        height:100%;
        background: #242424;
        text-align: center;
        line-height:68px;
    }
    #all1 .chose a{
        display: block;
        float: left;
        text-decoration: none;   
        font-size: 14px;
        color:white;
        opacity: 0.8;
    }
    #all1 .chose a:hover { 
        background-color:rgb(0, 0, 0); 
        opacity: 1;
    } 
    #all1 .input {
        width: 200px;
        height:100%;
        background: #242424;
    }
    #all1 .input input{
        height:32px;
        width: 137px;
        margin-top:19px;
        margin-left:40px;
        border-radius: 30px;
        border:0px;
        outline: none;
        padding-left:20px;
        overflow:hidden;
    }
    #all1 .video .all{
        display: block;
        height:32px;
        width: 87px;
        margin-top:18px;
        margin-left:10px;
        border-radius: 30px;
        border:1px solid #4f4f4f;
        overflow:hidden;
        text-decoration: none;   
    }
    #all1 .video :hover{
        border:1px solid white;
    }
    #all1 .video :hover .all .right{
        color:#fff;
    }
    #all1 .video .all .left{
        height:18px;
        width: 20px;
        margin-left:5px;
        margin-top:7px;
        border:none;
        background:url(../assets/video.png);
    }
    #all1 .video .all .right{
        height:22px;
        width: 50px;
        margin-top:5px;
        margin-left:5px;
        font-size:8px;
        line-height: 22px;
        color: rgb(228, 227, 227);
        border:none;
    }
    #all1 .on {
        height:47px;
        width: 60px;
        margin-top:19px;
        margin-left:15px;
        position: relative;
    }
    #all1 .on a{
        display:block;
        height:20px;
        width: 30px;
        text-decoration: none;
        font-size:6px;
        color:#fff;
        margin-top:5px;
        line-height: 20px;
        margin-left:5px;
        float: left;
        overflow: hidden;
    }
    #all1 .on .a1 {
        color:#fff;
        opacity: 0.8;
    }  #all1 .on .a1:hover {

        opacity: 1;
    } 
    #all1 .on .pic{
        height:10px;
        width: 14px;
        font-size:6px;
        background:url(../assets/san.png) no-repeat;
        margin-top:12px;
        margin-left:5px;
        line-height: 20px;
        float: left;
    }
    #all1 .on .list {
        height: 200px;
        width: 150px;
        border:1px solid#2B2B2B;
        margin-left: -61px;
        margin-top: 15px;
        border-radius: 5px;
        background-color: #2B2B2B;
        position: absolute;
        z-index: 999;
        top: 24px;
    }
    #all1 .on .lists {
        height: 200px;
        width: 150px;
        border:1px solid #2B2B2B;
        margin-left: -61px;
        margin-top: 15px;
        border-radius: 5px;
        position: relative;
        background-color: #2B2B2B;
        display: none;
        position: absolute;
        top: 24px;
        z-index: 999;

    }
    #all1 .on .list .san{
        width: 0;
        height: 0;
        border-left: 5px solid transparent;  
        border-right: 5px solid transparent;
        border-bottom: 5px solid #2B2B2B;
        position: absolute;
        top:-6px;
        left:70px;
    }
    #all1 .on .list li {
        display: block;
        width: 150px;
        height: 39px;
        color:white;
        border-bottom:1px solid rgb(27, 27, 27);
        filter: opacity(60%);
    }
    #all1 .on .list .l1:hover{ 
        filter: opacity(1);
    }
    #all1 .on .list .l2:hover{ 
        filter: opacity(1);
    }
    #all1 .on .list .l3:hover{ 
        filter: opacity(1);
    }
    #all1 .on .list .l4:hover{ 
        filter: opacity(1);
    }
    #all1 .on .list .l5:hover{ 
        filter: opacity(1);
    }

    #all1 .on .list ul .l5{
        width: 150px;
        height: 39px;
        border:none;
    }
    #all1 .on .list li .left{
        width: 30px;
        height: 30px;
        margin-top:5px;
        margin-left:10px;

        background: url(../assets/1.png)
    } 
    #all1 .on .list li .left2{
        width: 30px;
        height: 30px;
        margin-top:5px;
        margin-left:10px;

        background: url(../assets/2.png)
    } 
    #all1 .on .list li .left3{
        width: 30px;
        height: 30px;
        margin-top:5px;
        margin-left:10px;

        background: url(../assets/3.png)
    } 
    #all1 .on .list li .left4{
        width: 30px;
        height: 30px;
        margin-top:5px;
        margin-left:10px;

        background: url(../assets/4.png)
    } 
    #all1 .on .list li .left5{
        width: 30px;
        height: 30px;
        margin-top:5px;
        margin-left:10px;

        background: url(../assets/5.png)
    } 
     #all1 .on .list li .right{
        display: block;
        width: 90px;
        height: 30px;
        margin-top:5px;
        margin-left:5px;

        line-height: 30px;
        overflow: hidden;
     }
    #all1 .chose .a{
        width: 92px;
        height: 68px;
        background: #242424;
    }
    #all1 .chose .b{
        width: 95px;
        height: 68px;
        background: #242424;
    }
    #all1 .chose .c{
        width: 68px;
        height: 68px;
        background: #242424;
    }
    #all1 .chose .d{
        width: 75px;
        height: 68px;
        background: #242424;
    }
    #all1 .chose .e{
        width: 70px;
        height: 68px;
        background: #242424;
    }#all1 .chose .f{
        width: 110px;
        height: 68px;
        background: #242424;
    }
    #all1 .chose .router-link-active{
        background-color:rgb(0, 0, 0); 
        opacity: 1;
    }
</style>