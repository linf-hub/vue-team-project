<template>
  <!-- 审核 -->
  <div class="modal_frame">
    <el-dialog title="审核" :visible.sync="reviewDialogVisible" width="480px" @close="closeDialog">
      <el-form :label-width="formLabelWidth">
        <el-form-item label="审核">
          <el-select placeholder="请选择">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="理由">
          <el-input type="textarea" rows="5" placeholder="请输入理由"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="btn_normal mr80" type="primary" @click="reviewDialogVisible = !reviewDialogVisible">提 交</el-button>
        <el-button class="btn_normal" @click="reviewDialogVisible = !reviewDialogVisible">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'reviewDialog',
  props: {
    reviewDialogVisible: {
      type: Boolean
    }
  },
  data(){
    return {
      formLabelWidth: '58px'
    }
  },
  methods: {
    closeDialog(){
      this.$emit('changeReviewDialog',false)
    }
  }
}
</script>

