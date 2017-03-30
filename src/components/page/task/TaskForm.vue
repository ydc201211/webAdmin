<template>
    <div>
         <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>巡检任务管理</el-breadcrumb-item>
                <el-breadcrumb-item v-if="type === 'add'">添加任务</el-breadcrumb-item>
                <el-breadcrumb-item v-else-if="type === 'modify'">编辑任务</el-breadcrumb-item>
                <el-breadcrumb-item v-else-if="type === 'detail'">查看任务</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="ID">
                <el-input v-model="form.account" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="任务名" >
                <el-input v-model="form.password" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="任务截止时间" >
                <el-input v-model="form.realName" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="巡检员" >
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link block">选择巡检员<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu :model="form.dropdownList" slot="dropdown">
                        <el-dropdown-item command="form.dropdownList.inspectorId">{{form.dropdownList.inspectorName}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-form-item>
            <el-form-item label="优先级" >
                
            </el-form-item>
            <el-form-item label="任务描述" >
                
            </el-form-item>
            <el-form-item label="道路问题描述" >
                
            </el-form-item>
             <el-form-item label="道路问题图片" >
                
            </el-form-item>
            <el-form-item label="道路问题视频" >
                
            </el-form-item>

            <img class="pre-img" :src="src" alt="">
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import VueCoreImageUpload  from 'vue-core-image-upload';
    export default {
        
        data: function(){
            return{
                form:{
                    dropdownList:[
                        {
                            inspectorId:1,
                            inspectorName:"张三"
                        },
                        {
                            inspectorId:2,
                            inspectorName:"李四"
                        },
                    ]
                },
                type:"add",
                disable:true,
            }
        },
        components: {
            VueCoreImageUpload,
        },
        methods:{
            onSubmit() {
                this.$message.success('提交成功！');
                this.$emit("onSubmit","123123");
            }
        }
    }
</script>

<style>
    .acconut-input{
        width: 300px;
    }
    .pre-img{
        width:150px;
        height: 150px;
        margin:0 0 20px 80px;
    }
    .upload-img{
        top:-10px;
        left:80px;
        bottom:60px;
    }
</style>