<template>
  <el-container class="el-container">
    <el-aside width="200" class="left_menu"
      ><Menu :isCollapse="isCollapse"
    /></el-aside>
    <el-container>
      <el-header
        class="el-header justify-between items-center"
        :style="`width: calc(100% - ${!isCollapse ? '200' : '64'}px)`"
      >
        <div class="left justify-start items-center">
          <el-icon :style="'cursor: pointer;'" @click="checkMenu">
            <fold v-if="!isCollapse" />
            <expand v-else />
          </el-icon>
          <el-icon :style="'margin: 0 20px'"><refresh /></el-icon>

          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"
              >homepage</el-breadcrumb-item
            >
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="right justify-center items-center">
          <el-dropdown>
            <span class="el-dropdown-link items-center el_avatar">
              <el-avatar :size="'default'" :src="circleUrl"></el-avatar>
              <span>Auatar</span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-main
        class="el_main"
        :style="`width: calc(100% - ${!isCollapse ? '200' : '64'}px)`"
      >
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import AppMain from "./appMain.vue";
import { Expand, Fold, Refresh } from "@element-plus/icons-vue";
import Menu from "@/components/MenuComp.vue";
const isCollapse = ref(false);
const circleUrl = ref(
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
);
const checkMenu = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
  font-size: 14px;
  color: #515a6e;
  .left_menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 10;
  }
  .el-header {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    background-color: #fff;
    .left {
      font-size: 18px;
    }
    .right {
      height: 100%;
      .el_avatar {
        height: 100%;
        padding: 0 10px;
        cursor: pointer;
        > span {
          margin-left: 5px;
        }
      }
    }
  }
  .el_main {
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px;
    max-height: 100%;
    background-color: #f5f7f9;
  }
}
</style>
