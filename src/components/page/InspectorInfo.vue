<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>人员信息管理</el-breadcrumb-item>
                <el-breadcrumb-item v-if="type === 'table'">巡检员信息管理</el-breadcrumb-item>
                <el-breadcrumb-item v-else-if="type === 'add'">添加信息</el-breadcrumb-item>
                <el-breadcrumb-item v-else-if="type === 'modify'">编辑信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--信息表格-->
        <div v-if="type === 'table'">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" width="70">
                </el-table-column>
                <el-table-column prop="id" label="ID" sortable width="120">
                </el-table-column>
                <el-table-column prop="account" label="账户" sortable width="180">
                </el-table-column>
                <el-table-column prop="password" label="密码" sortable width="130">
                </el-table-column>
                <el-table-column prop="realName" label="真实名字" :formatter="formatter" width="150">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="100">
                </el-table-column>
                <el-table-column label="操作" width="235">
                    <template scope="scope">
                        <el-button size="small"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button size="small" type="info" class="add-btn" @click='changeAddStatus()'>添加</el-button>
            <div class="pagination">
                <el-pagination
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
        <!--添加信息-->
        <div v-if="type === 'add'">
             <info 
                @onSubmit='change'
                :form='form'
                :src='src'>
            </info>
        </div>
        <div v-if="type === 'modify'">
             <info 
                @onSubmit='change'
                :form='form'
                :src='src'>
            </info>
        </div>
    </div>
</template>

<script>
    import mine from './Mine.vue';
    import info from './InfoForm.vue';
    export default {
        
        data() {
            return {
                tableData: [{
                    id:"17001",
                    account: 'ydc201211',
                    password: '123456',
                    realName: '张三',
                    sex: '女'
                }, {
                    id:"17002",
                    account: 'ydc201211',
                    password: '123456',
                    realName: '张三',
                    sex: '男'
                }, {
                    id:"17003",
                    account: 'ydc201211',
                    password: '323456',
                    realName: '张三',
                    sex: '男'
                }, {
                    id:"17004",
                    account: 'ydc201211',
                    password: '223456',
                    realName: '张三',
                    sex: '男'
                }],
                type:"table",
                form: {
                    account:"ydc2012",
                    password: '123',
                    realName: '张三',
                    isActive: false,
                    sex: '男',      
                }
            }
        },

        components:{
            info
        },
        methods: {
            formatter(row, column) {
                return row.realName;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            },
            goAddPerson(){
                this.$router.push({ path: '/components/page/AddPerson'});
            },
            changeAddStatus(){
                this.$set(this,'form',{
                    account: '',
                    password: '',
                    realName: '',
                    isActive: '',
                    sex: '',      
                });
                this.$set(this,'type',"add");
            },
            change(){
                switch (this.type) {
                    case "table":
                        console.log("table");       
                        break;
                    case "add":
                        console.log("add");
                        break;
                    case "modify":
                        console.log("modify");
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>
<style>
    .add-btn{
        float: left;
        margin: 10px 0 0 0;
    }
</style>