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
                 <div class="block">
                    <el-date-picker
                        v-model="form.deadLine"
                        type="datetime">
                    </el-date-picker>
                </div>
                <!--<el-input v-model="form.deadLine" class="acconut-input"></el-input>-->
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
                    v-model="form.taskDes">
                </el-input>
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
                    deadLine: '2017-04-01 15:37:36',
                    inspectorName: '张三',
                    priority: '1',
                    taskDes:"我阿阿斯顿全文请为群殴为怄气我饿"
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
                imageUrls: [
                    {
                        imageUrlId:1,
                        imageUrl:"/static/img/default1.png"
                    },
                    {
                        imageUrlId:2,
                        imageUrl:"/static/img/default1.png"
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
                if(tempType === 'modify'){
                    this.$set(this,"type","modify");
                }else{
                    this.$set(this,"type","add");
                    this.$set(this,"form.id","");
                    this.$set(this,"form.taskName","");
                    this.$set(this,"form.deadLine","");
                    this.$set(this,"form.inspectorName","");
                    this.$set(this,"form.priority","");
                }
                this.$set(this,"type",tempType);
            }
        },
        filters:{
            filterPriority(value){
                if(value === "1"){
                    return "紧急";
                }else if(value === "2"){
                    return "重要";
                }else{
                    return "一般";
                }
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