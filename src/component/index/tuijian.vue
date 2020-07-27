<template>
    <div>
        <div class="banner">
        <h2 class="title">推荐歌单
            <p class="tit"></p>
        </h2>
    </div>
    <div class="menu">
        <div class="menu1">
            <ul>
                <router-link to="/hotmusic"><li><img src="../../assets/images/001.jpg"><p>[一周日语上新]山下智久全新单曲 温暖你的寒夜</p></li>
                <li><img src="../../assets/images/002.jpg"><p>夏日音乐物语：汽水和沙滩可兼得</p></li></router-link>
                <li><img src="../../assets/images/003.jpg"><p>DJ顶级騷曲享受❤【环绕】中文</p></li>
            </ul>
        </div>
        <div class="menu2">
            <ul>
                <li><img src="../../assets/images/004.jpg"><p>翻唱级 | 华语宝藏Cover精选</p></li>
                <li><img src="../../assets/images/005.jpg"><p>惊艳的cover翻唱 | 好听的歌没有完整版</p></li>
                <li><img src="../../assets/images/006.jpg"><p>我还要生活，所以我不可以不快乐</p></li>
            </ul>
        </div>
    </div>
     <div class="banner1">
        <h2 class="title1">最新音乐
            <p class="tit1"></p>
        </h2>
    </div>
    <div class="footer">
        <router-link to="/music"><li>
            <p class="p1">我想我不一样</p>
            <p class="p2"><span class="iconfont icon-sq"></span>张紫宁-我想我不一样</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li></router-link>

        <router-link to="/yessir"><li>
            <p class="p1">Yessir</p>
            <p class="p2"><span class="iconfont icon-sq"></span>王子异-Yessir</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li></router-link>
        <li>
            <p class="p1">昨日青空（毕业特别版）（小红书毕业歌）</p>
            <p class="p2"><span class="iconfont icon-sq"></span>尤长靖-昨日青空（毕业特别版）</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
        <li>
            <p class="p1">내가 네게 하나 바라는 건</p>
            <p class="p2"><span class="iconfont icon-sq"></span>李锡勋-내가 네게 하나 바라는 건</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
        <li>
            <p class="p1">Everything's Alright</p>
            <p class="p2"><span class="iconfont icon-sq"></span>塞壬唱片-MSR / DJ Okawari / 澤田かおり-Everything's Alright</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
        <li>
            <p class="p1">あーりんちゅあ</p>
            <p class="p2"><span class="iconfont icon-sq"></span>佐々木彩夏-A-rin Assort</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
        <li>
            <p class="p1">褪色</p>
            <p class="p2"><span class="iconfont icon-sq"></span>小星星Aurora-褪色</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
        <li>
            <p class="p1">想说</p>
            <p class="p2"><span class="iconfont icon-sq"></span>颜人中-想法</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
        <li>
            <p class="p1">角落里的冬天</p>
            <p class="p2"><span class="iconfont icon-sq"></span>杨子为-角落里的冬天</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
        <li>
            <p class="p1">还没说出口的再见</p>
            <p class="p2"><span class="iconfont icon-sq"></span>左立-还没说出口的再见</p>
            <div class="right"><span class="iconfont icon-bofang1"></span></div>
        </li>
    </div>
    <router-view></router-view>
</div>
</template>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
    list-style: none;
}
.banner,.banner1{
        width: 100%;
        height: 50px;
        background: #fcfcfd;
        border: 1px solid #e3e3e4; 
        box-sizing: border-box;
    }
    .banner{
        margin-top: 124px;
    }
    .banner .title,.banner1 .title1{
        font-size: 17px;
        line-height: 50px;
        margin-left: 5px;
    }
    .banner .title .tit,.banner1 .title1 .tit1{
    position: absolute;
    float: left;
    left: 0px;
    margin-top: -31px;
    width: 2px;
    height: 16px;
    background-color: #d33a31;
    }
    .menu{
        width: 100%;
        background: #fcfcfd;
        
    }
    /* .menu ul{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    } */
    .menu1,.menu2{
        width: 100%;
        background: transparent;
        overflow: hidden;
    }
    /* .menu2{
        margin-bottom: 30px;
    } */

    .menu1 ul li,.menu2 ul li{
        width: 32.65%;
        background: #fcfcfd;
        float: left;
        position: relative;
        margin-bottom: 12px;
        color: rgb(29, 28, 28);
    }
    .menu1 ul li:nth-of-type(2n){
        margin-left: 1%;
        margin-right: 1%;
    }
    .menu2 ul li:nth-of-type(2n){
        margin-left: 1%;
        margin-right: 1%;
    }
    .menu1 ul li img,.menu2 ul li img{
        width: 100%;
        /* height: 85%; */
    }
    .menu1 ul li p,.menu2 ul li p{
        font-size: 14px;
        height: 36px;
        padding-left: 3px;
        text-overflow: ellipsis;
        overflow: hidden;
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;  
    }
    .footer li{
        width: 100%;
        height: 43px;
        background: #fcfcfd;
        padding: 6px;
        float: left;
    }
    .footer .right{
        width: 12%;
        height: 40px;
        float: right;
        background: transparent;
        margin-top: -37px;
        text-align: center;
    }
    .footer .p1{
       width: 85%;
       font-size: 17px;
       color: rgb(78, 76, 76);
       text-overflow: ellipsis;
        overflow: hidden;
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;  
       
    }
    .footer .p2{
        width: 85%;
        font-size: 12px;
        color: rgb(121, 118, 119);
        text-overflow: ellipsis;
        overflow: hidden;
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; 
    }
    .footer .p2 .iconfont{
        padding-top: 5px;
        color: #fe733e;
        margin-right: 5px;
    }
    .footer .right .iconfont{
        
        line-height: 40px;
        font-size: 20px;
        color: #aaaaaa;
    }

</style>