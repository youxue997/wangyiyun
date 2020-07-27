<template>
<div>
     <div class="banner">
            <div class="banner1">
                <i class="find"></i>
               <input type="text" class="search" placeholder="搜索歌曲、歌手、专辑">
            </div>
            
        </div>
    <div class="nav"></div>
            
</div>
</template>

<style scoped>
    .banner{
        text-align: center;
        margin-top: 124px;
        width: 100%;
        background: rgb(233, 232, 231,0.2);
    }
    .banner .search {
    width: 90%;
    height: 30px;
    border-radius: 18px;
    border: 1px solid rgb(238, 235, 235);
    padding-left: 20px;
    background: rgb(209, 209, 208,0.3);
    outline: none;
    margin: 20px 0px;
}
.banner1{
    position: relative;
    border-top: 1px solid rgb(241, 239, 239);
    border-bottom: 1px solid rgb(241, 239, 239);
}
.banner .find{
    display: block;
    width: 13px;
    height: 13px;
    position: absolute;
    top: 30px;
    left: 13px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==);
    background-size:100% auto ;
}
</style>