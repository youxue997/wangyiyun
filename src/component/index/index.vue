<template>
<div>
    <div class="index">
    <div class="header">
       <svg class="icon" aria-hidden="true">
       <use xlink:href="#icon-wangyiyun"></use>
       </svg>
       <p>网易云音乐</p>
    </div>
    <div class="nav">
        <ul>
            <router-link to="/tuijian"><li class="li1">推荐音乐</li></router-link>
            <router-link to="/hot"><li class="li2">热歌榜</li></router-link>
            <router-link to="/search"><li class="li3">搜索</li></router-link>
        </ul>
    </div>
    </div>
    <router-view></router-view>
</div>
</template> 

<style>
*{
    padding: 0px;
    margin: 0px;
    list-style: none;
}
</style>
<style scoped>

    .header{
        background: #d43c33;
        height: 84px;
        width: 100%;
    }
    .header .icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-top: 27px;
  float: left;
} 
.index{
        width: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 99;
}
    .header p{
        width: 90%;
        line-height: 84px;
        float: right;
        font-size: 21px;
        color: white;
    }
    .nav{
        height: 40px;
        width: 100%;
        background: white;
        /* position: fixed;
        position: relative; */
    }
    .nav li{
        width: 33.33%;
        line-height: 40px;
        float: left;
        font-size: 15px;
        text-align: center;
    }
    .nav a{
        color:black;
    }
    .nav .router-link-active{
        color: red;
    }
    .nav .router-link-active::after{
        width: 15px;
        height: 3px;
        background: red;
    }
    
</style>