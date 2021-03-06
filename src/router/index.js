import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-echarts-v3组件
                },
                {
                    path: '/mixcharts',
                    component: resolve => require(['../components/page/MixCharts.vue'], resolve)    // vue-echarts-v3组件
                },
                {
                    path: '/inspectorInfo',
                    component: resolve => require(['../components/page/person/InspectorInfo.vue'], resolve)    // 巡检员信息页面
                },
                {
                    path: '/mine',
                    component: resolve => require(['../components/page/person/Mine.vue'], resolve) //个人资料页面
                },
                {
                    path: '/preTaskinfo',
                    component: resolve => require(['../components/page/task/PreTaskInfo.vue'], resolve) //待完成任务信息页面
                },
                {
                    path: '/finishTaskinfo',
                    component: resolve => require(['../components/page/task/FinishTaskInfo.vue'], resolve) //已完成任务信息页面
                }
            ]
        },

        {
            name: 'manage',
            path: '/manage',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/person/ManageForm.vue'], resolve)
                },
            ]
        },

        {
            path: '/handleTask',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/task/TaskForm.vue'], resolve)
                }
            ]
        },
        {
            path: '/taskDetail',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/task/TaskDetail.vue'], resolve)
                }
            ]
        },

        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
