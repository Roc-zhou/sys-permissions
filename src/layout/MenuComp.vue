<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @select="selectMenu"
    :background-color="'#191a23'"
    :text-color="'#d9d9d9'"
    :router="true"
    :collapse-transition="false"
  >
    <sideBarItem v-for="(x, i) in routes" :key="i" :menuItem="x" />
  </el-menu>
</template>

<script lang="ts" setup>
import sideBarItem from "@/components/sidebarItem.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
defineProps<{
  isCollapse: boolean;
}>();

const defaultActive = ref("");
const routes = computed(() => useRouter().options.routes);
console.log(routes.value);

onMounted(() => {
  const router = useRouter();
  const currentRouteOpt = router.currentRoute.value;
  defaultActive.value = currentRouteOpt.path;
});

const selectMenu = (index: string) => (defaultActive.value = index);
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
