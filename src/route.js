import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Index from './components/Index.vue';
import Cloud from './components/Cloud.vue';


import RouteTo from './components/RouteTo.vue';
import RouteFrom from './components/RouteFrom.vue';

import SideBar from './components/Public/SideBar.vue';


import Teacher from './components/Index/Teacher.vue';
import TeacherEdit from './components/Index/TeacherEdit.vue';
import TeacherAdd from './components/Index/TeacherAdd.vue';
import TeacherList from './components/Index/TeacherList.vue';

import Student from './components/Index/Student.vue';
import StudentEdit from './components/Index/StudentEdit.vue';
import StudentAdd from './components/Index/StudentAdd.vue';
import StudentList from './components/Index/StudentList.vue';


import Console from './components/Index/Console.vue';
import Document from './components/Index/Document.vue';
import Video from './components/Index/Video.vue';


import One from './components/Cloud/One.vue';
import OneEdit from './components/Cloud/OneEdit.vue';
import More from './components/Cloud/More.vue';
import Managed from './components/Cloud/Managed.vue';
import ManagedAdd from './components/Cloud/ManagedAdd.vue';
import ManagedEdit from './components/Cloud/ManagedEdit.vue';
import ManagedShow from './components/Cloud/ManagedShow.vue';
import StudyingCount from './components/Cloud/StudyingCount.vue';
import TeachingCount from './components/Cloud/TeachingCount.vue';
import CourseCount from './components/Cloud/CourseCount.vue';


Vue.use(VueRouter);
const routes=[
    {
        path: '/',
        name:'',
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
                        component: One,
                    },
                    {
                        path: 'one/edit/:id',
                        name:'oneEdit',
                        component: OneEdit,
                    },
                    {
                        path: 'more',
                        name:'more',
                        component: More,
                    },
                    {
                        path: 'managed',
                        name:'managed',
                        component: Managed,
                    },
                    {
                        path: 'managed/add',
                        name:'managedAdd',
                        component: ManagedAdd,
                    },
                    {
                        path: 'managed/edit',
                        name:'managedEdit',
                        component: ManagedEdit,

                    },
                    {
                        path: 'managed/show',
                        name:'managedShow',
                        component: ManagedShow,
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
            }
        ]
    }
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
    // {
    //     path: '/from',
    //     name:'form',
    //     component: RouteFrom
    // },
];

export default new VueRouter({
    routes:routes
})
