<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="16">
        <p class="back fs16" @click="back"><i class="icon icon_back"></i>返回课程管理</p>
      </el-col>
    </el-row>
    <el-form ref="createCourse" :model="formData" :rules="rules" class="form position form_block" label-width="98px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="播放类型" class="border" prop="videoTypeId">
            <el-select v-model="formData.videoTypeId" placeholder="请选择播放类型">
              <el-option label="直播" value="1"></el-option>
              <el-option label="录播" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="课程类型" class="border" prop="courseTypeId">
            <el-select v-model="formData.courseTypeId">
              <el-option label="请选择" value=""></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="isVideo">
        <el-col :span="16">
          <el-form-item label="直播时间" class="border live_time" prop="liveTime">
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
          <el-form-item label="标题" class="border" prop="title">
            <el-input placeholder="请输入课程标题" v-model="formData.title"></el-input>
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
          <el-form-item label="专业类别" class="border" prop="typeId">
            <el-select v-model="formData.typeId">
              <el-option label="请选择" value=""></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="付费价格" class="border price_label" prop="price">
            <el-input placeholder="" v-model="formData.price">
              <template class="append_input" slot="append">元</template>
            </el-input>
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
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="专家信息" class="border" prop="staffInfo">
            <el-input type="textarea" placeholder="请输入专家信息" rows="5" v-model="formData.staffInfo"></el-input>
            <el-upload
              class="upload_demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              accept="image/gif, image/jpeg, image/png,image/jpg,image/GIF, image/JPEG, image/PNG,image/JPG"
              :on-change="handleChange"
              :limit="1"
              :file-list="fileList3">
              <el-button class="btn_link btn_small" size="small"><i class="el-icon-plus"></i>上传图片</el-button>
              <div slot="tip" class="upload_tip el-upload__tip">所传图片不大于1M</div>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="课程介绍" class="border" prop="courseInfo">
            <el-input type="textarea" placeholder="请输入课程介绍" rows="5" v-model="formData.courseInfo"></el-input>
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
              <img width="100%" src="" alt="">
            </el-dialog>
            <div class="upload_tip cover_tip">为保证效果，建议图片上传750*422</div>
          </el-form-item>
        </el-col>
        <el-col :span="16" v-if="!isVideo">
          <el-form-item label="视频地址" class="border" prop="videoUrl">
            <el-input placeholder="请输入视频地址" v-model="formData.videoUrl"></el-input>
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
        <el-col :span="16">
          <el-form-item label="APP置顶" prop="hotStatus" class="carousel_item">
            <el-radio v-model="formData.hotStatus" :label="1">是</el-radio>
            <el-radio v-model="formData.hotStatus" :label="0">否</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="16" v-if="isVideo">
          <el-form-item prop="syncWechat" class="border">
            <el-checkbox v-model="formData.syncWechat">是否同步到微信公众号直播列表</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="16" class="text-center add_btn">
          <el-button class="btn_normal" type="primary" @click="submitForm('createCourse')">提交</el-button>
          <el-button class="btn_link btn_normal" @click="resetForm('createCourse')">重置</el-button>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>
<script>
export default {
  name: 'createCourse',
  data(){
    return {
      formData: {
        videoTypeId: '1',
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
        hotStatus: 1,
        syncWechat: false
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
        ],
      },
      fileList3: [],
      dialogVisible: false
    }
  },
  methods: {
    back(){
      window.history.go(-1);
    },
    handleChange(){},
    handleRemove(){},
    handlePictureCardPreview(){},
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    isVideo(){
      if (this.formData.videoTypeId == 1){
        return true;
      } else {
        return false;
      }
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
  .live_time /deep/ .el-date-editor .el-range-input {
    font-size: 16px;
  }
  .carousel_item /deep/ .el-form-item__content {
    line-height: 40px;
  }
</style>

