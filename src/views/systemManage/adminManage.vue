<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span="5">
          <el-form-item class="border">
            <el-input placeholder="请输入账户名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button class="btn_normal" type="primary" @click="search()">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item>
            <el-button class="btn_normal" type="primary" @click="addAccount">
              <i class="el-icon-plus"></i>新增账户
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form_result">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column prop="userName" label="账号名称"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="createDate" label="创建时间"></el-table-column>
        <el-table-column prop="operate" label="操作" fixed="right">
          <template slot-scope="scope">
            <span class="operate color_blue">编辑</span>
            <span class="operate color_red">删除</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pagination" background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <div class="modal_frame">
      <el-dialog title="新增角色" :visible.sync="dialogVisible" width="600px">
        <el-form>
          <el-form-item label="账户名称" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="4-10个数字和字母组合"></el-input>
          </el-form-item>
          <el-form-item label="账户密码" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="4-10个数字和字母组合"></el-input>
          </el-form-item>
          <el-form-item label="角色名称" :label-width="formLabelWidth">
            <el-select placeholder="请选择角色">
              <el-option label="角色一" value="1"></el-option>
              <el-option label="角色二" value="2"></el-option>
            </el-select>
            <el-button class="btn_normal ml20" type="primary">角色选择</el-button>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button class="btn_normal mr80" type="primary" @click="dialogVisible = false">提 交</el-button>
          <el-button class="btn_normal" @click="dialogVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminManage",
  data() {
    return {
      tableData: [
        {
          userName: "123",
          roleName: "456",
          createDate: "789"
        }
      ],
      dialogVisible: false,
      formLabelWidth: "76px"
    };
  },
  methods: {
    addAccount() {
      this.dialogVisible = true;
    },

    search() {
      this.$API.login({
        username: "15855885588",
        password: "885588"
      }).then(res => {
      })
    }
  }
};
</script>

<style>
</style>


