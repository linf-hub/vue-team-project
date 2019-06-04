<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-input placeholder="请输入课程名称或者专家名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-select clearable placeholder="请选择审核状态">
              <el-option label="请选择审核状态" value=""></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-select clearable placeholder="请选择专业">
              <el-option label="请选择专业" value=""></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='5'>
          <el-form-item class="border">
            <el-select clearable placeholder="请选择播放类型">
              <el-option label="请选择播放类型" value=""></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='4'>
          <el-form-item>
            <el-button class="btn_normal" type="primary">查询</el-button>
          </el-form-item>
        </el-col>
        <el-col :span='6'>
          <el-form-item>
            <el-button class="btn_normal" type="primary" @click="goToCreateCourse"><i class="el-icon-plus"></i>新增课程</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form_result">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column label="标题">
          <template slot-scope="scope">
            <span class="course_type course_live"><i class="icon icon_live"></i>直播</span>
            <span class="course_type"><i class="icon icon_record"></i>录播</span>
            <span>{{scope.row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="applicationNo"
          show-overflow-tooltip
          label="专家名称">
        </el-table-column>
        <el-table-column
          prop="applicationNo"
          show-overflow-tooltip
          label="所在机构">
        </el-table-column>
        <el-table-column
          prop="applicationNo"
          show-overflow-tooltip
          label="审核状态">
        </el-table-column>
        <el-table-column
          prop="applicationNo"
          show-overflow-tooltip
          label="专业类别">
        </el-table-column>
        <el-table-column
          prop="applicationNo"
          show-overflow-tooltip
          label="费用">
        </el-table-column>
        <el-table-column
          prop="applicationNo"
          label="操作"
          fixed="right"
          width="160">
          <template slot-scope="scope">
            <span class="operate color_blue">编辑</span>
            <span class="operate color_blue" @click="viewDetail">查看</span>
            <span class="operate color_orange" @click="getReviewDialog">审核</span>
            <!-- <span class="operate color_red">下架</span> -->
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
    <!-- 查看详情 -->
    <course-detail v-if="dialogVisible" :dialog-visible="dialogVisible" @changeDialogVisible="viewDetail"></course-detail>
    <review-dialog v-if="reviewDialogVisible" :review-dialog-visible="reviewDialogVisible" @changeReviewDialog="getReviewDialog"></review-dialog>
  </div>
</template>
<script>
import courseDetail from '../../components/CourseManagement/viewCourseDetail'
import reviewDialog from '../../components/reviewDialog'
export default {
  name: 'courseManagement',
  data(){
    return {
      tableData: [{title: '费用'},{title: '费用'}],
      dialogVisible: false,
      reviewDialogVisible: false,
    }
  },
  components: {
    courseDetail,
    reviewDialog
  },
  methods: {
    goToCreateCourse(){
      this.$router.push('/createCourse')
    },
    viewDetail(){
      this.dialogVisible = !this.dialogVisible;
    },
    getReviewDialog(){
      this.reviewDialogVisible = !this.reviewDialogVisible;
    },
    obtained(){
      this.$confirm('确定要下架吗？', '', {
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
<style scoped>
  .course_type {
    float: left;
    position: relative;
    padding-left: 12px;
    font-size: 12px;
    color: #35c85e;
    margin-right: 8px;
  }
  .course_live {
    color: #5096c7;
  }
</style>


