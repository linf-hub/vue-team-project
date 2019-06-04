<template>
  <div class="wrapper">
    <div class="mb20 fs16">
      <router-link class="color_blue" to="liveRoomManage">
        <i class="el-icon-arrow-left"></i>
        返回直播间管理
      </router-link>
    </div>
    <el-form class="form form_block">
      <el-row>
        <el-col :span="5">
          <el-form-item class="border">
            <el-select>
              <el-option label="全部问题" value="1"></el-option>
              <el-option label="已答问题" value="2"></el-option>
              <el-option label="待答问题" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item class="border">
            <el-input placeholder="请输入机构名称或内容关键字"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-button class="btn_normal" type="primary">查询</el-button>
            <el-button class="btn_normal" type="primary">更新问题</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="question_main">

      <div class="question_line">
        <div class="question_operation">
          <h4 class="question_title">
            1、张医生你好，请问孩子发烧好不了怎么办!张医生你好，请问孩子发烧好不了怎么办!
            <span class="question_state bgc-un">待回答</span>
            <span class="question_state bgc-a">已回答</span>
          </h4>
          <p class="question_msg">
            <span>
              <i class="el-icon-user"></i>156****8585
            </span>
            <span>
              <i class="el-icon-office-building"></i>北京积水潭医院(北京市 东城区)
            </span>
            <span>
              <i class="el-icon-time"></i>2019-04-02 18:20:30
            </span>
          </p>
          <div class="bun_line">
            <el-button type="primary">回答</el-button>
            <el-button type="primary">标为已答</el-button>
          </div>
          <div class="solution">
            <p>
              <span>答：</span>凭什么要回答你凭什么要回答你凭什么要回答你凭什么！！！
            </p>
            <el-input type="textarea" :rows="2" placeholder="请输入您的回答..."></el-input>
          </div>
          <div class="bun_line">
            <el-button type="primary">保存</el-button>
            <el-button>取消</el-button>
          </div>
        </div>
      </div>

      <div class="question_line">
        <div class="question_operation">
          <h4 class="question_title">
            2、张医生你好，请问孩子发烧好不了怎么办!张医生你好，请问孩子发烧好不了怎么办!
            <span class="question_state bgc-un">待回答</span>
            <span class="question_state bgc-a">已回答</span>
          </h4>
          <p class="question_msg">
            <span>
              <i class="el-icon-user"></i>156****8585
            </span>
            <span>
              <i class="el-icon-office-building"></i>北京积水潭医院(北京市 东城区)
            </span>
            <span>
              <i class="el-icon-time"></i>2019-04-02 18:20:30
            </span>
          </p>
          <div class="bun_line">
            <el-button type="primary">回答</el-button>
            <el-button type="primary">标为已答</el-button>
          </div>
          <div class="solution">
            <p>
              <span>答：</span>凭什么要回答你凭什么要回答你凭什么要回答你凭什么！！！
            </p>
            <el-input type="textarea" :rows="2" placeholder="请输入您的回答..."></el-input>
          </div>
          <div class="bun_line">
            <el-button type="primary">保存</el-button>
            <el-button>取消</el-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "questionList",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.question_main {
  width: 100%;

  .question_line {
    width: 100%;
    margin: 10px 0 20px;

    .question_operation {
      .question_title {
        font-size: 16px;
        padding: 0 24px;
        text-indent: -24px;

        .question_state {
          display: inline-block;
          font-size: 12px;
          padding: 1px 6px;
          color: #fff;
          text-indent: 0;
          font-weight: normal;
        }
      }

      .question_msg {
        padding: 0 24px;
        font-size: 14px;
        color: #999999;
        margin-top: 10px;
        span {
          display: inline-block;
          margin-right: 40px;
          i {
            margin-right: 2px;
          }
        }
      }

      .bun_line {
        padding: 0 24px;
        margin-top: 10px;

        .el-button {
          font-size: 16px;
          padding: 7px 15px;
          border-radius: 0;
          background: #0d8df0;
        }

        .el-button--default {
          background-color: #fff;
          border-color: #0d8df0;
          color: #0d8df0;
        }

        .el-button + .el-button {
          margin-left: 20px;
        }
      }

      .solution {
        padding: 0 24px;
        margin-top: 10px;

        p {
          font-size: 16px;
          margin-bottom: 10px;

          span {
            color: #0d8df0;
          }
        }
      }
    }
  }
}

.bgc-a {
  background-color: #4cb558;
}

.bgc-un {
  background-color: #e7b448;
}
</style>





