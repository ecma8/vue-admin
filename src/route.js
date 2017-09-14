import Vue from 'vue'
import VueRouter from 'vue-router'
const Vuex = resolve => require(['./components/Vuex.vue'], resolve);

const Home = resolve => require(['./components/Home.vue'], resolve);
const Index = resolve => require(['./components/Index.vue'], resolve);
const Cloud = resolve => require(['./components/Cloud.vue'], resolve);

const Teacher = resolve => require(['./components/Index/Teacher.vue'], resolve);
const TeacherEdit = resolve => require(['./components/Index/TeacherEdit.vue'], resolve);
const TeacherAdd = resolve => require(['./components/Index/TeacherAdd.vue'], resolve);
const TeacherList = resolve => require(['./components/Index/TeacherList.vue'], resolve);


const Student = resolve => require(['./components/Index/Student.vue'], resolve);
const StudentEdit = resolve => require(['./components/Index/StudentEdit.vue'], resolve);
const StudentAdd = resolve => require(['./components/Index/StudentAdd.vue'], resolve);
const StudentList = resolve => require(['./components/Index/StudentList.vue'], resolve);


const Console = resolve => require(['./components/Index/Console.vue'], resolve);
const Document = resolve => require(['./components/Index/Document.vue'], resolve);
const Video = resolve => require(['./components/Index/Video.vue'], resolve);


const One = resolve => require(['./components/Cloud/One.vue'], resolve);
const OneEdit = resolve => require(['./components/Cloud/OneEdit.vue'], resolve);
const OneAdd = resolve => require(['./components/Cloud/OneAdd.vue'], resolve);
const OneList = resolve => require(['./components/Cloud/OneList.vue'], resolve);

const More = resolve => require(['./components/Cloud/More.vue'], resolve);
const MoreEdit = resolve => require(['./components/Cloud/MoreEdit.vue'], resolve);
const MoreAdd = resolve => require(['./components/Cloud/MoreAdd.vue'], resolve);
const MoreList = resolve => require(['./components/Cloud/MoreList.vue'], resolve);

const Trusteeship = resolve => require(['./components/Cloud/Trusteeship.vue'], resolve);
const TrusteeshipEdit = resolve => require(['./components/Cloud/TrusteeshipEdit.vue'], resolve);
const TrusteeshipAdd = resolve => require(['./components/Cloud/TrusteeshipAdd.vue'], resolve);
const TrusteeshipList = resolve => require(['./components/Cloud/TrusteeshipList.vue'], resolve);
const StudyingCount = resolve => require(['./components/Cloud/StudyingCount.vue'], resolve);
const TeachingCount = resolve => require(['./components/Cloud/TeachingCount.vue'], resolve);
const CourseCount = resolve => require(['./components/Cloud/CourseCount.vue'], resolve);

const Live = resolve => require(['./components/Live.vue'], resolve);
const LiveList = resolve => require(['./components/live/LiveList.vue'], resolve);
const LiveManage = resolve => require(['./components/live/LiveManage.vue'], resolve);
const LiveExtend = resolve => require(['./components/live/LiveExtend.vue'], resolve);
const LiveGoods = resolve => require(['./components/live/LiveGoods.vue'], resolve);
const LiveCount = resolve => require(['./components/live/LiveCount.vue'], resolve);
const LiveMobileCount = resolve => require(['./components/live/LiveMobileCount.vue'], resolve);
const LivePromotion = resolve => require(['./components/live/LivePromotion.vue'], resolve);

const LiveBasicSet = resolve => require(['./components/live/LiveSet/BasicSet.vue'], resolve);
const LiveSet = resolve => require(['./components/live/liveSet/LiveSet.vue'], resolve);
const LiveCustomMenu = resolve => require(['./components/live/LiveSet/CustomMenu.vue'], resolve);
const LiveBootMap = resolve => require(['./components/live/LiveSet/LiveBootMap.vue'], resolve);
const LiveViewingMode = resolve => require(['./components/live/LiveSet/ViewingMode.vue'], resolve);
const LiveWeChatShare = resolve => require(['./components/live/LiveSet/WeChatShare.vue'], resolve);


Vue.use(VueRouter);
const routes=[
    {
        path: '/',
        name:'home',
        component: Home,
        children:[
            {
                path: '/',
                name:'index',
                component: Index,
                redirect:'console',
                children:[
                    {
                        path: 'console',
                        name:'console',
                        component: Console,
                    },
                    {
                        path: 'student',
                        name:'student',
                        component:Student,
                        redirect:'student/list',
                        children:[
                            {
                                path: 'list',
                                name:'studentList',
                                component: StudentList,
                            },
                            {
                                path: 'edit/:id',
                                name:'studentEdit',
                                component: StudentEdit,
                            },
                            {
                                path: 'add',
                                name:'studentAdd',
                                component: StudentAdd,
                            }
                        ]
                    },
                    {
                        path: 'teacher',
                        name:'teacher',
                        component: Teacher,
                        redirect:'teacher/list',
                        children:[
                            {
                                path: 'list',
                                name:'teacherList',
                                component: TeacherList,
                            },
                            {
                                path: 'add',
                                name:'teacherAdd',
                                component: TeacherAdd,
                            },
                            {
                                path: 'edit/:id',
                                name:'teacherEdit',
                                component: TeacherEdit,
                            }
                        ]
                    },
                    {
                        path: 'document',
                        name:'document',
                        component: Document,
                    },
                    {
                        path: 'video',
                        name:'video',
                        component: Video,
                    },

                ]
            },
            {
                path: '/cloud',
                name:'cloud',
                redirect:'/cloud/one',
                component: Cloud,
                children:[
                    {
                        path: 'one',
                        name:'one',
                        component:One,
                        redirect:'one/list',
                        children:[
                            {
                                path: 'list',
                                name:'oneList',
                                component: OneList,
                            },
                            {
                                path: 'edit/:id',
                                name:'oneEdit',
                                component: OneEdit,
                            },
                            {
                                path: 'add',
                                name:'oneAdd',
                                component: OneAdd,
                            }
                        ]
                    },
                    {
                        path: 'more',
                        name:'more',
                        component:More,
                        redirect:'more/list',
                        children:[
                            {
                                path: 'list',
                                name:'moreList',
                                component: MoreList,
                            },
                            {
                                path: 'edit/:id',
                                name:'moreEdit',
                                component: MoreEdit,
                            },
                            {
                                path: 'add',
                                name:'moreAdd',
                                component: MoreAdd,
                            }
                        ]
                    },
                    {
                        path: 'trusteeship',
                        name:'trusteeship',
                        component:Trusteeship,
                        redirect:'trusteeship/list',
                        children:[
                            {
                                path: 'list',
                                name:'trusteeshipList',
                                component: TrusteeshipList,
                            },
                            {
                                path: 'edit/:id',
                                name:'trusteeshipEdit',
                                component: TrusteeshipEdit,
                            },
                            {
                                path: 'add',
                                name:'trusteeshipAdd',
                                component: TrusteeshipAdd,
                            }
                        ]
                    },
                    {
                        path: 'studyingCount',
                        name:'studyingCount',
                        component: StudyingCount,
                    },
                    {
                        path: 'teachingCount',
                        name:'teachingCount',
                        component: TeachingCount,
                    },
                    {
                        path: 'courseCount',
                        name:'courseCount',
                        component: CourseCount,
                    }
                ]
            },
            {
                path: '/live',
                name:'live',
                redirect:'/live/manage',
                component: Live,
                children:[
                    {
                        path: 'manage',
                        name: 'liveManage',
                        component:LiveManage,
                        redirect:'manage/list',
                        children:[
                            {
                                path: 'list',
                                name: 'liveList',
                                component: LiveList,
                            },
                            {
                                path: 'set',
                                name: 'liveSet',
                                component: LiveSet,
                                children: [
                                    {
                                        path: 'basicSet',
                                        name: 'basicSet',
                                        component: LiveBasicSet
                                    },
                                    {
                                        path: 'customMenu',
                                        name: 'customMenu',
                                        component: LiveCustomMenu
                                    },
                                    {
                                        path: 'bootMap',
                                        name: 'bootMap',
                                        component: LiveBootMap
                                    },
                                    {
                                        path: 'viewingMode',
                                        name: 'viewingMode',
                                        component: LiveViewingMode
                                    },
                                    {
                                        path: 'weChatShare',
                                        name: 'weChatShare',
                                        component: LiveWeChatShare
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'extend',
                        name: 'liveExtend',
                        component:LiveExtend,

                    },
                    {
                        path: 'goods',
                        name: 'liveGoods',
                        component:LiveGoods
                    },
                    {
                        path: 'count',
                        name: 'liveCount',
                        component:LiveCount
                    },
                    {
                        path: 'mobileCount',
                        name: 'liveMobileCount',
                        component:LiveMobileCount
                    },
                    {
                        path: 'promotion',
                        name: 'livePromotion',
                        component:LivePromotion
                    }
                ]
            }
        ]
    },
    // ,
    // {
    //     path: '/to',
    //     name:'',
    //     component: RouteTo,
    //     children:[
    //         {
    //             path: 'one',
    //             name:'one',
    //             component: One,
    //         },
    //         {
    //             path: 'more',
    //             name:'more',
    //             component: More,
    //         }
    //     ]
    // },
    {
        path: '/vuex',
        name:'vuex',
        component: Vuex
    }
];

export default new VueRouter({
    routes:routes
})
