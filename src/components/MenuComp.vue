<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    :background-color="'#191a23'"
    :text-color="'#d9d9d9'"
    :router="true"
    :collapse-transition="false"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-3">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
defineProps<{
  isCollapse: boolean;
}>();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
.el-menu * {
  transition: none !important;
}
.el-menu--collapse {
  min-height: 100%;
}
.el-menu-item:hover {
  color: var(--el-menu-active-color);
}

.el-aside {
  transition: none;
}
</style>
