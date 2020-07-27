<template>
    <div>
        <div class="banner">
            <div class="banner1">
                <i class="find"></i>
               <input type="text" class="search" placeholder="搜索歌曲、歌手、专辑" v-model="search" v-on:keydown.enter="sear()"> 
            </div>
            
        </div>
        <div class="hot"><p>热门搜索</p></div>
        <div class="nav">
            <ul>
                <router-link to="fire"><li v-for="(v,i) in msg" :key="i"><p @click="send(v.music)">{{v.music}}</p></li></router-link>
            </ul>
            <ul class="jilu">
                <i>搜索记录</i>
                <li v-for="(item,index) in list" :key="index">
                   <p>{{item.title}}</p><span v-on:click="del()">x</span>   
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:{},
                search:'',
                list:[
                    {
                        title:''
                    }
                ]
            }
        },
        mounted(){
            this.list.splice(0,1);
            this.$http.get('./data/search.json')
            .then((response)=> {
            console.log(response);
            this.msg=response.data.msg
            })
            .catch(function (error) {
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
        },
        methods:{
            sear(){
                this.list.push({
                    title:this.search
                })
                this.search=''
            },
           del(a){
               this.list.splice(a,1);
           },
           send(b){
               this.search=b
           }
        }
    }
</script>

<style scoped>
.nav .jilu li{
    width:100%;
     border: none;
}
.nav .jilu p{
    float: left;
}
.nav .jilu span{
    margin-right: 30px;
    float: right;
}
.nav i{
    font-style: normal;
    margin-top: 15px;
    margin-right: 75px;
    margin-left:10px;
    float:left;
    font-size: 12px; 
    color: #666;
}
.banner{
    text-align: center;
    margin-top: 124px;
    width: 100%;
    height: 100%;
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
.nav ul{
    text-align: center;
}
.nav li{
    width: 30%;
    line-height: 30px;
    border-radius: 18px;
    font-size: 14px;
    border: 1px solid rgb(238, 235, 235);
    float: left;
    margin-left: 12px;
    margin-top: 10px;
    color: #333;
}
.hot p{
    height: 12px;
    font-size: 12px;
    color: #666;
    margin-left: 10px;
    margin-top: 10px;
}
</style>