<template>
  <!-- 只有一个菜单的时候 -->
  <template v-if="hasOne(menuItem)">
    <el-menu-item :index="menuItem.path" v-if="!menuItem.meta.hidden">
      <!-- <el-icon><icon-menu /></el-icon> -->
      <template #title>{{ menuItem.meta.title }}</template>
    </el-menu-item>
  </template>
  <!-- 多级路由 -->
  <template v-else>
    <el-sub-menu :index="menuItem.path" v-if="!menuItem.meta.hidden">
      <template #title>
        <!-- <el-icon><Menu /></el-icon> -->
        <span>{{ menuItem.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="(x, i) in menuItem.children"
        :key="i"
        :menuItem="x"
      />
    </el-sub-menu>
  </template>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarItem",
  props: ["menuItem"],
  setup() {
    const hasOne = (item: {
      children: string | unknown[];
      meta: { hidden: unknown };
    }) => {
      if (item.children && item.children.length !== 0) return false;
      return true;
    };
    return {
      hasOne,
    };
  },
});
</script>
