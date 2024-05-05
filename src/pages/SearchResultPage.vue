<template>
  <user-card-list :user-list="userList"/>
</template>

<script setup>

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import qs from 'qs'

const route = useRoute()
const {tags} = route.query


let userList = ref([])
onMounted(async () => {

  const userData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log("user search tags success: ", response);
        return response?.data;
      })
      .catch(function (error) {
        console.log("user search tags failed: ", error);
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

const mockUser = {
  id: 12345,
  username: "西达不溜",
  userAccount: "thisdcw",
  avatarUrl: "https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg",
  gender: "男",
  phone: "12345678910",
  email: "thisdcw@gmail.com",
  inviteCode: "1234",
  profile: "积极向上,爱岗敬业,1974年在东南亚打自由搏击获得了冠军,后来改行做了程序员",
  userRole: '1',
  tags: ['java', 'python', 'C++', 'C', 'Rust', 'AI', 'Go', 'Kotlin', 'JavaScript', '打工中'],
  createTime: new Date()
}

</script>

<style scoped>

</style>