<template>
  <div class="login">
    <div class="login_cont">
      <h1 class="login_logo"></h1>
      <div class="login_bg">
        <div class="login_inner">
          <img class src="../assets/images/login_bg.png" alt>
          <div class="login_box">
            <div class="login_box_inner">
              <el-form class="form" :model="formData" :rules="rules" :inline="true">
                <div class="login_user">
                  <i class="icon icon_user"></i>
                  <el-form-item prop="username">
                    <el-input v-model.trim="formData.username" placeholder="请输入帐户名"></el-input>
                  </el-form-item>
                </div>
                <div class="login_password">
                  <i class="icon icon_password"></i>
                  <el-form-item prop="password">
                    <el-input v-model.trim="formData.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                </div>
                <el-button class="block text-center login_btn" type="primary" @click="login">登录</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import analogDatas from "./analogDatas";
export default {
  name: "home",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$API.login({
        username: "15855885588",
        password: "885588"
      }).then(res => {
        sessionStorage.setItem("user",JSON.stringify(res.data.result));
      });
      sessionStorage.setItem("menuDatas",JSON.stringify(analogDatas.menuDatas));
      
      let routes = [];
      this.$VPCF.createRoute(routes, analogDatas.routeDatas);
      sessionStorage.setItem(
        "routeDatas",
        JSON.stringify(analogDatas.routeDatas)
      );
      this.$router.addRoutes(routes);
      this.$router.push("/");
    }
  },
  mounted() {}
};
</script>

<style scoped>
.login {
  background: -moz-linear-gradient(left, #2c92d3, #53baf2);
  background: -webkit-linear-gradient(left, #2c92d3, #53baf2);
  background: -o-linear-gradient(left, #2c92d3, #53baf2);
  background: linear-gradient(to right, #2c92d3, #53baf2);
  width: 100%;
  height: 100%;
  position: relative;
}
.login_bg {
  width: 100%;
  height: 560px;
  background: -moz-linear-gradient(left, #2c92d3, #9cd5f4);
  background: -webkit-linear-gradient(left, #2c92d3, #9cd5f4);
  background: -o-linear-gradient(left, #2c92d3, #9cd5f4);
  background: linear-gradient(to right, #2c92d3, #9cd5f4);
}
.login_cont {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
.login_inner {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.login_logo {
  background: url(../assets/images/login_logo.png) left center no-repeat;
  width: 1200px;
  height: 70px;
  margin: 0 auto 24px;
}
.login_bg img {
  width: 586px;
  position: absolute;
  top: 0;
  left: 0;
}
.login_box {
  position: relative;
  height: 100%;
  margin-left: 660px;
  margin-right: 50px;
}
.login_box_inner {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.login_user,
.login_password {
  background: #fff;
  position: relative;
  padding-left: 60px;
  margin-bottom: 40px;
  height: 60px;
}
.login_box_inner /deep/ .el-input {
  font-size: 20px;
  padding: 10px 0;
  width: 100%;
}
.login_btn {
  height: 60px;
  font-size: 20px;
}
.login_box /deep/ .el-form-item,
.login_box /deep/ .el-form-item__content {
  width: 100%;
  margin-bottom: 0;
}
@media screen and (max-width: 1280px) {
  .login_logo {
    background-size: 680px;
  }
  .login_inner,
  .login_logo {
    width: 960px;
  }
  .login_bg img {
    width: 400px;
  }
  .login_bg {
    height: 400px;
  }
  .login_box {
    margin-left: 460px;
  }
  .login_user,
  .login_password,
  .login_btn {
    height: 50px;
  }
  .login_box_inner /deep/ .el-input {
    padding: 5px 0;
    font-size: 16px;
  }
}
</style>

