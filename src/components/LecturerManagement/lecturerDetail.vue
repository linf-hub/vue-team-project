<template>
  <div class="dialog_container detail">
    <el-dialog :visible.sync="dialogVisible" width="860px" @close="closeDialog">
      <div class="container">
        <h1 class="title">讲师详情</h1>
        <ul class="detail_list">
          <li class="clearfix">
            <span class="list_t">讲师姓名</span>
            <div class="list_cont">
              <p>孙飞</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">电话</span>
            <div class="list_cont">
              <p>15890987321</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">所在单位</span>
            <div class="list_cont">
              <p>医院名称</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">职称</span>
            <div class="list_cont">
              <p>职称</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">申请说明</span>
            <div class="list_cont">
              <p>申请说明</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">执业证</span>
            <div class="list_cont cover_img">
              <img src="../../assets/images/cover.jpg" alt="">
              <img src="../../assets/images/cover.jpg" alt="">
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">医师资格证</span>
            <div class="list_cont cover_img">
              <img src="../../assets/images/cover.jpg" alt="">
              <img src="../../assets/images/cover.jpg" alt="">
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">身份证</span>
            <div class="list_cont cover_img">
              <img src="../../assets/images/cover.jpg" alt="">
              <img src="../../assets/images/cover.jpg" alt="">
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">职称证</span>
            <div class="list_cont cover_img">
              <img src="../../assets/images/cover.jpg" alt="">
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">工作证</span>
            <div class="list_cont cover_img">
              <img src="../../assets/images/cover.jpg" alt="">
              <img src="../../assets/images/cover.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean
    }
  },
  name: 'lecturerDetail',
  data () {
    return {
    }
  },
  methods: {
    closeDialog(){
      this.$emit('changeDialogVisible',false);
    }
  }
}
</script>
<style scoped>
  .detail /deep/ .el-dialog__header{
    padding: 10px;
  }
  .detail /deep/ .el-dialog__body {
    padding: 10px 20px;
  }
  .detail_list {
    padding-top: 16px;
  }
  .detail_list li {
    margin-bottom: 12px;
  }
  .list_cont p,
  .list_cont a {
    color: #999;
    font-size: 18px;
    line-height: 28px;
  }
  .list_t {
    color:#333;
    float: left;
    font-size: 18px;
    width: 98px;
    line-height: 28px;
  }
  .list_cont {
    padding-left: 98px;
    width: 100%;
    float: left;
    margin-left: -98px;
  }
  .cover_img img {
    width: 300px;
    margin-right: 8px;
  }
</style>


