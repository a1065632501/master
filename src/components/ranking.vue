<template>
    <div class="rank">
        <div class="left">
            <div class="top">
                <div class="t1">云音乐特色榜</div>
                <div class="t2">
                    <a href="#" class="z1" v-for="item in zArray" v-on:click="change(item.index)">
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
                <div class="l">
                    <img :src="link">
                </div>
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
            <div class="bottom">
                <div class="s">
                    <div class="s1">歌曲列表</div>
                    <div class="s2">100首</div>
                    <div class="s3"><div class="s32">播放 ：</div>
                        <div class="s31">{{mount}}</div>
                        次</div>
                </div>
                <div class="x">
                    <div class="x1">
                        <div class="x11"></div>
                        <div class="x12">标题</div>
                        <div class="x13">时长</div>
                        <div class="x14">歌手</div>
                    </div>
                    <div class="x2">
                        <div class="x21" :class="{hui:item.number%2!==0}"v-for="item in aArray" v-on:mouseenter="item.a=true" v-on:mouseleave="item.a=false">
                            <div class="x211">{{item.number}}</div>
                            <div class="x212">
                                <img :src='item.background'>
                            </div>
                            <div class="x213">
                                <img :src='item.background1'>
                            </div>
                            <div class="x214">
                            
                            </div>
                            <div class="x215">{{item.title}}</div>
                            <div class="x216">
                            </div>
                            <div class="x218">{{item.singer}}</div>
                            <div class="x217">
                                <div v-show='!item.a' class='time'>{{item.time}}</div>
                                <div v-show='item.a' class="time1">
                                    <a href='#' class="img1"></a>
                                    <a href='#' class="img2"></a>
                                    <a href='#' class="img3"></a>
                                    <a href='#' class="img4"></a>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                    <div class="x3">
                        <div class="x31" :class="{hui1:item.number%2===0}"v-for="item in bArray" v-on:mouseenter="item.b=true" v-on:mouseleave="item.b=false">
                            <div class="x311">{{item.number}}</div>
                            <div class="x312">
                                    <img :src='item.background'>
                            </div>
                           
                            <div class="x314">
                            </div>
                            <div class="x315">{{item.title}}</div>
                            <div class="x316">
                            </div>
                            <div class="x318">{{item.singer}}</div>
                            <div class="x317">
                                <div v-show='!item.b' class='x131'>{{item.time}}</div>
                                <div v-show='item.b' class="time1">
                                        <a href='#' class="img1"></a>
                                        <a href='#' class="img2"></a>
                                        <a href='#' class="img3"></a>
                                        <a href='#' class="img4"></a>
                                    </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
    <script>
        export default {   
        
            data () {
                return{
                    link:require('../assets/qq1.png'),
                    mount:1313014734,
                    discuss:136265,
                    relay:4133,
                    save:1230005,
                    title:'云音乐飙升榜',
                    time:'09月19日',
                    bArray:[
                        {   number:1,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:2,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:3,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:4,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:5,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:6,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:7,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:8,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:9,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:10,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:11,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:12,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:13,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:14,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:15,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:16,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:17,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:18,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:19,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:20,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:21,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:22,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:23,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:24,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:25,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:26,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:27,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:28,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:29,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:30,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:31,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:32,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:33,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:34,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:35,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:36,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:37,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:38,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:39,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {   number:40,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            b:false
                        },
                        {  number:41,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            b:false
                        },
                        {  number:42,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        {  number:43,
                            background:require('../assets/n11.png'),
                            background1:require('../assets/n2.png'),
                            background3:require('../assets/n4.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            b:false
                        },
                        
                    
                    ],
                    aArray:[
                        {   number:1,
                            background:require('../assets/n1.png'),
                            background1:require('../assets/n2.png'),
                            title:'Killshot',
                            singer:'Eminem',
                            time:'03:14',
                            a:false
                        },
                        {  number:2,
                            background:require('../assets/n1.png'),
                            background1:require('../assets/n21.png'),
                            title:'Venice',
                            singer:'LaNa Del Rey',
                            time:'09:36',
                            a:false
                        },
                        {  number:3,
                            background:require('../assets/n1.png'),
                            background1:require('../assets/n22.png'),
                            title:'某某',
                            singer:'孟凡明',
                            time:'04:01',
                            a:false
                        }],
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
            },
            methods:{
                change(n){
                  
                    switch(n)
                    {
                        case 0:
                         this.mount=1313014734;
                         this.discuss=136265;
                         this.relay=4133;
                         this.save=1230005;
                         this.title='云音乐飙升榜';
                         this.time='09月19日';
                         this.link=require('../assets/qq1.png');
                         break;
                         case 1:
                         this.mount=838945408;
                         this.discuss=103725;
                         this.relay=5446;
                         this.save=1015835;
                         this.title='云音乐新歌榜';
                         this.time='刚刚';
                         this.link=require('../assets/qq2.png');
                         break;
                         case 2:
                         this.mount=991253766;
                         this.discuss=106563;
                         this.relay=5612;
                         this.save=141382;
                         this.title='网易原创歌曲榜';
                         this.time='09月19日';
                         this.link=require('../assets/qq3.png');
                         break;
                         case 3:
                         this.mount=871212005;
                         this.discuss=561276;
                         this.relay=5418;
                         this.save=2761862;
                         this.title='云音乐热歌榜';
                         this.time='刚刚';
                         this.link=require('../assets/qq4.png');
                         break;
                    }
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
        }
        .rank .right .top .l{
            width: 160px;
            height: 160px;
            float: left;
        }
        .rank .right .top .l img{
            width: 160px;
            height: 160px;
        }
        .rank .right .top .r{
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
        .rank .right .bottom .s{
            width: 662px;
            height: 35px;
            border-bottom: 2px solid #c20c0c;
        }
        .rank .right .bottom .s .s1{
            width: 85px;
            height: 35px;
            float: left;
            line-height: 35px;
            font-size: 20px;
        }
        .rank .right .bottom .s .s2{
            width: 100px;
            height: 35px;
            float: left;
            margin-left: 15px;
            font-size: 12px;
            line-height: 40px;

        }
        .rank .right .bottom .s .s3{
            width: 130px;
            height: 35px;
            float: left;
            margin-left:330px;
            font-size: 12px;
            line-height: 35px;

        }
        .rank .right .bottom .s .s3 .s31{
           color:rgb(214, 1, 1);
           font-weight: bold;
           float: left;
        }
        .rank .right .bottom .s .s3 .s32{
    
           float: left;
        }
        .rank .right .bottom .x{
            width: 660px;
            height:1535px;
            border: 1px solid #ddd;
            border-top: none;
        }
        .rank .right .bottom .x .x1{
            width:660px;
            height: 35px;
            background: -webkit-linear-gradient( top,#fff,#f1f1f1);
        }
        .rank .right .bottom .x .x1 .x11{
            width:78px;
            height: 35px;
            float: left;

            border-right: 1px solid #ddd;
        }
        .rank .right .bottom .x .x1 .x12{
            width:390px;
            height: 35px;
            float: left;
            margin-left: 10px;
            line-height: 35px;
            border-right: 1px solid #ddd;
            font-size: 13px;
            color: rgb(129, 129, 129);
        }
        .rank .right .bottom .x .x1 .x13{
            width:76px;
            height: 35px;
            border-right: 1px solid #ddd;
            float: left;
            line-height: 35px;
            font-size: 13px;
            margin-left: 10px;
            color: rgb(129, 129, 129);

        }
        .rank .right .bottom .x .x1 .x14{
            width:60px;
            height: 35px;

            float: left;
            line-height: 35px;
            font-size: 13px;
            color: rgb(129, 129, 129);
            margin-left: 10px;
        }
        .rank .right .bottom .x .x2{
            border-top: 1px solid #ddd;
            width: 660px;
            height: 210px;
        }
        .rank .right .bottom .x .x2 .hui{
            width: 660px;
            height:70px;
            background: #f7f7f7;

        }
        
        .rank .right .bottom .x .x2 .x21{
            width: 660px;
            height:70px;
             float: left;
        }
        .rank .right .bottom .x .x2 .x21 img{
            width: 50px;  
            height: 50px;
            margin-top: 10px;

        }
        .rank .right .bottom .x .x2 .x21 div{
            line-height: 70px;
            text-align: center;
            height: 70px;
            float: left;
            font-size: 12px;
            background: no-repeat;
        }
        .rank .right .bottom .x .x2 .x21 .x211{
            width: 48px;
        }
        .rank .right .bottom .x .x2 .x21 .x212{
            width: 41px;
        }
        .rank .right .bottom .x .x2 .x21 .x213{
            width: 50px;
        }
        .rank .right .bottom .x .x2 .x21 .x214{
            margin-left:15px;
            width: 28px;
            background: url(../assets/n3.png)no-repeat 0px 25px;
         
        }.rank .right .bottom .x .x2 .x21 .x214:hover{
           background: url(../assets/n31.png)no-repeat 0px 25px;
        }
        .rank .right .bottom .x .x2 .x21 .x215{
            text-align: left;
        }
        .rank .right .bottom .x .x2 .x21 .x216{
            width: 50px;
            
            background: url(../assets/n4.png)no-repeat 2px 28px;
        }
        .rank .right .bottom .x .x2 .x21 .x217{
            width: 90px;
            text-align: left;
            float: right;
        }
        .rank .right .bottom .x .x2 .x21 .x218{
            width:83px;
            text-align:left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            float: right;
        }
        .rank .right .bottom .x .x2 .x21 .x217 .time1{
            height: 20px;
            width: 80px;
            margin-top: 25px;
        }
        .rank .right .bottom .x .x2 .x21 .x217 .time1 a{
            float: left;
            display: block;
            text-decoration: none;
            height:20px;
            width:20px;
        }
        .rank .right .bottom .x .x2 .x21 .x217 .time1 .img1{
            background: url(../assets/img1.png)no-repeat;
        }.rank .right .bottom .x .x2 .x21 .x217 .time1 .img1:hover{
            background: url(../assets/img1s.png)no-repeat;
        }
        .rank .right .bottom .x .x2 .x21 .x217 .time1 .img2{
            background: url(../assets/img2.png)no-repeat;
        }.rank .right .bottom .x .x2 .x21 .x217 .time1 .img2:hover{
            background: url(../assets/img2s.png)no-repeat;
        }
        .rank .right .bottom .x .x2 .x21 .x217 .time1 .img3{
            background: url(../assets/img3.png)no-repeat;
        }.rank .right .bottom .x .x2 .x21 .x217 .time1 .img3:hover{
            background: url(../assets/img3s.png)no-repeat;
        }
        .rank .right .bottom .x .x2 .x21 .x217 .time1 .img4{
            background: url(../assets/img4.png)no-repeat;
        }.rank .right .bottom .x .x2 .x21 .x217 .time1 .img4:hover{
            background: url(../assets/img4s.png)no-repeat;
        }.rank .right .bottom .x .x3 .x31 .x317 .time1{
            height: 20px;
            width: 80px;
            margin-top:5px;
        }
        .rank .right .bottom .x .x3 .x31 .x317 .time1 a{
            float: left;
            display: block;
            text-decoration: none;
            height:20px;
            width:20px;
        }
        .rank .right .bottom .x .x3 .x31 .x317 .time1 .img1{
            background: url(../assets/img1.png)no-repeat;
        }.rank .right .bottom .x .x3 .x31 .x317 .time1 .img1:hover{
            background: url(../assets/img1s.png)no-repeat;
        }
        .rank .right .bottom .x .x3 .x31 .x317 .time1 .img2{
            background: url(../assets/img2.png)no-repeat;
        }.rank .right .bottom .x .x3 .x31 .x317 .time1 .img2:hover{
            background: url(../assets/img2s.png)no-repeat;
        }
        .rank .right .bottom .x .x3 .x31 .x317 .time1 .img3{
            background: url(../assets/img3.png)no-repeat;
        }.rank .right .bottom .x .x3 .x31 .x317 .time1 .img3:hover{
            background: url(../assets/img3s.png)no-repeat;
        }
        .rank .right .bottom .x .x3 .x31 .x317 .time1 .img4{
            background: url(../assets/img4.png)no-repeat;
        }.rank .right .bottom .x .x3 .x31 .x317 .time1 .img4:hover{
            background: url(../assets/img4s.png)no-repeat;
        }
        .rank .right .bottom .x .x3{
            width: 660px;
            height: 1210px;
        }
        .rank .right .bottom .x .x3 .hui1{
            width: 660px;
            height:30px;
            background: #f7f7f7;

        }
        .rank .right .bottom .x .x3 .x31{
            width: 660px;
            height: 30px;
            float: left;
        }
        .rank .right .bottom .x .x3 .x31 img{
            width: 30px;  
            height: 30px;
            margin-top: 2px;
            margin-left:-6px;

        }
        .rank .right .bottom .x .x3 .x31 div{
            line-height: 30px;
            text-align: center;
            height: 30px;
            float: left;
            font-size: 12px;
            background: no-repeat;
        }
        .rank .right .bottom .x .x3 .x31 .x311{
            width: 48px;
        }
        .rank .right .bottom .x .x3 .x31 .x312{
            width:30px;
            
        }
        .rank .right .bottom .x .x3 .x31 .x313{
            width: 50px;
        }
        .rank .right .bottom .x .x3 .x31 .x314{
          
            width: 28px;
            background: url(../assets/n3.png) no-repeat 10px 4px ;
        }
        .rank .right .bottom .x .x3 .x31 .x314:hover{
            width: 28px;
            background: url(../assets/n31.png) no-repeat 10px 4px ;
        }
        .rank .right .bottom .x .x3 .x31 .x315{
            text-align: left;
            margin-left:10px;
          
        }
        .rank .right .bottom .x .x3 .x31 .x316{
            width: 50px;
            background: url(../assets/n4.png)no-repeat 2px 8px;
        }
        .rank .right .bottom .x .x3 .x31 .x317{
            width: 90px;
            text-align: left;
            float: right;
        }
        .rank .right .bottom .x .x3 .x31 .x318{
            width: 83px;
            text-align:left;
            float: right;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

        }
    </style>
    