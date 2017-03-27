<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>人员信息管理</el-breadcrumb-item>
                <el-breadcrumb-item>巡检员信息管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="70">
            </el-table-column>
            <el-table-column prop="id" label="ID" sortable width="120">
            </el-table-column>
            <el-table-column prop="account" label="账户" sortable width="150">
            </el-table-column>
            <el-table-column prop="password" label="密码" sortable width="120">
            </el-table-column>
            <el-table-column prop="realName" label="真实名字" :formatter="formatter" width="120">
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="120"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                    :filter-method="filterTag">
                <template scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
                tableData: [{
                    id:"17001",
                    account: 'ydc201211',
                    password: '123456',
                    realName: '张三',
                    tag: '家'
                }, {
                    id:"17002",
                    account: 'ydc201211',
                    password: '123456',
                    realName: '张三',
                    tag: '公司'
                }, {
                    id:"17003",
                    account: 'ydc201211',
                    password: '123456',
                    realName: '张三',
                    tag: '家'
                }, {
                    id:"17004",
                    account: 'ydc201211',
                    password: '123456',
                    realName: '张三',
                    tag: '公司'
                }]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            }
        }
    }
</script>