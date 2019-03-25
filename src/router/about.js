const about = () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue');

export default [
    {
        path: '/about',
        name: 'about',
        component: about
    }
]