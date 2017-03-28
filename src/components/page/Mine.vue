<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>人员信息管理</el-breadcrumb-item>
                <el-breadcrumb-item >个人资料</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--人员信息表单-->
        <div class="form-box">
           <info 
                @onSubmit='change'
                :form='form'
                :src='src'
                :aaa='aaa'>
            </info>
        </div>
    </div>
</template>

<script>
    import info from './InfoForm.vue';
    export default {
        data: function(){
            return {
                form: {
                    account:"ydc2012",
                    password: '123',
                    realName: '张三',
                    isActive: false,
                    sex: '男',      
                },
                src:'../../../static/img/img.jpg',
                aaa:'disable'
            }
        },
        components: {
            info,
        },
        methods: {
            change: function(msg){
                console.log(msg);
            }
        }
    }
</script>