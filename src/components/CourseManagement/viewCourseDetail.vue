<template>
  <div class="dialog_container detail">
    <el-dialog :visible.sync="dialogVisible" width="860px" @close="closeDialog">
      <div class="container">
        <h1 class="title">课程详情<span class="title_tips">（已同步到微信公众号直播列表且APP置顶）</span></h1>
        <ul class="detail_list">
          <li class="clearfix">
            <span class="list_t">封面图</span>
            <div class="list_cont cover_img">
              <img src="../../assets/images/cover.jpg" alt="">
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">播放类型</span>
            <div class="list_cont">
              <p>直播</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">课程类型</span>
            <div class="list_cont">
              <p>高清会议</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">直播时间</span>
            <div class="list_cont">
              <p>2019-02-09 12:30 至 2019-03-10 14:00</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">标题</span>
            <div class="list_cont">
              <p>课程名称标题</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">是否付费</span>
            <div class="list_cont">
              <p>免费</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">付费价格</span>
            <div class="list_cont">
              <p>10元</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">专业类别</span>
            <div class="list_cont">
              <p>康复科</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">专家姓名</span>
            <div class="list_cont">
              <p>张一元</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">所在机构</span>
            <div class="list_cont">
              <p>北京天坛医院</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">专家信息</span>
            <div class="list_cont expert_img">
              <img src="../../assets/images/cover.jpg" alt="">
              <p>
                专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
              </p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">课程介绍</span>
            <div class="list_cont">
              <p>
                课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
                课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
              </p>
              <div class="clearfix course_img">
                <img src="../../assets/images/cover.jpg" alt="">
                <img src="../../assets/images/cover.jpg" alt="">
                <img src="../../assets/images/cover.jpg" alt="">
              </div>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">附件</span>
            <div class="list_cont attachment_list">
              <a href="#">附件附件1.txt</a>
              <a href="#">附件附件附件2.doc</a>
              <a href="#">附件附件附件附件3.txt</a>
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
  name: 'viewCourseDetail',
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
    word-wrap: break-word;
    word-break: break-all;
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
  }
  .expert_img img {
    width: 120px;
    height: 120px;
    float: left;
    margin-right: 8px;
  }
  .course_img {
    padding-top: 8px;
  }
  .course_img img {
    width: 220px;
    margin-right: 8px;
  }
  .attachment_list a {
    display: block;
    color: #0c8eee;
  }
  .title_tips {
    font-size: 16px;
    color: #999;
  }
</style>


