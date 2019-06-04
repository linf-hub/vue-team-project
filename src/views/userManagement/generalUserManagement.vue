<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span='4'>
          <el-form-item class="border">
            <el-input placeholder="请输入单位名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='4'>
          <el-form-item class="border">
            <el-cascader clearable
              change-on-select
              :options="areaList"
              :props="areaProps"
              @change="handleChangeArea"
              placeholder="请选择所属地区">
            </el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span='6' class="border">
          <el-form-item class="border" prop="liveTime">
            <el-date-picker
              type="datetimerange"
              range-separator="至"
              start-placeholder="请选择开始时间"
              end-placeholder="请选择结束时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span='4'>
          <el-form-item class="border">
            <el-select clearable placeholder="请选择用户来源">
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
        <el-table-column prop="title" show-overflow-tooltip label="用户ID"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="用户姓名"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="手机号"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="单位"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="从事专业"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="职业"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="注册时间"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="注册来源"></el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'generalUserManagement',
  data(){
    return {
      tableData: [{title: '费用'},{title: '费用'}]
    }
  },
  methods: {
  }
}
</script>