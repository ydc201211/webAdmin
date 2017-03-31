<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>人员信息管理</el-breadcrumb-item>
                <el-breadcrumb-item >巡检员信息管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--批量删除-->
        <div class="custom-delete">
             <el-button v-if="isCustomDelete === 1" size="small" type="danger" @click="customDelete">批量删除</el-button>
        </div>
        <!--信息表格-->
        <div>
            <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
                multipleSelection: [],
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
                isCustomDelete:0
            }
        },
        components:{
        },
        methods: {
            formatter(row, column) {
                return row.realName;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$router.push({ 
                    path: '/manage', 
                    query: { 
                        type:'modify', 
                        id:row.id
                    }
                });
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        

                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.tableData.splice(index,1);
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                });
                // this.$message.error('删除第'+(index+1)+'行');
            },
            changeAddStatus(){
                 this.$router.push({ 
                    path: '/manage', 
                    query: { 
                        type:'add'
                    }
                });
            },
            handleSelectionChange(val) {
                 if(val.length != 0){
                    this.isCustomDelete = 1;
                    this.multipleSelection = val;
                }else{
                    this.isCustomDelete = 0;
                }
               
               
            },
            customDelete(){
                this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        for(var i in this.multipleSelection){
                            for(var j in this.tableData){
                                if(this.multipleSelection[i].id === this.tableData[j].id){
                                    this.tableData.splice(j,1);
                                }
                            }
                        }
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                    });          
                });
            }
        }
    }
</script>
<style>
    .add-btn{
        float: left;
        margin: 10px 0 0 0;
    }
    .custom-delete{
        margin-bottom: 10px;
        height: 30px;
    }
</style>