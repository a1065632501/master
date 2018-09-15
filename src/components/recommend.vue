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
                    <a href="#" class="rez"></a>
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
                            <a href="#" class="s41">更多</a>
                            
                        </div>
                    </div>
                    <div class="z">
                        <div class="z1" v-for="item in Array1">
                            <div class="z11">
                                <img :src='item.background'>
                            </div>
                            <a href="#" class="z12">{{item.title}}</a>
                        </div>
                    </div>
                    <div class="x"></div>
                </div>
                <div class="renew">
                    <div class="s">
                        <div class="s1"></div>
                        <div class="s2">新碟上架</div>
                        <div class="s3">
                            <a href="#" class="s31"></a>
                            <a href="#" class="s32"></a>
                            <a href="#" class="s33"></a>
                            <a href="#" class="s34"></a>
                            <a href="#" class="s35"></a>
                        </div>
                        <div class="s4">
                            <div class="s42"></div>
                            <a class="s41">更多</a>                       
                        </div>
                    </div>
                    <div class="x">
                        <div class="x1">
                            <div class='x11'>
                                <transition-group tag="ul" :name="name1">
                                <li v-for="item in dArray" :key="item.index" v-show="item.index-mark1<5&&item.index-mark1>=0">
                                    <div>
                                        <div class='x111'>
                                            <img :src="item.background">
                                        </div>
                                        <div class='x112'>{{item.title}}</div>
                                    </div>
                                </li>
                                </transition-group>
                           </div>   
                         </div>
                         <span class="left" v-on:click="change2()"></span>
                         <span class="right" v-on:click="change3()"></span>    
                    </div>
                </div>
                <div class="bangdan">
                    <div class="s">
                        <div class="s1"></div>
                        <div class="s2">榜单</div>
                        <div class="s3">
                            <a href="#" class="s31"></a>
                            <a href="#" class="s32"></a>
                            <a href="#" class="s33"></a>
                            <a href="#" class="s34"></a>
                            <a href="#" class="s35"></a>
                        </div>
                        <div class="s4">
                            <div class="s42"></div>
                            <a class="s41">更多</a>                       
                        </div>
                    </div>
                    <div class="x">
                        <div class="x1">
                                <div class="x11">
                                    <div class="x11left">
                                        
                                    </div>
                                    <div class="x11right">
                                        <a href="#">云音乐飙升榜</a>
                                        <div class="a"></div>
                                        <div class="b"></div>
                                    </div>
                                </div>
                                <span v-for='item in rArray' :class="{hui:item.index%2===0}" v-on:mouseenter="item.a=true" v-on:mouseleave="item.a=false">
                                    <div class="xa" :class="{xaa:item.index<3}">{{item.index1}}</div>
                                    <a href="#" class="xb">{{item.content}}</a>
                                    <div class="xc" v-show='item.a'>
                                        <div class="x1"></div>
                                        <div class="x2"></div>
                                        <div class="x3"></div>
                                    </div>
                                </span>
                                <div class="d">
                                    <a href="#" class="d1">查看全部></a>
                                </div>
                        </div>
                        <div class="x2">
                            <div class="x11">
                                <div class="x11left">
                                    
                                </div>
                                <div class="x11right">
                                    <a href="#">云音乐新歌榜</a>
                                    <div class="a"></div>
                                    <div class="b"></div>
                                </div>
                            </div>
                            <span v-for='item in eArray' :class="{hui:item.index%2===0}" v-on:mouseenter="item.a=true" v-on:mouseleave="item.a=false">
                                <div class="xa" :class="{xaa:item.index<3}">{{item.index1}}</div>
                                <a href="#" class="xb">{{item.content}}</a>
                                <div class="xc" v-show='item.a'>
                                    <div class="x1"></div>
                                    <div class="x2"></div>
                                    <div class="x3"></div>
                                </div>
                            </span>
                            <div class="d">
                                <a href="#" class="d1">查看全部></a>
                            </div>
                        </div>
                        <div class="x3">
                            <div class="x11">
                                <div class="x11left">
                                    
                                </div>
                                <div class="x11right">
                                    <a href="#">网易原创歌曲榜</a>
                                    <div class="a"></div>
                                    <div class="b"></div>
                                </div>
                            </div>
                            <span v-for='item in fArray' :class="{hui:item.index%2===0}" v-on:mouseenter="item.a=true" v-on:mouseleave="item.a=false">
                                <div class="xa" :class="{xaa:item.index<3}">{{item.index1}}</div>
                                <a href="#" class="xb">{{item.content}}</a>
                                <div class="xc" v-show='item.a'>
                                    <div class="x1"></div>
                                    <div class="x2"></div>
                                    <div class="x3"></div>
                                </div>
                            </span>
                            <div class="d">
                                <a href="#" class="d1">查看全部></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reright">
                <div class="rs">
                    <div class="rs1">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
                    <a href="#" class="rs2">用户登录</a>
                </div>
                <div class="rz"></div>
                <div class="rx"></div>
            </div>   
        </div>
    </template>
    <script>
        export default {
            watch:{
                mark1:function () {
                     if(this.mark1<0){
                    this.mark1=5
                } else if(this.mark1>5){
                    this.mark1=0
                }    
                }
            },
            data () {
                return {
                    name:'left',
                    mark:0,
                    mark1:0,
                    name1:'left1',
                    fArray:[
                        {
                            index:0,
                            index1:1,
                            content:'霓虹',
                            a:false
                        },
                        {
                            index1:2,
                            index:1,
                            content:'给你煮面',
                            a:false
                        },
                        {
                            index1:3,
                            index:2,
                            content:'哑巴',
                            a:false
                        },
                        {
                            index1:4,
                            index:3,
                            content:'少年行',
                            a:false
                        },
                        {
                            index1:5,
                            a:false,
                            index:4,
                            content:'通过考验'
                        },
                        {
                            index1:6,
                            a:false,
                            index:5,
                            content:'我说我当不了县长'
                        },
                        {
                            index1:7,
                            a:false,
                            index:6,
                            content:'幼稚的歌'
                        },
                        {
                            index1:8,
                            a:false,
                            index:7,
                            content:'觉华岛'
                        },
                        {
                            index1:9,
                            a:false,
                            index:8,
                            content:'小智'
                        },
                        {
                            index1:10,
                            a:false,
                            index:9,
                            content:'逆风的勇敢'
                        }
        
                    ],
                    eArray:[
                        {
                            index:0,
                            index1:1,
                            content:'可不可以',
                            a:false
                        },
                        {
                            index1:2,
                            index:1,
                            content:'乌云中(Live)',
                            a:false
                        },
                        {
                            index1:3,
                            index:2,
                            content:'一江水',
                            a:false
                        },
                        {
                            index1:4,
                            index:3,
                            content:'凌晨三点( demo )',
                            a:false
                        },
                        {
                            index1:5,
                            a:false,
                            index:4,
                            content:'最美的遇见'
                        },
                        {
                            index1:6,
                            a:false,
                            index:5,
                            content:'再见Hip-Hop'
                        },
                        {
                            index1:7,
                            a:false,
                            index:6,
                            content:'童言无忌(Live)'
                        },
                        {
                            index1:8,
                            a:false,
                            index:7,
                            content:'从头'
                        },
                        {
                            index1:9,
                            a:false,
                            index:8,
                            content:'飞驰于你'
                        },
                        {
                            index1:10,
                            a:false,
                            index:9,
                            content:'Burn Out'
                        }
        
                    ],
                    rArray:[
                        {
                            index:0,
                            index1:1,
                            content:'burn out',
                            a:false
                        },
                        {
                            index1:2,
                            index:1,
                            content:'飞驰于我',
                            a:false
                        },
                        {
                            index1:3,
                            index:2,
                            content:'无我(WORK)[Live]',
                            a:false
                        },
                        {
                            index1:4,
                            index:3,
                            content:'一个人去巴黎',
                            a:false
                        },
                        {
                            index1:5,
                            a:false,
                            index:4,
                            content:'Wake Up in the Sky'
                        },
                        {
                            index1:6,
                            a:false,
                            index:5,
                            content:'O.M.T'
                        },
                        {
                            index1:7,
                            a:false,
                            index:6,
                            content:'PUMA'
                        },
                        {
                            index1:8,
                            a:false,
                            index:7,
                            content:'想象'
                        },
                        {
                            index1:9,
                            a:false,
                            index:8,
                            content:'年少有为'
                        },
                        {
                            index1:10,
                            a:false,
                            index:9,
                            content:'BINBIAN病变'
                        }
        
                    ],
                    dArray:[
                        {   index:0,
                            background:require('../assets/x1.png'),
                            title:'岐王府里寻常见，崔九堂前几度闻'
                        },
                        { index:1,
                            background:require('../assets/x2.png'),
                            title:' 正是江南好风景，落花时节又逢君'
                        },
                        { index:2,
                            background:require('../assets/x3.png'),
                            title:'锦城丝管日纷纷，半入江风半入云'
                        },
                        { index:3,
                            background:require('../assets/x4.png'),
                            title:'此曲只应天上有，人间哪得几回闻'
                        },
                        { index:4,
                            background:require('../assets/x5.png'),
                            title:'故园东望路漫漫，双袖龙钟泪不干'
                        },
                        { index:5,
                            background:require('../assets/x6.png'),
                            title:'马上相逢无纸笔，凭君寄语报平安'
                        },
                        { index:6,
                            background:require('../assets/x7.png'),
                            title:'梁园日暮乱飞鸦，极目萧条三两家'
                        },
                        { index:7,
                            background:require('../assets/x8.png'),
                            title:'庭树不知人去尽，春来还发旧时花'
                        },
                        { index:8,
                            background:require('../assets/x9.png'),
                            title:'走马西来欲到天，辞家见月二回圆'
                        },
                        { index:9,
                            background:require('../assets/x10.png'),
                            title:'今夜不知何处宿，平沙莽莽绝人烟'
                        }
                    ],
                       
                    imgArray: {
                        "red":"http://p1.music.126.net/Zn_RnFZDNgJOqINTWw9CJQ==/109951163546254140.jpg",
                        "orange":"http://p1.music.126.net/CUBMTkTX4s5z6zgTFYU5Kw==/109951163545903122.jpg",
                        "yellow":"http://p1.music.126.net/VHaUSB1qLqrgi0BkDvr3DQ==/109951163545891926.jpg",
                        "green":"http://p1.music.126.net/07TWdvFVmSvEgMUUNo2fMA==/109951163545907304.jpg",
                        "blue":"http://p1.music.126.net/TRCUd9oi1AtO8YTo4uvBaQ==/109951163545897207.jpg",
                        "pink":"http://p1.music.126.net/4XzBCmNHydK_BbigSX8vDA==/109951163545906884.jpg",
                        "black":"http://p1.music.126.net/_QKAR6fwGNpHYSu8HXmE6g==/109951163545901487.jpg",
                        "white":"http://p1.music.126.net/7nofGpRX-nMOnsKCkfaR2w==/109951163544342932.jpg"                        
                    },
                    Array1:[
                        {
                            background:require('../assets/z1.png'),
                            title:'英语课上那些英文歌曲青春印象'
                        },
                        {
                            background:require('../assets/z2.png'),
                            title:'我的心上人，他有意中人'
                        },
                        {
                            background:require('../assets/z3.png'),
                            title:'关关雎鸠，在河之洲，窈窕淑女，君子好逑'
                        },
                        {
                            background:require('../assets/z4.png'),
                            title:'蒹葭苍苍，白露为霜，所谓伊人，在水一方'
                        },
                        {
                            background:require('../assets/z5.png'),
                            title:'转朱阁，低绮户，不应有恨'
                        },
                        {
                            background:require('../assets/z6.png'),
                            title:'双兔傍地走，安能辨我是雄雌'
                        },
                        {
                            background:require('../assets/z7.png'),
                            title:'曾经沧海难为水，除去巫山不是云'
                        },
                        {
                            background:require('../assets/z8.png'),
                            title:'实在编不出来了，哈哈'
                        },                      
                    ]                  
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
                change2(){
                        this.name1="right1"
                        this.mark1-=5
                },
                change3(){
                        this.name1="left1"
                        this.mark1+=5
                },
                show1(){
                    item.b=true
                     return this.show=item.b
                },
                show2(){
                    let b=false
                    return this.show=item.b
                }
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
            left:912px;    
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
            border-radius: 1px;background: #eee;
            opacity:0.1;

        }.reall .reshow .retop .rez:hover{
            background:none;
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
        /* 111111111 */
        .left1-enter-active {
            transform: translateX(0);
            transition: all 1.5s ease;
        }
        .left1-leave-active {
            transform: translateX(-500%);
            transition: all 0s ease;
        }
        .left1-enter {
            transform: translateX(500%);
        }
        .left1-leave {
            transform: translateX(0);
        }
        .right1-enter-active {
            transform: translateX(0);
            transition: all 1s ease;
        }
        .right1-leave-active {
            transform: translateX(500%);
            transition: all 0s ease;
        }
        .right1-enter {
            transform: translateX(-500%);
        }
        .right1-leave {
            transform: translateX(0);
        }
        .reall .releft{
            width: 724px;
            height:1512px;
            margin-left:188px;
            background: #fff;
            float: left;
        }
        .reall .reright{
            width:251px;
            height:1511px;
            float:left;
            background: white;
            border:1px solid #ddd;
            border-top: none;
        }
        .reall .releft .hot{
           width:724px;
           height:630px;
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
        }.reall .releft .hot .s .s4 a{
            text-decoration: none;
        }.reall .releft .hot .s .s4 a:hover{
            text-decoration: underline;
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
        /* }1111 */
        .reall .releft .renew{
           width:724px;
           height:290px;
           overflow: hidden;
   
        }
        .reall .releft .renew .s{
            width:684px;
            height:55px;
            margin-left:20px;
            border-bottom: 2px solid red;

        }
        .reall .releft .renew .s .s1{
            width:30px ;
            height:40px;
            background: url(../assets/biaoji.png) no-repeat;
            float: left;
            margin-left:5px;
            margin-top:26px;
        }
        .reall .releft .renew .s .s2{
            width:95px;
            height:40px; 
            font-size:20px;
            line-height: 40px;
            margin-top:15px;
            float: left;
            color:rgb(71, 71, 71);
        }
        .reall .releft .renew .s .s4{
            width:60px;
            height:40px; 
            font-size:13px;
            line-height: 40px;
            margin-top:16px;
            float: right;
            color:rgb(131, 130, 130);
        }
        .reall .releft .renew .s .s4 a{
            text-decoration: none;
        }.reall .releft .renew .s .s4 a:hover{
            text-decoration: underline;
        }
        .reall .releft .renew .s .s41{    
            margin-top:1px;
        }
        .reall .releft .renew .s .s42{    
            width: 30px;
            height:40px;
            float:right;
            margin-top:12px;
            background: url(../assets/jiantou.png) no-repeat;
        }
        /* 11111 */
        .reall .releft .hot .z{
            width:724px;
            height:465px;
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
        }
       
        .reall .releft .hot .z a{
            display: block;
            width:141px;
            height: 40px;
            font-size: 14px;
            line-height: 20px;
            margin-top: 5px;
            text-decoration: none;
        }
        .reall .releft .hot .z a:hover{
            text-decoration: underline;
        }
        .reall .releft .hot .x{
            width:684px;
            height:77px;
            margin-left:20px;
            background: url(../assets/guanggao.png);
        }

        .reall .releft .renew .x{
            width:684px;
            height:200px;
            margin-left:20px;
            margin-top:20px;
            position: relative;

        }
        .reall .releft .renew .x .x1 {
            width:685px;
            height:202px;
            border:1px solid #ddd;
            margin-top:25px;
            margin-left: 0px;
            overflow: hidden;
            background: #f5f5f5;
            border-radius: 2px;

        }.reall .releft .renew .x .x1 .x11 {
            width:645px;
            height:190px; 
            margin-left: 20px;
            overflow: hidden;
            background: #f5f5f5;
        }
        .reall .releft .renew .x .x1 .x11 .x111{
            width:118px;
            height:118px; 
            float: left;
            background: #ee4343;
            margin: 0px;
        }
        .reall .releft .renew .x .x1 .x11 .x112 {
            width:118px;
            height:60px; 
            float: left;
            margin:0px;
            font-size:10px;
            line-height: 20px;
            background: #f5f5f5;
        }
        .reall .releft .renew .x .x1 li{
            display: block;
            width: 118px;
            height: 180px;
            float: left;
            margin:30px 4px 0px 5px;
            position: relative;
           
        }
        .reall .releft .renew .x .x1 div {
            width: 118px;
            height: 150px;
            background:#f7c4c4;
            float: left;   
            margin:0px 5px 70px 5px;
        }
        .reall .releft .renew .x .left{
            position: absolute;
            width: 30px;
            height: 30px;
            top:80px;
            left:3px;
            background: url(../assets/left.png) no-repeat;

        }
        .reall .releft .renew .x .right{
            position: absolute;
            width: 30px;
            height: 30px;
            top:80px;
            left:670px;
            background: url(../assets/right.png)no-repeat;
        }
        .reall .releft .bangdan {
            width:724px;
           height:800px;
        }
        .reall .releft .bangdan .s{
            width:684px;
            height:55px;
            margin-left:20px;
            border-bottom: 2px solid red;

        }
        .reall .releft .bangdan .s .s1{
            width:30px ;
            height:40px;
            background: url(../assets/biaoji.png) no-repeat;
            float: left;
            margin-left:5px;
            margin-top:26px;
        }
        .reall .releft .bangdan .s .s2{
            width:95px;
            height:40px; 
            font-size:20px;
            line-height: 40px;
            margin-top:15px;
            float: left;
            color:rgb(71, 71, 71);
        }
        .reall .releft .bangdan .s .s4{
            width:60px;
            height:40px; 
            font-size:13px;
            line-height: 40px;
            margin-top:16px;
            float: right;
            color:rgb(131, 130, 130);
        }
        .reall .releft .bangdan .s .s4 a{
            text-decoration: none;
        }.reall .releft .bangdan .s .s4 a:hover{
            text-decoration: underline;
        }
        .reall .releft .bangdan .s .s41{    
            margin-top:1px;
        }
        .reall .releft .bangdan .s .s42{    
            width: 30px;
            height:40px;
            float:right;
            margin-top:12px;
            background: url(../assets/jiantou.png) no-repeat;
        }
        .reall .releft .bangdan .x{
            width:683px;
            height:481px;
            border:1px solid #ddd;
            margin-top:20px;
            margin-left:20px;
            overflow: hidden;
            background: #f5f5f5;
            border-radius: 2px;

        }
        .reall .releft .bangdan .x .x1 {
            height:482px;
            width:227px;
            float: left;
            border-right:1px solid #ddd;
        }
        .reall .releft .bangdan .x .x1 .d{
            height:31px;
            width:227px;
            float: left;
            background: #e8e8e8;
            border-radius: 2px;
            font-size:12px;
        }
        .reall .releft .bangdan .x .x1 .d .d1{
            display: block;
            width: 120px;
            height:20px;
            margin-top:7px;
            margin-left:145px;
            text-decoration: none;
            color:#000;
        }
        .reall .releft .bangdan .x .x1 .d .d1:hover{
            text-decoration: underline;
        }
        .reall .releft .bangdan .x .x2 {

            display: block;
            height:482px;
            width:227px;
            float: left;
            border-right:1px solid #ddd;
        }
        .reall .releft .bangdan .x .x1 span .xb:hover{
            text-decoration: underline;
        }
      
        .reall .releft .bangdan .x .x3 {
         
            display: block;
            height:482px;
            width:227px;
            float: left;
        }
        .reall .releft .bangdan .x .x1 .x11 {
            width: 227px;
            height:130px;
            background: #f4f4f4;
        }
        .reall .releft .bangdan .x .x1 .x11 .x11left{
            width: 102px;
            height:101px;
            background: url(../assets/b1.png);
            margin-left:9px;
            margin-top:20px;
            float: left;
        }.reall .releft .bangdan .x .x1 .x11 .x11right{
            width: 100px;
            height:80px;
            background: #f4f4f4;
            float: left;
            margin-top:25px;
            position: relative;           
   

        }
        .reall .releft .bangdan .x .x1 .x11 .x11right a{
            text-decoration: none;
            margin-left:1px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.801);
            font-weight: bold;
        }
        .reall .releft .bangdan .x .x1 .x11 .x11right .a{
           height: 23px;
           width: 23px;
           background: url(../assets/bofang.png);
           position: absolute;
           left:0px;
           top:25px;
        }
        .reall .releft .bangdan .x .x1 .x11 .x11right .a:hover{
            background: url(../assets/bofang1.png);
}
        .reall .releft .bangdan .x .x1 .x11 .x11right .b{
            height: 23px;
           width: 23px;
           background: url(../assets/shoucang.png);
           position: absolute;
           left:30px;
           top:26px;
        }
        .reall .releft .bangdan .x .x1 .x11 .x11right .b:hover{
            background: url(../assets/shoucang1.png);
}
        .reall .releft .bangdan .x .x1 .x11 .x11right a:hover{
            text-decoration: underline;
        }
        .reall .releft .bangdan .x .x1 span {
            display: block;
            width: 227px;
            height:32px;
            background: #f4f4f4;
            position: relative;
        }.reall .releft .bangdan .x .x1 .hui{
            display: block;
            width: 227px;
            height:32px;
            background: #e8e8e8;
            position: relative;
        }
        .reall .releft .bangdan .x .x1 span .xa{
                width: 35px;
                height:32px;
                float: left;
                text-align: center;
                margin-left: 10px;
                line-height: 32px;
                font-size: 13px;

        }
        .reall .releft .bangdan .x .x1 span .xaa{
                width: 35px;
                height:32px;
                float: left;
                text-align: center;
                margin-left: 10px;
                line-height: 32px;
                font-size: 13px;
                color:red;
        }
        .reall .releft .bangdan .x .x1 span .xb{
                width: 150px;
                height:32px;
                float: left;
                line-height: 32px;
                font-size: 12px;
                text-decoration: none;
                color:#000;

        }
        .reall .releft .bangdan .x .x1 span .xc{
                width: 105px;
                height:32px;
                position: absolute;
                right:0px;

        }
        .reall .releft .bangdan .x .x1 span .xc .x1{
                height: 19px;
                width: 19px;
                background:url(../assets/qbofang.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:28px;
                border:none;
        }
        .reall .releft .bangdan .x .x1 span .xc .x1:hover{
            background:url(../assets/qbofang1.png) no-repeat;
        }.reall .releft .bangdan .x .x1 span .xc .x2:hover{
            background:url(../assets/qjiahao1.png) no-repeat;
        }.reall .releft .bangdan .x .x1 span .xc .x3:hover{
            background:url(../assets/qshoucang1.png) no-repeat;
        }.reall .releft .bangdan .x .x1 .hui .xc .x1:hover{
            background:url(../assets/xbofang1.png) no-repeat;
        }.reall .releft .bangdan .x .x1 .hui .xc .x2:hover{
            background:url(../assets/xjiahao1.png) no-repeat;
        }.reall .releft .bangdan .x .x1 .hui .xc .x3:hover{
            background:url(../assets/xshoucang1.png) no-repeat;
        }
        .reall .releft .bangdan .x .x1 span .xc .x2{
                height: 19px;
                width: 19px;
                background:url(../assets/qjiahao.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:5px;
                border:none;

        }
        .reall .releft .bangdan .x .x1 span .xc .x3{
                height: 19px;
                width: 19px;
                background:url(../assets/qshoucang.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:5px;
                border:none;
                

        }
        .reall .releft .bangdan .x .x1 .hui .xc .x1{
                height: 19px;
                width: 19px;
                background:url(../assets/xbofang.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:28px;
        }
        .reall .releft .bangdan .x .x1 .hui .xc .x2{
                height: 19px;
                width: 19px;
                background:url(../assets/xjiahao.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:5px;
        }
        .reall .releft .bangdan .x .x1 .hui .xc .x3{
                height: 19px;
                width: 19px;
                background:url(../assets/xshoucang.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:5px;
        }
        /* 11111 */
        .reall .releft .bangdan .x .x2 .d{
            height:31px;
            width:227px;
            float: left;
            background: #e8e8e8;
            border-radius: 2px;
            font-size:12px;
        }
        .reall .releft .bangdan .x .x2 .d .d1{
            display: block;
            width: 120px;
            height:20px;
            margin-top:7px;
            margin-left:145px;
            text-decoration: none;
            color:#000;
        }
        .reall .releft .bangdan .x .x2 .d .d1:hover{
            text-decoration: underline;
        }
     
        .reall .releft .bangdan .x .x2 span .xb:hover{
            text-decoration: underline;
        }

        .reall .releft .bangdan .x .x2 .x11 {
            width: 227px;
            height:130px;
            background: #f4f4f4;
        }
        .reall .releft .bangdan .x .x2 .x11 .x11left{
            width: 102px;
            height:101px;
            background: url(../assets/b2.png);
            margin-left:9px;
            margin-top:20px;
            float: left;
        }.reall .releft .bangdan .x .x2 .x11 .x11right{
            width: 100px;
            height:80px;
            background: #f4f4f4;
            float: left;
            margin-top:25px;
            position: relative;           
   

        }
        .reall .releft .bangdan .x .x2 .x11 .x11right a{
            text-decoration: none;
            margin-left:1px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.801);
            font-weight: bold;
        }
        .reall .releft .bangdan .x .x2 .x11 .x11right .a{
           height: 23px;
           width: 23px;
           background: url(../assets/bofang.png);
           position: absolute;
           left:0px;
           top:25px;
        }
        .reall .releft .bangdan .x .x2 .x11 .x11right .a:hover{
            background: url(../assets/bofang1.png);
}
        .reall .releft .bangdan .x .x2 .x11 .x11right .b{
            height: 23px;
           width: 23px;
           background: url(../assets/shoucang.png);
           position: absolute;
           left:30px;
           top:26px;
        }
        .reall .releft .bangdan .x .x2 .x11 .x11right .b:hover{
            background: url(../assets/shoucang1.png);
}
        .reall .releft .bangdan .x .x2 .x11 .x11right a:hover{
            text-decoration: underline;
        }
        .reall .releft .bangdan .x .x2 span {
            display: block;
            width: 227px;
            height:32px;
            background: #f4f4f4;
            position: relative;
        }.reall .releft .bangdan .x .x2 .hui{
            display: block;
            width: 227px;
            height:32px;
            background: #e8e8e8;
            position: relative;
        }
        .reall .releft .bangdan .x .x2 span .xa{
                width: 35px;
                height:32px;
                float: left;
                text-align: center;
                margin-left: 10px;
                line-height: 32px;
                font-size: 13px;

        }
        .reall .releft .bangdan .x .x2 span .xaa{
                width: 35px;
                height:32px;
                float: left;
                text-align: center;
                margin-left: 10px;
                line-height: 32px;
                font-size: 13px;
                color:red;
        }
        .reall .releft .bangdan .x .x2 span .xb{
                width: 150px;
                height:32px;
                float: left;
                line-height: 32px;
                font-size: 12px;
                text-decoration: none;
                color:#000;

        }
        .reall .releft .bangdan .x .x2 span .xc{
                width: 105px;
                height:32px;
                position: absolute;
                right:0px;

        }
        .reall .releft .bangdan .x .x2 span .xc .x1{
                height: 19px;
                width: 19px;
                background:url(../assets/qbofang.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:28px;
                border:none;
        }
        .reall .releft .bangdan .x .x2 span .xc .x1:hover{
            background:url(../assets/qbofang1.png) no-repeat;
        }.reall .releft .bangdan .x .x2 span .xc .x2:hover{
            background:url(../assets/qjiahao1.png) no-repeat;
        }.reall .releft .bangdan .x .x2 span .xc .x3:hover{
            background:url(../assets/qshoucang1.png) no-repeat;
        }.reall .releft .bangdan .x .x2 .hui .xc .x1:hover{
            background:url(../assets/xbofang1.png) no-repeat;
        }.reall .releft .bangdan .x .x2 .hui .xc .x2:hover{
            background:url(../assets/xjiahao1.png) no-repeat;
        }.reall .releft .bangdan .x .x2 .hui .xc .x3:hover{
            background:url(../assets/xshoucang1.png) no-repeat;
        }
        .reall .releft .bangdan .x .x2 span .xc .x2{
                height: 19px;
                width: 19px;
                background:url(../assets/qjiahao.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:5px;
                border:none;

        }
        .reall .releft .bangdan .x .x2 span .xc .x3{
                height: 19px;
                width: 19px;
                background:url(../assets/qshoucang.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:5px;
                border:none;
                

        }
        .reall .releft .bangdan .x .x2 .hui .xc .x1{
                height: 19px;
                width: 19px;
                background:url(../assets/xbofang.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:28px;
        }
        .reall .releft .bangdan .x .x2 .hui .xc .x2{
                height: 19px;
                width: 19px;
                background:url(../assets/xjiahao.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:5px;
        }
        .reall .releft .bangdan .x .x2 .hui .xc .x3{
                height: 19px;
                width: 19px;
                background:url(../assets/xshoucang.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:5px;
        }
        /* 11111 */
        .reall .releft .bangdan .x .x3 .d{
            height:31px;
            width:227px;
            float: left;
            background: #e8e8e8;
            border-radius: 2px;
            font-size:12px;
        }
        .reall .releft .bangdan .x .x3 .d .d1{
            display: block;
            width: 120px;
            height:20px;
            margin-top:7px;
            margin-left:145px;
            text-decoration: none;
            color:#000;
        }
        .reall .releft .bangdan .x .x3 .d .d1:hover{
            text-decoration: underline;
        }
       
        .reall .releft .bangdan .x .x3 span .xb:hover{
            text-decoration: underline;
        }
      

        .reall .releft .bangdan .x .x3 .x11 {
            width: 227px;
            height:130px;
            background: #f4f4f4;
        }
        .reall .releft .bangdan .x .x3 .x11 .x11left{
            width: 102px;
            height:101px;
            background: url(../assets/b3.png);
            margin-left:9px;
            margin-top:20px;
            float: left;
        }.reall .releft .bangdan .x .x3 .x11 .x11right{
            width: 100px;
            height:80px;
            background: #f4f4f4;
            float: left;
            margin-top:25px;
            position: relative;           
   

        }
        .reall .releft .bangdan .x .x3 .x11 .x11right a{
            text-decoration: none;
            margin-left:1px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.801);
            font-weight: bold;
        }
        .reall .releft .bangdan .x .x3 .x11 .x11right .a{
           height: 23px;
           width: 23px;
           background: url(../assets/bofang.png);
           position: absolute;
           left:0px;
           top:25px;
        }
        .reall .releft .bangdan .x .x3 .x11 .x11right .a:hover{
            background: url(../assets/bofang1.png);
}
        .reall .releft .bangdan .x .x3 .x11 .x11right .b{
            height: 23px;
           width: 23px;
           background: url(../assets/shoucang.png);
           position: absolute;
           left:30px;
           top:26px;
        }
        .reall .releft .bangdan .x .x3 .x11 .x11right .b:hover{
            background: url(../assets/shoucang1.png);
}
        .reall .releft .bangdan .x .x3 .x11 .x11right a:hover{
            text-decoration: underline;
        }
        .reall .releft .bangdan .x .x3 span {
            display: block;
            width: 227px;
            height:32px;
            background: #f4f4f4;
            position: relative;
        }.reall .releft .bangdan .x .x3 .hui{
            display: block;
            width: 227px;
            height:32px;
            background: #e8e8e8;
            position: relative;
        }
        .reall .releft .bangdan .x .x3 span .xa{
                width: 35px;
                height:32px;
                float: left;
                text-align: center;
                margin-left: 10px;
                line-height: 32px;
                font-size: 13px;

        }
        .reall .releft .bangdan .x .x3 span .xaa{
                width: 35px;
                height:32px;
                float: left;
                text-align: center;
                margin-left: 10px;
                line-height: 32px;
                font-size: 13px;
                color:red;
        }
        .reall .releft .bangdan .x .x3 span .xb{
                width: 150px;
                height:32px;
                float: left;
                line-height: 32px;
                font-size: 12px;
                text-decoration: none;
                color:#000;

        }
        .reall .releft .bangdan .x .x3 span .xc{
                width: 105px;
                height:32px;
                position: absolute;
                right:0px;

        }
        .reall .releft .bangdan .x .x3 span .xc .x1{
                height: 19px;
                width: 19px;
                background:url(../assets/qbofang.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:28px;
                border:none;
        }
        .reall .releft .bangdan .x .x3 span .xc .x1:hover{
            background:url(../assets/qbofang1.png) no-repeat;
        }.reall .releft .bangdan .x .x3 span .xc .x2:hover{
            background:url(../assets/qjiahao1.png) no-repeat;
        }.reall .releft .bangdan .x .x3 span .xc .x3:hover{
            background:url(../assets/qshoucang1.png) no-repeat;
        }.reall .releft .bangdan .x .x3 .hui .xc .x1:hover{
            background:url(../assets/xbofang1.png) no-repeat;
        }.reall .releft .bangdan .x .x3 .hui .xc .x2:hover{
            background:url(../assets/xjiahao1.png) no-repeat;
        }.reall .releft .bangdan .x .x3 .hui .xc .x3:hover{
            background:url(../assets/xshoucang1.png) no-repeat;
        }
        .reall .releft .bangdan .x .x3 span .xc .x2{
                height: 19px;
                width: 19px;
                background:url(../assets/qjiahao.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:5px;
                border:none;

        }
        .reall .releft .bangdan .x .x3 span .xc .x3{
                height: 19px;
                width: 19px;
                background:url(../assets/qshoucang.png) no-repeat;
                margin-top:6px;
                float: left;
                margin-left:5px;
                border:none;
                

        }
        .reall .releft .bangdan .x .x3 .hui .xc .x1{
                height: 19px;
                width: 19px;
                background:url(../assets/xbofang.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:28px;
        }
        .reall .releft .bangdan .x .x3 .hui .xc .x2{
                height: 19px;
                width: 19px;
                background:url(../assets/xjiahao.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:5px;
        }
        .reall .releft .bangdan .x .x3 .hui .xc .x3{
                height: 19px;
                width: 19px;
                background:url(../assets/xshoucang.png) no-repeat;
                margin-top:6px;
                float: left;
                border:none;
                margin-left:5px;
        }
        .reall .reright .rs {
            height: 128px;
            width: 249px;
            background:-webkit-linear-gradient(top,#fdfdfd ,#e2e2e2);
            border:1px solid white;
            }

        .reall .reright .rs .rs1 {
            height: 40px;
            width: 208px;
            margin-left:25px;
            margin-top:20px;
            margin-bottom:15px;
            color:#888888;
            line-height: 20px;
            font-size: 12px;
            float: left;
        }
        .reall .reright .rs .rs2 {
            display: block;
            height: 32px;
            width:101px;
            background: #d31117;
            margin-left:70px;
            border-radius:5px;
            text-align: center;
            line-height: 32px;
            color:#ddd;
            text-decoration: none;
            font-size: 13px;
            float: left;
        }
        .reall .reright .rs .rs2:hover{
            opacity: 0.9;
        }
    </style>
    