<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-input placeholder="请输入课程名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-cascader clearable
              change-on-select
              :options="areaList"
              :props="areaProps"
              @change="handleChangeArea"
              placeholder="请选择地区">
            </el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span='8'>
          <el-form-item class="border" prop="liveTime">
            <el-date-picker
              type="datetimerange"
              range-separator="至"
              start-placeholder="请选择开始时间"
              end-placeholder="请选择结束时间">
            </el-date-picker>
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
      <div class="table_title clearfix">
        <p><span class="t">申请单位：</span><span class="color_blue">9</span>家</p>
        <p><span class="t">课程：</span><span class="color_blue">2</span>门</p>
        <p><span class="t">专家：</span><span class="color_blue">2</span>位</p>
        <p><span class="t">终端号：</span><span class="color_blue">9</span>个</p>
      </div>
      <el-table class="table" border stripe :data="tableData">
        <el-table-column prop="title" show-overflow-tooltip label="标题"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="申请日期"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="申请医院"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="联系人"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="电话"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="终端号"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="所报课程"></el-table-column>
        <el-table-column prop="applicationNo" show-overflow-tooltip label="备注"></el-table-column>
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
  name: 'courseManagement',
  data(){
    return {
      tableData: [{title: '费用'},{title: '费用'}],
      areaList: [{}],
      areaProps: {
        value: "code",
        label: "name"
      },
    }
  },
  methods: {
    handleChangeArea(){

    }
  }
}
</script>
<style scoped>
  .table_title {
    margin-bottom: 8px;
  }
  .table_title p {
    float: left;
    margin-right: 32px;
    font-size: 16px;
  }
  .table_title span {
    margin-right: 4px;
  }
</style>

