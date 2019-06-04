<template>
  <div class="dialog_container detail">
    <el-dialog :visible.sync="dialogVisible" width="860px" @close="closeDialog">
      <div class="container">
        <h1 class="title">会议详情</h1>
        <ul class="detail_list">
          <li class="clearfix">
            <span class="list_t">封面图</span>
            <div class="list_cont cover_img">
              <img src="../../assets/images/cover.jpg" alt="">
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">视频类型</span>
            <div class="list_cont">
              <p>直播</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">会议类型</span>
            <div class="list_cont">
              <p>高清会议</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">会议地址</span>
            <div class="list_cont">
              <p>北京市东城区歌华大厦A座</p>
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
            <span class="list_t">直播时间</span>
            <div class="list_cont">
              <p>2019-02-09 12:30 至 2019-03-10 14:00</p>
            </div>
          </li>
          <li class="clearfix">
            <span class="list_t">会议介绍</span>
            <div class="list_cont">
              <p>
                会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍会议介绍
              </p>
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
        <div class="schedule_list">
          <h3 class="schedule_t">会议日程1</h3>
          <ul class="detail_list schedule_list">
            <li class="clearfix">
              <span class="list_t">主题名称</span>
              <div class="list_cont">
                <p>主题名称</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">会议日程</span>
              <div class="list_cont">
                <p>2019-02-09 12:30 至 2019-03-10 14:00</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">专家姓名</span>
              <div class="list_cont">
                <p>孙一飞</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">所在机构</span>
              <div class="list_cont">
                <p>北京天坛医院</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">视频地址</span>
              <div class="list_cont">
                <p>https://www.baidu.com</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">专家介绍</span>
              <div class="list_cont expert_img">
                <img src="../../assets/images/cover.jpg" alt="">
                <p>
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="schedule_list">
          <h3 class="schedule_t">会议日程2</h3>
          <ul class="detail_list schedule_list">
            <li class="clearfix">
              <span class="list_t">主题名称</span>
              <div class="list_cont">
                <p>主题名称</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">会议日程</span>
              <div class="list_cont">
                <p>2019-02-09 12:30 至 2019-03-10 14:00</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">专家姓名</span>
              <div class="list_cont">
                <p>孙一飞</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">所在机构</span>
              <div class="list_cont">
                <p>北京天坛医院</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">视频地址</span>
              <div class="list_cont">
                <p>https://www.baidu.com</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">专家介绍</span>
              <div class="list_cont expert_img">
                <img src="../../assets/images/cover.jpg" alt="">
                <p>
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="schedule_list">
          <h3 class="schedule_t">会议日程3</h3>
          <ul class="detail_list schedule_list">
            <li class="clearfix">
              <span class="list_t">主题名称</span>
              <div class="list_cont">
                <p>主题名称</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">会议日程</span>
              <div class="list_cont">
                <p>2019-02-09 12:30 至 2019-03-10 14:00</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">专家姓名</span>
              <div class="list_cont">
                <p>孙一飞</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">所在机构</span>
              <div class="list_cont">
                <p>北京天坛医院</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">视频地址</span>
              <div class="list_cont">
                <p>https://www.baidu.com</p>
              </div>
            </li>
            <li class="clearfix">
              <span class="list_t">专家介绍</span>
              <div class="list_cont expert_img">
                <img src="../../assets/images/cover.jpg" alt="">
                <p>
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                  专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息专家信息
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'viewCourseDetail',
   props: {
    dialogVisible: {
      type: Boolean
    }
  },
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
  .schedule_t {
    font-size: 18px;
    color: #2e9ce4;
    position: relative;
    font-weight: normal;
  }
  .schedule_t::after {
    content: "";
    display: block;
    position: absolute;
    height: 0;
    border-top: 1px solid #2e9ce4;
    top: 50%;
    right: 0;
    left: 98px;
  }
</style>
