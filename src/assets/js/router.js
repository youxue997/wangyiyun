import VueRouter from 'vue-router'

//index
import index from '../../component/index/index.vue'
import hot from '../../component/index/hot.vue'
import tuijian from '../../component/index/tuijian.vue'
import search from '../../component/index/search.vue'

//recommend
import hotmusic from '../../component/recommend/hotmusic.vue'
// import { component } from 'vue/types/umd'

//open
import music from '../../component/open/music.vue'
import yessir from '../../component/open/yessir.vue'

//search
import fire from '../../component/search/fire.vue'

export default new VueRouter({
    routes:[
        {
            path:`/tuijian`,
            component:index,
            children:[
                {
                    path:`/hot`,
                    component:hot
                },
                {
                    path:`/tuijian`,
                    component:tuijian
                },
                {
                    path:`/search`,
                    component:search
                },
                {
                    path:`/fire`,
                    component:fire
                }
            ],
            redirect:`/tuijian`,
            // redirect:`/hot`,
            // redirect:`/search`
        },  
        {
            path:`/hotmusic`,
            component:hotmusic
        },  
        {
            path:`/music`,
            component:music
        }, 
        {
            path:`/yessir`,
            component:yessir
        },
        {
            path:`/*`,
            redirect:`/tuijian`
        }
    ]
})