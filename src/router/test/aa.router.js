export default[{
    path:'/aa',
    name:'aa',
    component:() => import(/*webpackChunkName:'aa'*/'@/views/user/aa.vue')
},
]