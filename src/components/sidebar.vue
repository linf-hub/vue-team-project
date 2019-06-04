<template>
  <div class="sidebar">
    <div>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        default-active
      >
        <div v-for="(item, index) in currentNavItems" :key="index">
          <el-submenu v-if="item.subs.length > 0" :index="item.index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span v-text="item.title"></span>
            </template>
            <div v-for="(child,cindex) in item.subs" :key="cindex">
              <el-menu-item :index="child.index" :class="{'is-active': child.index == $route.path}">
                <router-link :to="child.index" tag="span" class="span">{{ child.title }}</router-link>
              </el-menu-item>
            </div>
          </el-submenu>
          <el-menu-item v-else :index="item.index" :class="{'is-active': item.index == $route.path}">
            <i class="el-icon-menu"></i>
            <router-link :to="item.index" tag="span" class="span">{{ item.title }}</router-link>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      currentNavItems: []
    };
  },
  methods: {},
  mounted() {
    // 从sessionStorage得到menuData
    this.currentNavItems = JSON.parse(sessionStorage.getItem("menuDatas"));
  }
};
</script>

<style lang="scss">
.sidebar {
  .el-submenu__title,
  .el-menu-item,
  .el-submenu .el-menu-item {
    height: 40px;
    line-height: 38px;
    font-size: 16px;
  }
  .el-submenu__title:hover,
  .el-menu-item:hover,
  .el-submenu .el-menu-item:hover {
    background-color: #3599e6 !important;
    color: #fff !important;
  }

  .el-submenu__title:hover i,
  .el-submenu__title:hover span,
  .el-menu-item:hover i,
  .el-menu-item:hover span,
  .el-submenu .el-menu-item:hover i,
  .el-submenu .el-menu-item:hover span {
    color: #fff !important;
  }

  .el-submenu__title,
  .el-menu-item {
    padding-left: 80px !important;
    background-color: #f2f2f2 !important;
    /* border-top: 1px solid #1269a2; */
    border-bottom: 1px solid #cccccc;
  }

  .el-submenu:nth-last-child(1) .el-submenu__title {
    /* border-bottom: 1px solid #1269a2; */
  }

  .el-submenu .el-menu-item {
    padding-left: 120px !important;
    background-color: #f2f2f2 !important;
    color: #333 !important;
  }

  .el-menu .is-active {
    background-color: #3599e6 !important;
    color: #fff !important;
  }

  .el-menu .is-active > i,
  .el-menu .is-active > span {
    color: #fff;
  }

  .el-submenu > .el-submenu__title i,
  .el-submenu > .el-submenu__title span {
    color: #333;
  }

  .el-submenu > .el-submenu__title:hover i,
  .el-submenu > .el-submenu__title:hover span {
    color: #fff;
  }

  .el-submenu.is-active .el-submenu__title {
    border-bottom-color: #cccccc;
  }

  .el-submenu__title i,
  .el-submenu__title span,
  .el-menu-item i,
  .el-menu-item span {
    color: #333333;
  }

  .el-submenu .el-menu {
    border-bottom: 1px solid #cccccc;
  }
  .el-submenu .el-menu > div:last-child .el-menu-item {
    border-bottom: none;
  }
}
</style>


<style lang="scss" scoped>
span {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
