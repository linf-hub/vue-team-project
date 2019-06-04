<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span="5">
          <el-form-item class="border">
            <el-input placeholder="请输入机构名称或主诉内容"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button class="btn_normal" type="primary">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form_result">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column prop="userName" label="患者姓名"></el-table-column>
        <el-table-column prop="roleName" label="性别"></el-table-column>
        <el-table-column prop="createDate" label="年龄"></el-table-column>
        <el-table-column prop="createDate" label="主诉"></el-table-column>
        <el-table-column prop="createDate" label="提交机构"></el-table-column>
        <el-table-column prop="createDate" label="地区"></el-table-column>
        <el-table-column prop="operate" label="操作" fixed="right">
          <template slot-scope="scope">
            <span class="operate color_blue">查看</span>
            <span class="operate color_red">置顶</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pagination" background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "caseScreen",
  data() {
    return {
      tableData: [
        {
          userName: "123",
          roleName: "456",
          createDate: "789"
        }
      ]
    };
  }
};
</script>

<style>
</style>


