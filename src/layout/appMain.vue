<template>
  <router-view v-if="$route.meta.keepAlive" v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>

  <router-view v-if="!$route.meta.keepAlive" v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>
<style scoped></style>
