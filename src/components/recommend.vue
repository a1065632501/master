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
            right:184px;    
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
            margin-top:57px;
        }
        .slideshow {
            width: 100%;
            height: 334px;

        }
        li {
            position: absolute;
            left:0px;
            width:100%;
            height:334px;
            right:435px;

        }a {
            position: absolute;
            left:0px;
            width:100%;
            height:334px;
            right:435px;

        }
        img {
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
    </style>
    