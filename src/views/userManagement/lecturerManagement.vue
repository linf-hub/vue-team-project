<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-input placeholder="请输入单位名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-select clearable placeholder="请选择审核状态">
              <el-option></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='6'>
          <el-form-item>
            <el-button class="btn_normal" type="primary">查询</el-button>
            <el-button class="btn_normal" type="primary">导出</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form_result">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column prop="title" show-overflow-tooltip label="讲师姓名"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="手机号码"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="所在单位"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="职称"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="审核状态"></el-table-column>
        <el-table-column show-overflow-tooltip label="操作" fixed="right">
          <template slot-scope="scope">
            <span class="operate color_blue" @click="viewDetail">查看</span>
            <span class="operate color_orange" @click="cancel">取消授权</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <lecturer-detail v-if="dialogVisible" :dialog-visible="dialogVisible" @changeDialogVisible="viewDetail"></lecturer-detail>
  </div>
</template>
<script>
import lecturerDetail from '../../components/LecturerManagement/lecturerDetail'
export default {
  name: 'lecturerManagement',
  data(){
    return {
      tableData: [{title: '费用'},{title: '费用'}],
      dialogVisible: false
    }
  },
  components: {
    lecturerDetail
  },
  methods: {
    viewDetail(){
      this.dialogVisible = !this.dialogVisible;
    },
    cancel(){
      this.$confirm('是否取消授权？', '', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning',
        center: true
      }).then(() => {
        
      },() => {});
    }
  }
}
</script>

