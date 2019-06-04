<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span="5">
          <el-form-item class="border">
            <el-input placeholder="请输入专家名称或课程名称"></el-input>
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
        <el-table-column prop="userName" label="直播ID"></el-table-column>
        <el-table-column prop="roleName" label="授课专家"></el-table-column>
        <el-table-column prop="createDate" label="课程标准"></el-table-column>
        <el-table-column prop="createDate" label="直播时间"></el-table-column>
        <el-table-column prop="createDate" label="问题数量"></el-table-column>
        <el-table-column prop="operate" label="操作" fixed="right">
          <template slot-scope="scope">
            <router-link class="operate color_blue" to="questionList">问题管理</router-link>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pagination" background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "liveRoomManage",
  data() {
    return {
      tableData: [
        {
          userName: "123",
          roleName: "456",
          createDate: "789"
        }
      ],
    };
  }
};
</script>

<style>
</style>


