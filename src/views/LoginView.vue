<template>
  <div class="login justify-start flex-column items-center">
    <h3>基于Vue3+Typescript的后台管理</h3>
    <div class="login-con">
      <el-form
        ref="ruleFormRef"
        :model="userForm"
        :rules="rules"
        :size="'large'"
        class="form-con"
      >
        <div class="showForm">
          <el-input
            :prefix-icon="User"
            placeholder="用户名"
            width=""
          ></el-input>
          <el-input
            type="password"
            :prefix-icon="Lock"
            placeholder="密码"
            auto-complete="off"
            show-password
          ></el-input>
        </div>
        <el-form-item prop="name">
          <el-input
            v-model="userForm.name"
            :prefix-icon="User"
            placeholder="用户名"
            width=""
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            type="password"
            v-model="userForm.pwd"
            :prefix-icon="Lock"
            placeholder="密码"
            auto-complete="off"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="justify-between items-center">
        <el-checkbox
          v-model="remberPwd"
          label="记住密码"
          size="large"
        ></el-checkbox>
        <el-link href="https://element.eleme.io" target="_blank"
          >忘记密码</el-link
        >
      </div>
      <el-button
        type="primary"
        size="large"
        :style="'width: 100%;'"
        :loading="loginIng"
        >登录</el-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
const userForm = reactive({
  name: "",
  pwd: "",
});
const remberPwd = ref(false);
const loginIng = ref(false);
const rules = reactive({
  name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  pwd: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
});
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  color: #000;
  padding-top: 100px;
  .login-con {
    width: 400px;
    margin-top: 30px;
    .form-con {
      width: 100%;
      .showForm {
        position: fixed;
        left: -30000px;
      }
    }
  }
}
</style>
