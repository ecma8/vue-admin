import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Index from './components/Index.vue';
import Cloud from './components/Cloud.vue';

import SideBar from './components/Public/SideBar.vue';

import Student from './components/Index/Student.vue';
import Teacher from './components/Index/Teacher.vue';
import TeacherEdit from './components/Index/TeacherEdit.vue';
import Console from './components/Index/Console.vue';

import One from './components/Cloud/One.vue';
import More from './components/Cloud/More.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
        path: '/', 
        name:'',
        component: Home,
        children:[
            {
                path: '/',
                name:'index',
                component: Index,
                redirect:'/console',
                children:[
                    {
                        path: 'console',
                        name:'console',
                        component: Console
                    },
                    {
                        path: 'student',
                        name:'student',
                        component: Student
                    },
                    {
                        path: 'teacher',
                        name:'teacher',
                        component: Teacher
                    },
                    {
                        path: 'teacher/edit/:id',
                        name:'teacherEdit',
                        component: TeacherEdit
                    },
                    {
                        path: 'teacher/add',
                        name:'teacherAdd',
                        component: TeacherEdit
                    }
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
                        component: One
                    },
                    {
                        path: 'more',
                        name:'more',
                        component: More
                    }
                ]
            }
        ]   
    }
    ]
})
