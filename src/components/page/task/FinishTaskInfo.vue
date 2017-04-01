<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>巡检任务管理</el-breadcrumb-item>
                <el-breadcrumb-item >待完成任务</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--批量删除-->
        <div class="custom-delete" >
             <el-button v-if="isCustomDelete === 1" size="small" type="danger" @click="customDelete">批量删除</el-button>
        </div>
        <!--信息表格-->
        
        <el-table :data="tableData" border style="width:100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="80">
            </el-table-column>
            <el-table-column prop="id" label="ID" sortable width="120">
            </el-table-column>
            <el-table-column prop="taskName" label="任务名" sortable width="200">
            </el-table-column>
            <el-table-column prop="overTime" label="任务完成时间" sortable width="180">
            </el-table-column>
            <el-table-column prop="inspectorName" label="巡检员" :formatter="formatter" width="160">
            </el-table-column>
            <el-table-column prop="priority" label="优先级" width="100">
            </el-table-column>
            <el-table-column label="详情" width="120">
                <template scope="scope">
                    <div class="detail-cell" @click="showDetail(scope.$index, scope.row)">详细</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="240">
                <template scope="scope">
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button size="small" type="info" class="add-btn" @click='handleAdd()'>添加</el-button>

        <div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                multipleSelection:[],
                tableData: [{
                    id:"17001",
                    taskName: 'ydc201211',
                    overTime: '2017.3.14',
                    inspectorName: '张三',
                    priority: '1'
                }, 
                {
                    id:"17002",
                    taskName: 'ydc201211',
                    overTime: '2016.11.11',
                    inspectorName: '张三',
                    priority: '1'
                }, 
                {
                    id:"17003",
                    taskName: 'ydc201211',
                    overTime: '2016.11.11',
                    inspectorName: '张三',
                    priority: '1'
                }, 
                {
                    id:"17004",
                    taskName: 'ydc201211',
                    overTime: '2016.11.11',
                    inspectorName: '张三',
                    priority: '1'
                }],

                isCustomDelete:0
            }
        },
        components:{
    
        },
        methods: {
            formatter(row, column) {
                return row.inspectorName;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            showDetail(index,row){
                 this.$router.push({ 
                    path: '/taskDetail', 
                    query: { 
                        type:'detail', 
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
            handleAdd(){
                 this.$router.push({ 
                    path: '/handleTask',
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
    .detail-cell:hover{
        color: #0099FF;
        cursor: pointer;
    }
     .custom-delete{
        margin-bottom: 10px;
        height: 30px;
    }
</style>