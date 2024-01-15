<script setup>
import {reactive} from "vue";
import {useRouter} from 'vue-router';
import {loginApi} from "../request/services.js";
import {UserInfoStore} from "../store/useTokenStore.js";
import {ElMessage} from "element-plus";


const userInfoStore = UserInfoStore()
const router = useRouter()

const credentials = reactive({})

const login = async () => {
  const data = await loginApi(credentials)
  if (data.code === 2000) {
    userInfoStore.set(data.data.token)
    ElMessage.success("登录成功")
    await router.push("/home")
  } else {
    ElMessage.error("登录失败")
  }
}
</script>

<template>
  <div class="LoginPage">
    <el-row class="LoginBox">
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>登录</span>
              <el-button class="button" text>Operation button</el-button>
            </div>
          </template>
          <el-form :model="credentials" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="credentials.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input show-password type="password" v-model="credentials.password"></el-input>
            </el-form-item>
          </el-form>

          <template #footer>
            <el-button @click="login()">登录</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.LoginBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.LoginPage {
  background-image: url("https://cn.bing.com/th?id=OHR.MilopotamosStairs_ZH-CN8013521384_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp");
}
</style>