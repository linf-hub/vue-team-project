<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="16" class="meeting_back">
        <p class="back fs16" @click="back"><i class="icon icon_back"></i>返回会议管理</p>
        <el-button v-if="!showStep" class="btn_small create_meeting" type="primary" size="small" @click="addSchedule"><i class="el-icon-plus"></i>添加日程</el-button>
      </el-col>
    </el-row>
    <el-form :model="formData" :rules="rules" class="form position form_block" label-width="88px">
      <div class="first_step" v-if="showStep">
        <el-row>
          <el-col :span="8">
            <el-form-item label="视频类型" class="border" prop="videoTypeId">
              <el-select v-model="formData.videoTypeId" placeholder="请选择视频类型">
                <el-option label="请选择" value=""></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="会议类型" class="border" prop="courseTypeId">
              <el-select v-model="formData.courseTypeId" placeholder="请选择会议类型">
                <el-option label="请选择" value=""></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="会议地址" class="border" prop="title">
              <el-input placeholder="请输入会议地址" v-model="formData.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="是否付费" class="border" prop="isFree">
              <el-select v-model="formData.isFree">
                <el-option label="请选择" value=""></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="付费价格" class="border price_label" prop="price">
              <el-input placeholder="" v-model="formData.price">
                <template class="append_input" slot="append">元</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="直播时间" class="border" prop="liveTime">
              <el-date-picker
                v-model="formData.liveTIme"
                type="datetimerange"
                range-separator="至"
                start-placeholder="请选择开始时间"
                end-placeholder="请选择结束时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="会议介绍" class="border" prop="staffInfo">
              <el-input type="textarea" placeholder="请输入会议介绍" rows="5" v-model="formData.staffInfo"></el-input>
              <el-upload
                class="upload_demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                accept="image/gif, image/jpeg, image/png,image/jpg,image/GIF, image/JPEG, image/PNG,image/JPG"
                :on-change="handleChange"
                :file-list="fileList3">
                <el-button class="btn_link btn_small" size="small"><i class="el-icon-plus"></i>上传图片</el-button>
                <div slot="tip" class="upload_tip el-upload__tip">所传图片不大于1M</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="封面图" class="cover_item" prop="coverImg">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                accept="image/gif, image/jpeg, image/png,image/jpg,image/GIF, image/JPEG, image/PNG,image/JPG"
                list-type="picture-card"
                :limit="1"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <div class="cover_upload"><i class="icon icon_plus"></i>上传封面</div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
              <div class="upload_tip cover_tip">为保证效果，建议图片上传750*422</div>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="附件">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList3">
                <el-button class="btn_link btn_small" size="small"><i class="el-icon-plus"></i>上传附件</el-button>
                <div slot="tip" class="upload_tip el-upload__tip">支持JPG、GIF、PDF、PNG、PPT格式，最多传5个</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="16" class="add_btn next_step_btn">
            <el-button @click="changeStep" class="btn_normal" type="primary">下一步</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="second_step" v-if="!showStep">
        <div class="step_list" :key="index" v-for="(item,index) in formData.schedule">
          <h2 class="title">会议日程{{index+1}}</h2>
           <el-row>
            <el-col :span="16">
              <el-form-item label="主题名称" class="border" prop="title">
                <el-input placeholder="请输入主题名称" v-model="formData.title"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16">
              <el-form-item label="会议日程" class="border live_time" prop="liveTime">
                <el-date-picker
                  v-model="formData.liveTIme"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="请选择开始时间"
                  end-placeholder="请选择结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="专家姓名" class="border" prop="staffName">
                <el-input placeholder="请输入专家姓名" v-model="formData.staffName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所在机构" class="border" prop="hospitalName">
                <el-input placeholder="请输入机构名称" v-model="formData.hospitalName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="视频地址" class="border" prop="videoUrl">
                <el-input placeholder="请输入视频地址" v-model="formData.videoUrl"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="专家介绍" class="border" prop="staffInfo">
                <el-input type="textarea" placeholder="请输入专家介绍" rows="5" v-model="formData.staffInfo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="专家头像" class="avatar_item" prop="coverImg">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  accept="image/gif, image/jpeg, image/png,image/jpg,image/GIF, image/JPEG, image/PNG,image/JPG"
                  list-type="picture-card"
                  :limit="1"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <div class="cover_upload"><i class="icon icon_plus"></i>上传头像</div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :span="16" class="add_btn">
            <el-button @click="changeStep" class="btn_normal" type="primary">上一步</el-button>
            <el-button class="btn_normal" type="primary">提交审核</el-button>
            <el-button class="btn_normal btn_link">重置</el-button>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'createCourse',
  data(){
    return {
      showStep: true,
      formData: {
        videoTypeId: '',
        courseTypeId: '',
        title: '',
        isFree: '',
        typeId: '',
        price: '',
        staffName: '',
        hospitalName: '',
        staffInfo: '',
        courseInfo: '',
        videoUrl: '',
        schedule: [
          {}
        ]
      },
      rules: {
        videoTypeId: [
          { required: true, message: '请选择播放类型', trigger: 'change'}
        ],
        courseTypeId: [
          { required: true, message: '请选择课程类型', trigger: 'change'}
        ],
        title: [
          { required: true, message: '请输入课程标题', trigger: 'blur'}
        ],
        isFree: [
          { required: true, message: '请选择是否付费', trigger: 'change'}
        ],
        typeId: [
          { required: true, message: '请选择专业类别', trigger: 'change'}
        ],
        price: [
          { required: true, message: '请输入付费价格', trigger: 'blur'}
        ],
        staffName: [
          { required: true, message: '请输入专家姓名', trigger: 'blur'}
        ],
        hospitalName: [
          { required: true, message: '请输入机构名称', trigger: 'blur'}
        ],
        staffInfo: [
          { required: true, message: '请输入专家信息', trigger: 'blur'}
        ],
        courseInfo: [
          { required: true, message: '请输入课程介绍', trigger: 'blur'}
        ],
        liveTime: [
          { required: true, message: '请选择开始时间和结束时间', trigger: 'blur'}
        ],
        videoUrl: [
          { required: true, message: '请输入视频地址', trigger: 'blur'}
        ],
        coverImg: [
          { required: true, message: '请上传封面', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    back(){
      window.history.go(-1);
    },
    addSchedule(){
      var obj = {};
      this.formData.schedule.push(obj);
    },
    changeStep(){
      this.showStep = !this.showStep;
    }
  }
}
</script>

<style scoped>
  .add_btn .el-button {
    width: 100px;
    margin: 0 32px;
  }
  .price_label /deep/ .el-input-group__append {
    background-color: #fff;
    border-color: #ccc;
  }
  .upload_tip {
    display: inline-block;
    color: #999;
    font-size: 12px;
    padding-left: 8px;
  }
  .cover_tip {
    color: #666;
    float: left;
    height: 20px;
    line-height: 20px;
    padding-left: 0;
    padding-top: 4px;
  }
  .cover_item /deep/ .el-upload--picture-card,
  .cover_item /deep/ .el-upload-list--picture-card .el-upload-list__item {
    background: #fff;
    width: 194px;
    height: 108px;
    margin-bottom: 0;
  }
  .avatar_item /deep/ .el-upload--picture-card,
  .avatar_item /deep/ .el-upload-list--picture-card .el-upload-list__item {
    background: #fff;
    width: 110px;
    height: 110px;
    margin-bottom: 0;
    border-radius: 50%;
  }
  .cover_upload {
    font-size: 16px;
    color: #0d8df0;
    position: relative;
    line-height: 100%;
    padding-top: 66px;
    border-radius: none;
  }
  .upload_demo {
    padding-top: 8px;
  }
  .next_step_btn {
    padding-left: 58px;
  }
  .meeting_back {
    position: relative;
  }
  .create_meeting {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

