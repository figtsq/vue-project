export default[{
    path:'/forget',
    name:'forget',
    component:() => import(/*webpackChunkName:'forget'*/'@/views/user/Forget.vue')
},{
    path:'/login',
    component:() => import(/* webpackChunkName:'login'*/'@/views/user/Login.vue')
},{
    path:'/reg',
    component:() => import(/* webpackChunkName:'reg'*/'@/views/user/Reg.vue')
}
]