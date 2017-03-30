<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>人员信息管理</el-breadcrumb-item>
                <el-breadcrumb-item >个人资料</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--人员信息表单-->
        <img class="pre-img" :src="src" alt="">
        <vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop','upload-img']"
                            :crop="true"
                            text="上传图片"
                            url="/api/posts/"
                            extensions="png,gif,jpeg,jpg"
                            @:imageuploaded="imageuploaded"
                            @:errorhandle="handleError"></vue-core-image-upload>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账户">
                <el-input v-model="form.account" :disabled="disabled" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="真实名字">
                <el-input v-model="form.realName" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="禁用账户">
                <el-switch on-text="是" off-text="否" v-model="form.isActive"></el-switch>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    
    </div>
</template>

<script>
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
                disabled:'true'
            }
        },
        components: {
        },
        methods: {
            change: function(msg){
                console.log(msg);
            }
        }
    }
</script>

