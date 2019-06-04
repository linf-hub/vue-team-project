<template>
  <div class="main">
    <el-container>
      <el-header class="page_header">
        <h2 class="header_logo">远程继续教育平台后台系统</h2>
        <div class="login_user">
          <el-button @click="logout" class="btn_text" type="text">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside class="page_sidebar">
          <sidebar></sidebar>
        </el-aside>
        <el-main class="page_main">
          <div class="main_height">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "./sidebar";
export default {
  name: "dashboard",
  components: { Sidebar },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    logout() {
      this.$confirm("确定要退出吗", "", {
        confirmButtonText: "退出",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        sessionStorage.clear();
      }, () => {});
    }
  }
};
</script>
<style scoped>
.login_user {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
}
.btn_text {
  color: #fff;
  font-size: 16px;
}
.btn_text:hover {
  color: #f1f1f1;
}
</style>

<style>
.wrapper .el-textarea__inner {
  border-radius: 0 !important;
}
</style>

