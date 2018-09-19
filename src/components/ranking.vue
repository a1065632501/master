<template>
    <div class="rank">
        <div class="left">
            <div class="top">
                <div class="t1">云音乐特色榜</div>
                <div class="t2">
                    <a href="#" class="z1" v-for="item in zArray">
                        <div class="z11">
                            <img :src="item.background">
                        </div>
                        <div class="z12">
                            <span class="z121">{{item.title}}</span>
                            <span class="z122">{{item.title1}}</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="bottom">
                    <div class="t1">全球媒体榜</div>
                    <div class="t2">
                            <a href="#" class="z1" v-for="item in xArray">
                                <div class="z11">
                                    <img :src="item.background">
                                </div>
                                <div class="z12">
                                    <span class="z121">{{item.title}}</span>
                                    <span class="z122">{{item.title1}}</span>
                                </div>
                            </a>
                        </div>
            </div>
        </div>
        <div class="right">
            <div class="top">
                <div class="l"></div>
                <div class="r">
                    <div class="s">{{title}}</div>
                    <div class="z">
                        <div class="z1"></div>
                        <div class="z2">最近更新：{{time}}（每天更新）</div>
                    </div>
                    <div class="x">
                        <a href="#" class="x1"></a>
                        <a href="#" class="x2"></a>
                        <a href="#" class="x3"><img src="../assets/xiaosc.png">
                            ({{save}})
                        </a>
                        <a href="#" class="x4"><img src="../assets/zhuanfa.png">({{relay}})</a>
                        <a href="#" class="x5"><img src="../assets/xiazai.png">下载</a>
                        <a href="#" class="x6"><img src="../assets/pinglun.png">({{discuss}})</a>
                    </div>
                </div>

            </div>
            <div class="bottom"></div>

        </div>
    </div>
</template>
    <script>
        export default {   
            data () {
                return{
                    discuss:136265,
                    relay:4133,
                    save:1230005,
                    title:'云音乐飙升榜',
                    time:'09月19日',
                    zArray:[
                        {   index:0,
                            background:require('../assets/t1.png'),
                            title:'云音乐飙升榜',
                            title1:'每天更新'
                        },
                        { index:1,
                            background:require('../assets/t2.png'),
                            title:'云音乐新歌榜',
                            title1:'每天更新'
                        },
                        { index:2,
                            background:require('../assets/t3.png'),
                            title:'网易原创歌曲榜',
                            title1:'每周四更新'
                        },
                        { index:3,
                            background:require('../assets/t4.png'),
                            title:'云音乐热歌榜',
                            title1:'每周四更新'
                        }],
                    xArray:[
                       
                        {   index:4,
                            background:require('../assets/t5.png'),
                            title:'说唱TOP榜',
                            title1:'每周五更新'
                        },
                        { index:5,
                            background:require('../assets/t6.png'),
                            title:'公告牌音乐榜',
                            title1:'每天更新'
                        },
                        { index:6,
                            background:require('../assets/t7.png'),
                            title:'江小白YOLO云音乐说唱榜',
                            title1:'每周五更新'
                        },
                        { index:7,
                            background:require('../assets/t8.png'),
                            title:'云音乐电音榜',
                            title1:'每周五更新'
                        },
                        {   index:8,
                            background:require('../assets/t9.png'),
                            title:'抖音排行榜',
                            title1:'每周三更新'
                        },
                        { index:9,
                            background:require('../assets/t10.png'),
                            title:'云音乐韩语榜',
                            title1:'每周四更新'
                        },
                        { index:10,
                            background:require('../assets/t11.png'),
                            title:'英国Q杂志中文榜周榜',
                            title1:'每周三更新'
                        },
                        { index:11,
                            background:require('../assets/t12.png'),
                            title:'电竞音乐榜',
                            title1:'每周五更新'
                        },
                        {   index:12,
                            background:require('../assets/t13.png'),
                            title:'云音乐国电榜',
                            title1:'每周四更新'
                        },
                        { index:13,
                            background:require('../assets/t14.png'),
                            title:'云音乐ACG音乐榜',
                            title1:'每周四更新'
                        },
                        { index:14,
                            background:require('../assets/t15.png'),
                            title:'云音乐古典音乐榜',
                            title1:'每周一更新'
                        },
                        { index:15,
                            background:require('../assets/t16.png'),
                            title:'UK排行榜周榜',
                            title1:'每周四更新'
                        },
                        {   index:16,
                            background:require('../assets/t17.png'),
                            title:'美国Billboard周榜',
                            title1:'每周五更新'
                        },
                        { index:17,
                            background:require('../assets/t18.png'),
                            title:'Beatport全球电子舞曲榜',
                            title1:'刚刚更新'
                        },
                        { index:18,
                            background:require('../assets/t19.png'),
                            title:'发过 NRJ Vos Hits 周榜',
                            title1:'每周四更新'
                        },
                        { index:19,
                            background:require('../assets/t20.png'),
                            title:'KTV唛榜',
                            title1:'每周四更新'
                        },
                        {   index:20,
                            background:require('../assets/t21.png'),
                            title:'iTunes榜',
                            title1:'每周四更新'
                        },
                        { index:21,
                            background:require('../assets/t22.png'),
                            title:'日本Oricon周榜',
                            title1:'每周四更新'
                        },
                        { index:22,
                            background:require('../assets/t23.png'),
                            title:'Hit FM Top榜',
                            title1:'每周五更新'
                        },
                        { index:23,
                            background:require('../assets/t24.png'),
                            title:'台湾Hito排行榜',
                            title1:'每周五更新'
                        },
                        {   index:24,
                            background:require('../assets/t25.png'),
                            title:'中国TOP排行榜（港台榜）',
                            title1:'每周五更新'
                        },
                        { index:25,
                            background:require('../assets/t26.png'),
                            title:'港台中文歌曲龙虎榜',
                            title1:'每周五更新'
                        },
                        { index:26,
                            background:require('../assets/t27.png'),
                            title:'中国嘻哈榜',
                            title1:'每周五更新'
                        }
                    ],
                }
            }
          
        }
    </script>
    <style>
        * {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .rank {
            background: #f5f5f5;
            width:100%;
            height: 100%;
        }
       
        .rank .right{
            width: 737px;
            height:1811px;
            background: #fff;
            float: left;
            border-right:1px solid #ddd;
        }
        .rank .left{
            width:240px;
            height:1811px;
            float:left;
            margin-left:190px;
            background:#f9f9f9;
            border:1px solid #ddd;
            border-top: none;
        }
        .rank .left .top {
            width: 240px;
            height: 288px;
        }
        .rank .left .top .t1{
            width: 230px;
            height:40px;
            margin-top: 28px;
            padding-left:10px;
            font-size: 15px;
            font-weight: bold;
            line-height: 40px;
        }
        .rank .left .bottom .t1{
            width: 230px;
            height:50px;
            padding-left:10px;
            font-size: 15px;
            font-weight: bold;
            line-height: 50px;
        }
        .rank .left .top .t2{
            width:240px;
            height: 248px;
            
        }
        .rank .left .top .t2 a:hover{
            background: #f4f2f2;
        }
       
        .rank .left .top .t2 .z1{
            display: block;
            height:62px;
            width: 240px;
            background: #fafafa;
            text-decoration: none;
        }
        .rank .left .top .t2 .z1:hover{
            background: #f4f4f4;

        }
        .rank .left .top .t2 .z1 .z11{
            float: left;
            margin-top: 11px;
            margin-left: 20px;
            width: 40px;
            height: 40px;    
        }.rank .left .top .t2 .z1 .z11 img{
            background: no-repeat;
            width: 40px;
            height: 40px;    
        }   
        .rank .left .top .t2 .z1 .z12{
            width: 120px;
            height: 40px;
            float: left;
            margin-left:10px;
            margin-top: 10px;
            font-size: 12px;
        }
        .rank .left .top .t2 .z1 .z121{
            display: block;
            height: 20px;
            width:120px;
            color: black;

            
        }
        .rank .left .top .t2 .z1 .z122{
            display: block;
            height: 20px;
            width:110px;
            line-height: 24px;
            opacity: 0.8;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            color: #403c3b;
        }
        .rank .left .bottom .t2{
            width:240px;
            height: 248px;
            
        }
        .rank .left .bottom .t2 a:hover{
            background: #f4f2f2;
        }
       
        .rank .left .bottom .t2 .z1{
            display: block;
            height:62px;
            width: 240px;
            background: #fafafa;
            text-decoration: none;
        }
        .rank .left .bottom .t2 .z1:hover{
            background: #f4f4f4;

        }
        .rank .left .bottom .t2 .z1 .z11{
            float: left;
            margin-top: 11px;
            margin-left: 20px;
            width: 40px;
            height: 40px;    
        }.rank .left .bottom .t2 .z1 .z11 img{
            background: no-repeat;
            width: 40px;
            height: 40px;    
        }   
        .rank .left .bottom .t2 .z1 .z12{
            width: 120px;
            height: 40px;
            float: left;
            margin-left:10px;
            margin-top: 10px;
            font-size: 12px;
        }
        .rank .left .bottom .t2 .z1 .z121{
            display: block;
            height: 20px;
            width:120px;
            color: black;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            
        }
        .rank .left .bottom .t2 .z1 .z122{
            display: block;
            height: 20px;
            width:110px;
            line-height: 24px;
            opacity: 0.8;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            color: #403c3b;
        }
        .rank .right .top{
            width: 660px;
            height: 160px;
            margin: 40px;
        }
        .rank .right .bottom{
            width: 660px;
            height: 1560px;
            margin: 0px 0px 0px 40px;
            background: rgb(250, 250, 173);
        }
        .rank .right .top .l{
            width: 160px;
            height: 160px;
            background: url(../assets/qq1.png) no-repeat;
            float: left;
        }.rank .right .top .r{
            width: 500px;
            height: 160px;
            float: left;
        }
        .rank .right .top .r .s{
            width: 470px;
            height:50px;
            margin-top: 5px;
            font-size: 20px;
            line-height: 50px;
            padding-left:30px;
        }
        .rank .right .top .r .z{
            width: 470px;
            height:15px;
            line-height: 15px;
 
        }.rank .right .top .r .z .z1{
            width: 15px;
            height:15px;
            background: url(../assets/xbiao.png) no-repeat;
            line-height: 30px;
            margin-left:30px;
            float: left;
        }
        .rank .right .top .r .z .z2{
            width: 270px;
            height:15px;
            font-size: 12px;
            line-height: 15px;
            float: left;
            color: rgb(144, 144, 144);
            margin-left: 4px;
        }
        .rank .right .top .r .x{
            width: 470px;
            height:88px;
            float: left;
        }
        .rank .right .top .r .x .x1{
            width: 61px;
            height:28px;
            margin-top:30px;
            margin-left: 30px;
            border:1px solid #3984ce;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            background: url(../assets/play.png) no-repeat;
            float: left;
        }
        .rank .right .top .r .x .x1:hover{
            opacity: 0.9;
        }
        .rank .right .top .r .x .x2{
            width: 28px;
            height:28px;
            margin-top:30px;
            border:1px solid #3984ce;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            background: url(../assets/+.png) no-repeat;
            float: left;
            text-decoration: none;
        }
        .rank .right .top .r .x .x2:hover{
            opacity: 0.9;
        }
        .rank .right .top .r .x .x3{
            width: 63px;
            height:28px;
            margin-top:30px;
            margin-left: 5px;
            background-color: #fefefe;
            border:1px solid #a7a7a7;
            border-radius: 4px;
            text-decoration: none;
            float: left;
            font-size: 12px;
            line-height: 28px;
            padding-left:27px;
            color:#000;
            background: -webkit-linear-gradient( top,#fefefe,#f1f1f1);
            position: relative;
        }
        .rank .right .top .r .x img{
            position: absolute;
            top:6px;
            left: 8px;
        }
        .rank .right .top .r .x .x4 img{
            position: absolute;
            top:7px;
            left: 8px;
        }
        .rank .right .top .r .x .x6 img{
            position: absolute;
            top:7px;
            left: 8px;
        }
        .rank .right .top .r .x .x3:hover{
            border:1px solid #c3c3c3;
            background: #fefefe;
           
        }
        .rank .right .top .r .x .x4{
            width:46px;
            height:28px;
            margin-top:30px;
            margin-left: 5px;
            background-color: #fefefe;
            border:1px solid #a7a7a7;
            border-radius: 4px;
            text-decoration: none;
            font-size: 12px;
            float: left;
            line-height: 28px;
            color:#000;
            padding-left:27px;
            background: -webkit-linear-gradient( top,#fefefe,#f1f1f1);
            position: relative;
        }
        
        .rank .right .top .r .x .x4:hover{
            border:1px solid #d6d6d6;
           
        }
        .rank .right .top .r .x .x5{
            width: 34px;
            height:28px;
            margin-top:30px;
            margin-left: 5px;
            background-color: #fefefe;
            border:1px solid #a7a7a7;
            border-radius: 4px;
            text-decoration: none;
            font-size: 12px;
            float: left;
            line-height: 28px;
            color:#000;
            padding-left:27px;
            background: -webkit-linear-gradient( top,#fefefe,#f1f1f1);
            position: relative;
        }
        
        .rank .right .top .r .x .x5:hover{
            border:1px solid #d6d6d6;
           
        }
        .rank .right .top .r .x .x6{
            width: 58px;
            height:28px;
            margin-top:30px;
            margin-left: 5px;
            background-color: #fefefe;
            border:1px solid #a7a7a7;
            border-radius: 4px;
            text-decoration: none;
            font-size: 12px;
            float: left;
            line-height: 28px;
            color:#000;
            padding-left:27px;
            background: -webkit-linear-gradient( top,#fefefe,#f1f1f1);
            position: relative;
        }
        
        .rank .right .top .r .x .x6:hover{
            border:1px solid #d6d6d6;
           
        }
    </style>
    