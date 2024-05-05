<template>
  <user-card-list :user-list="userList"/>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";

const userList = ref()

onMounted(async () => {

  const userData = await myAxios.get('/user/recommend', {
    params: {},
  })
      .then(function (response) {
        console.log("user recommend success: ", response);
        showSuccessToast("数据获取成功")
        return response?.data;
      })

      .catch(function (error) {
        showFailToast("数据获取失败")
        console.log("user recommend failed: ", error);
      })
  if (userData) {
    userData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userData;
  }
});

</script>

<style scoped>

</style>