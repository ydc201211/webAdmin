<template>
    <div>
         <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>巡检任务管理</el-breadcrumb-item>
                <el-breadcrumb-item v-if="type === 'add'">添加任务</el-breadcrumb-item>
                <el-breadcrumb-item v-else-if="type === 'modify'">编辑任务</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="ID" v-if="type === 'modify'">
                <div class="id-text" >{{form.id}}</div>
            </el-form-item>
            <el-form-item label="任务名" >
                <el-input v-model="form.taskName" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="任务截止时间" >
                <el-input v-model="form.deadLine" class="acconut-input"></el-input>
            </el-form-item>
            <el-form-item label="巡检员" >
                <el-dropdown trigger="click">
                    <el-select v-model="inspectorValue" clearable filterable placeholder="巡检巡检员">
                        <el-option
                            v-for="item in inspectorOptions"
                            :label="item.inspectorName"
                            :value="item.inspectorId">
                        </el-option>
                    </el-select>
                </el-dropdown>
            </el-form-item>
            <el-form-item label="优先级" >
                 <el-dropdown trigger="click">
                    <el-select v-model="priorityValue" clearable filterable placeholder="优先级">
                        <el-option
                            v-for="item in priorityOptions"
                            :label="item.priorityText"
                            :value="item.priorityId">
                        </el-option>
                    </el-select>
                </el-dropdown>
            </el-form-item>
            <el-form-item label="任务描述" >
                <el-input
                    class="taskDec"
                    type="textarea"
                    :rows="4"
                    placeholder="空"
                    v-model="textarea">
                </el-input>
            </el-form-item>
            <el-form-item label="道路问题描述" >
                <el-input
                    class="taskDec"
                    type="textarea"
                    :rows="4"
                    placeholder="空"
                    v-model="textarea">
                </el-input>
            </el-form-item>
            <el-form-item label="道路问题图片(可展示)" >
                <img v-lazy="imageUrl" class="pre-img" alt="">
                <img v-lazy="imgObject" class="pre-img" alt="">
                <img v-lazy="imgObject" class="pre-img" alt="">
            </el-form-item>
            <el-form-item label="道路问题视频" >
                <div class="road-video">

                </div>
            </el-form-item>           
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
                    id:"17001",
                    taskName: 'ydc201211',
                    deadLine: '123456',
                    inspectorName: '张三',
                    priority: '1'
                },

                inspectorOptions:[
                    {
                        inspectorId:1,
                        inspectorName:"张三"
                    },
                    {
                        inspectorId:2,
                        inspectorName:"李四"
                    },
                ],
                imgObject:[
                    {
                        src: '/static/img/default.png',
                        error: '/static/img/default.png',
                        loading: '/static/img/default.png'
                    },
                    {
                        src: '/static/img/default.png',
                        error: '/static/img/default.png',
                        loading: '/static/img/default.png'
                    }
                ],
                imageUrls: [
                    {
                        imageUrlId:1,
                        imageUrl:"/static/img/default.png"
                    },
                    {
                        imageUrlId:2,
                        imageUrl:"/static/img/default.png"
                    }
                    
                ],
                priorityOptions:[
                    {
                        priorityId:1,
                        priorityText:"紧急"
                    },
                    {
                        priorityId:2,
                        priorityText:"重要"
                    },
                     {
                        priorityId:3,
                        priorityText:"一般"
                    }
                ],
                
                type:"add",
                disabled:true,
                inspectorValue:"",
                priorityValue:""
            }
        },
        components: {
            VueCoreImageUpload
        },
        created: function(){
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods:{
            onSubmit() {
                this.$message.success('提交成功！');
                this.$emit("onSubmit","123123");
            },

             fetchData () {
                 
                var tempType = this.$route.query.type;
                console.log(tempType);
                if(tempType === 'add'){
                    this.$set(this,"disabled",false);
                }else{
                    this.$set(this,"disabled",true);
                }
                this.$set(this,"type",tempType);
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
        margin-right:10px;
    }
    .upload-img{
        top:-10px;
        left:80px;
        bottom:60px;
    }
    .id-text{

    }
    .taskDec{
        width: 300px;
    }
    .road-video{
        width: 150px;
        height: 150px;
        background: #000;
    }

</style>