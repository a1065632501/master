<template>
        <div class='reall'>
            <div class="reshow">
                <div class="slideshow">
                    <transition-group tag="ul" :name="name">
                        <li v-for="(item, key, index) in imgArray" v-show="index===mark" :key="index" :class='key'>
                            <a href="#">
                                <img :src='item'>
                            </a>
                        </li>
                    </transition-group>    
                </div>    
                    <div class="bar">
                            <span v-on:click="change1(index)" v-for="(item, key, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
                    </div>                      
                <div class="retop">
                    <div class="res"></div>
                    <a href="" class="rez"></a>
                    <div class="rex">PC&nbsp安卓&nbspiPhone&nbspWP&nbspiPad&nbspMac&nbsp六大客户端</div>
                </div>
            </div>
            <div class="releft">
                <div class="hot">
                    <div class="s">
                        <div class="s1"></div>
                        <div class="s2">热门推荐</div>
                        <div class="s3">
                            <a href="#" class="s31">华语</a>
                            <a href="#" class="s32">流行</a>
                            <a href="#" class="s33">摇滚</a>
                            <a href="#" class="s34">民谣</a>
                            <a href="#" class="s35">电子</a>
                        </div>
                        <div class="s4">
                            <div class="s42"></div>
                            <div class="s41">更多</div>
                            
                        </div>
                    </div>
                    <div class="z">
                        <div class="z1">
                            <div class="z11"></div>
                            <a href="#" class="z12">英语课上那些英文歌曲青春印象</a>
                        </div>
                        <div class="z2">
                                <div class="z21"></div>
                                <a href="#" class="z22">我们不畏惧眼泪但要值得</a>
                        </div>
                        <div class="z3">
                                <div class="z31"></div>
                                <a href="#" class="z32">欧美金曲的另类大师演绎</a>
                        </div>
                        <div class="z4">
                                <div class="z41"></div>
                                <a href="#" class="z42">潇洒办事处今日营业中</a>
                        </div>
                        <div class="z5">
                                <div class="z51"></div>
                                <a href="#" class="z52">学院派走流行|高等学府走出来的音乐人</a>
                        </div>
                        <div class="z6">
                                <div class="z61"></div>
                                <a href="#" class="z62">我们在一个神奇的国度里</a>
                        </div>
                        <div class="z7">
                                <div class="z71"></div>
                                <a href="#" class="z72">明夜别枝惊鹊，清风半夜鸣蝉</a>
                        </div>
                        <div class="z8">
                                <div class="z81"></div>
                                <a href="#" class="z82">当妮走了，抖音冗</a>
                        </div>
                    </div>
                    <div class="x"></div>
                </div>
                <div class="renew"></div>
                <div class="bangdan"></div>
            </div>
            <div class="reright">

            </div>   
        </div>
    </template>
    <script>
        export default {
            data () {
                return {
                    name:'left',
                    mark:0,
                    imgArray: {
                        "red":"http://p1.music.126.net/Zn_RnFZDNgJOqINTWw9CJQ==/109951163546254140.jpg",
                        "orange":"http://p1.music.126.net/CUBMTkTX4s5z6zgTFYU5Kw==/109951163545903122.jpg",
                        "yellow":"http://p1.music.126.net/VHaUSB1qLqrgi0BkDvr3DQ==/109951163545891926.jpg",
                        "green":"http://p1.music.126.net/07TWdvFVmSvEgMUUNo2fMA==/109951163545907304.jpg",
                        "blue":"http://p1.music.126.net/TRCUd9oi1AtO8YTo4uvBaQ==/109951163545897207.jpg",
                        "pink":"http://p1.music.126.net/4XzBCmNHydK_BbigSX8vDA==/109951163545906884.jpg",
                        "black":"http://p1.music.126.net/_QKAR6fwGNpHYSu8HXmE6g==/109951163545901487.jpg",
                        "white":"http://p1.music.126.net/7nofGpRX-nMOnsKCkfaR2w==/109951163544342932.jpg"
                        
                    }
                }
            },
            methods: {
                autoPlay () {
                this.mark++;
                if (this.mark === 8) { //当遍历到最后一张图片置零
                    this.mark = 0
                }
                },
                play () {
                setInterval(this.autoPlay, 4000)
                },
                change1(index){
                    if(this.mark<index){
                        this.name="left"
                    }else{
                        this.name="right"
                    }
                    this.mark=index    
                },
            },
            created () {
                this.play()
            }
        }
    </script>
    <style scoped>
        * {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .reall .reshow {
            width:100%;
            min-width: 1300px;
            height:334px;
            position: relative;
        }
        .reall .reshow .retop{
            width:251px;
            height:334px;
            background:url(../assets/retop.png);
            position: absolute; 
            right:174px;    
            top:0px;

        }
        .reall .reshow .retop .res{
            width:255px;
            height:211px;

        }
        .reall .reshow .retop .rez{
            display: block;
            width:214px;
            height:57px;
            margin-left:18px;
            border-radius: 1px;

        }.reall .reshow .retop .rez:hover{
            background: #eee;
            opacity:0.2;
        }
        .reall .reshow .retop .rex{
            width:255px;
            height:30px;
            font-size: 5px;
            text-align: center;
            line-height: 30px;
            color:#8d8d8d;
            margin-top:2px;
        }
        .slideshow {
            width: 100%;
            height: 334px;

        }
        .reall .reshow .slideshow li {
            position: absolute;
            left:0px;
            width:100%;
            height:334px;
            right:435px;

        }.reall .reshow .slideshow a {
            position: absolute;
            left:0px;
            width:100%;
            height:334px;
            right:435px;

        }
        .reall .reshow .slideshow img {
            margin-left:188px;
            width: 724px;
            height: 334px;
        }
        .bar {
            position: absolute;
            width: 100%;
            bottom: 10px;
            left:-110px;
            z-index: 10;
            text-align: center;
        }
        .bar span {
            width: 6px;
            height: 6px;
            border-radius:3px;
            background: white;
            display: inline-block;
            margin-right: 17px;
        }
        .active {
            background: red !important;
        }
        .red {
            background: #bbbecf;
        }
        .orange {
            background: #403c3b;
        }
        .yellow {
            background:#f1e9d2;
        }
        .green {
            background:#ffe200;
        }
        .blue {
            background:#e4e2e3;
        }
        .pink {
            background:#090c11;
        }
        .black {
            background:#f5faff;
        }
        .white {
            background:#000;
        }.left-enter-active {
            transform: translateX(0);
            transition: all 1.5s ease;
        }
        .left-leave-active {
            transform: translateX(-100%);
            transition: all 1.5s ease;
        }
        .left-enter {
            transform: translateX(100%);
        }
        .left-leave {
            transform: translateX(0);
        }
        .right-enter-active {
            transform: translateX(0);
            transition: all 1.5s ease;
        }
        .right-leave-active {
            transform: translateX(100%);
            transition: all 1.5s ease;
        }
        .right-enter {
            transform: translateX(-100%);
        }
        .right-leave {
            transform: translateX(0);
        }
        .reall .releft{
            width: 724px;
            height:1330px;
            margin-left:188px;
            background: rgb(194, 236, 227);
            float: left;
        }
        .reall .reright{
            width:252px;
            height:1330px;
            float:left;
            background: #403c3b;
        }
        .reall .releft .hot{
           width:724px;
           height:700px;
           background:white;
        }
        .reall .releft .hot .s{
            width:684px;
            height:55px;
            margin-left:20px;
            border-bottom: 2px solid red;
        }
        .reall .releft .hot .s .s1{
            width:30px ;
            height:40px;
            background: url(../assets/biaoji.png) no-repeat;
            float: left;
            margin-left:5px;
            margin-top:26px;
        }
        .reall .releft .hot .s .s2{
            width:95px;
            height:40px; 
            font-size:20px;
            line-height: 40px;
            margin-top:15px;
            float: left;
            color:rgb(71, 71, 71);
        }
        .reall .releft .hot .s .s3{
            width:320px;
            height:40px; 
            font-size:13px;
            line-height: 40px;
            margin-top:26px;
            float: left;
            color:rgb(71, 71, 71);
        }
        .reall .releft .hot .s .s3 a{
            text-decoration: none;
            display: block;
            float: left;
            width:50px;
            height:10px;
            line-height:10px;
            text-align: center;
            margin-top:5px;
            border-right: 1px solid #ddd;
            color:rgb(131, 130, 130);
        }
        .reall .releft .hot .s .s3 a:hover{
            text-decoration: underline;
        }
        .reall .releft .hot .s .s4{
            width:60px;
            height:40px; 
            font-size:13px;
            line-height: 40px;
            margin-top:16px;
            float: right;
            color:rgb(131, 130, 130);
        }
        .reall .releft .hot .s .s41{    
            margin-top:1px;
        }
        .reall .releft .hot .s .s42{    
            width: 30px;
            height:40px;
            float:right;
            margin-top:12px;
            background: url(../assets/jiantou.png) no-repeat;
        }
        .reall .releft .hot .z{
            width:724px;
            height:855px;
            margin-top:10px;
        }
        .reall .releft .hot .z div{
            width: 141px;
            height: 178px;
            margin:10px 20px 40px 20px;
            float: left;
        }
        .reall .releft .hot .z .z1 .z11{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z1.png);
        }
       
        .reall .releft .hot .z a{
            display: block;
            width:141px;
            height: 40px;
            font-size: 14px;
            line-height: 20px;
            text-decoration: none;
        }
        .reall .releft .hot .z a:hover{
            text-decoration: underline;
        }
        .reall .releft .hot .z .z2 .z21{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z2.png);
        }
       

        .reall .releft .hot .z .z3 .z31{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z3.png);
        }
       

        .reall .releft .hot .z .z4 .z41{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z4.png);
        }
       

        .reall .releft .hot .z .z5 .z51{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z5.png);
        }
       

        .reall .releft .hot .z .z6 .z61{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z6.png);
        }
        .reall .releft .hot .z .z7 .z71{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z7.png);
        }.reall .releft .hot .z .z8 .z81{
            width:141px;
            height:138px;
            float:none;
            margin:0px;
            background: url(../assets/z8.png);
        }
    </style>
    