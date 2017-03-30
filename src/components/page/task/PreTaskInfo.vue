<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>巡检任务管理</el-breadcrumb-item>
                <el-breadcrumb-item >任务信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--信息表格-->
        <div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" width="70">
                </el-table-column>
                <el-table-column prop="id" label="ID" sortable width="120">
                </el-table-column>
                <el-table-column prop="taskName" label="任务名" sortable width="180">
                </el-table-column>
                <el-table-column prop="deadLine" label="任务截止时间" sortable width="180">
                </el-table-column>
                <el-table-column prop="inspectorName" label="巡检员" :formatter="formatter" width="150">
                </el-table-column>
                <el-table-column prop="priority" label="优先级" width="100">
                </el-table-column>
                <el-table-column label="详情" width="100">
                    <template scope="scope">
                        <div class="detail-cell" @click="showDetail(scope.$index, scope.row)">详细</div>
                    </template>
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

            <el-button size="small" type="info" class="add-btn" @click='handleAdd()'>添加</el-button>
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
                tableData: [{
                    id:"17001",
                    taskName: 'ydc201211',
                    deadLine: '123456',
                    inspectorName: '张三',
                    priority: '女'
                }, 
                {
                    id:"17001",
                    taskName: 'ydc201211',
                    deadLine: '123456',
                    inspectorName: '张三',
                    priority: '女'
                }, 
                {
                    id:"17001",
                    taskName: 'ydc201211',
                    deadLine: '123456',
                    inspectorName: '张三',
                    priority: '女'
                }, 
                {
                    id:"17001",
                    taskName: 'ydc201211',
                    deadLine: '123456',
                    inspectorName: '张三',
                    priority: '女'
                }],
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
                    path: '/manageTask', 
                    query: { 
                        type:'detail', 
                        id:row.id
                    }
                });
            },
            handleEdit(index, row) {
                this.$router.push({ 
                    path: '/manageTask',
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
            handleAdd(){
                 this.$router.push({ 
                    path: '/manageTask',
                    query: { 
                        type:'add'
                    }
                });
            },
            show(){
                console.log("fghfgh");
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
</style>