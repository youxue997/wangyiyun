<template>
<div class="header">
    <audio src="src/assets/musics/miss.m4a" id="music1"></audio>
    <div class="bg"></div>
    <div class="banner">
        <span class="iconfont icon-arrow-down"></span>
        <h2>我想我不一样</h2>
        <p>张紫宁</p>
    </div>
    <div class="middle">
        <img src="../../assets/images/011.jpg" class="img1">
        <img src="../../assets/images/012.png" alt="">
        <img src="../../assets/images/010.png" class="img2">
    </div>
    <div class="footer">
      <span>0:00</span>
       <input id="snrPollInterval" type="range" min="1" max="30">
       <span>2:42</span>
       <p><span class="iconfont icon-xunhuan"></span>
       <span class="iconfont icon-shangyishou"></span>
       <span class="iconfont icon-bofang"></span>
       <span class="iconfont icon-xiayishou"></span>
       <span class="iconfont icon-xinaixin"></span>
       </p>
    </div>
</div>

</template>

<script>
export default{
  mounted(){
    music1.play()
  }
}

</script>


<style>
body{
    overflow-x: hidden;
}
</style>
<style scoped>

.header .bg{
    background-image: url(../../assets/images/011.jpg);
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(100px);
    transform: scale(1.5);
    overflow-y: hidden;

}
.header .banner{
  width: 100%;
  background:transparent;
  top: 0px;
  position: relative;
  z-index: 10;
  text-align: center;
}
.header .banner h2{
    color: seashell;
    font-size: 18px;
    margin-top: 10px;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 4px;
}
.header .banner p{
    font-size: 12px;
    color: seashell;
    margin-top: 0px;
}
.header .banner .iconfont{
    font-size: 25px;
    color: white;
    font-weight: bolder;
    padding-left: 5px;
    position: absolute; 
    left: 5px;
}
.header .middle{
    width: 100%;
    position: relative;
    z-index: 10;
}
.header .middle img{
    position: absolute;
    width: 100%;
    margin-top: 60px;
}
 @keyframes rotation {
     from {
         transform: rotate(0deg);
     }
     to {
         transform: rotate(360deg);
     }
        }
.header .middle .img1{
    width: 63%;
    left: 18%;
    top: 68px;
    transform: rotate(360deg);
    animation: rotation 15s linear infinite;
}
.header .middle .img2{
    width: 30%;
    top: -60px;
    left: 180px;
}
.footer{
    width: 100%;
    height: 120px;
    /* background: rgba(150, 146, 146, 0.6); */
    position: relative;
    /* z-index: 11; */
    top: 450px;
    text-align: center;
}
input[type="range"] {
  /*-webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;*/
  -webkit-appearance: none; /*去除默认样式*/
  margin-top: 42px;
  background-color: #ebeff4;
  /*border-radius: 15px;*/
  width: 70% !important;
  -webkit-appearance: none;
  height:4px;
  padding: 0;
  border: none;

  /*input的长度为80%，margin-left的长度为10%*/
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;/*去除默认样式*/
  cursor: default;
  top: 0;
  height: 20px;
  width: 20px;
  transform: translateY(0px);
  /*background: none repeat scroll 0 0 #5891f5;*/
  background: #fff;
  border-radius: 15px;
  border: 5px solid #006eb3;
  /*-webkit-box-shadow: 0 -1px 1px #fc7701 inset;*/
}
.footer span{
  color: white;
  font-weight: bolder;
}
.footer p{
  margin-top: 10px;
}
.footer p span{
  font-size: 28px;
  padding-left: 15px;
  padding-right: 15px;
}
.iconfont icon-bofang{
  font-size: 35px;
}

</style>