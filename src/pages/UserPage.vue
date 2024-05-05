<template>
  <template v-if="user">
    <van-cell title="头像" is-link @click="toEdit('avatarUrl','头像',user.avatarUrl)">
      <img :src="user.avatarUrl" style="width: 48px;height: 48px" alt=""/>
    </van-cell>
    <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username','昵称',user.username)"/>
    <van-cell title="账号" :value="user.userAccount"/>
    <van-cell title="性别" is-link :value="`${user.gender ==1?'女':'男'}`" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="手机号" is-link :value="user.phoneNumber" @click="toEdit('phone','手机号',user.phoneNumber
)"/>
    <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="邀请码" :value="user.inviteCode"/>
    <van-cell title="创建时间" :value="user.createTime"/>
    <van-cell title="个人简介" :value="user.profile"/>
    <van-cell title="您的身份" :value="`${user.userRole===1 ? '管理员':'普通用户'}`"/>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../service/user";

const router = useRouter()
const user = ref()


onMounted(async () => {
  user.value = await getCurrentUser();
})

const toEdit = (editKey: string, editName: string, currentValue) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue
    }
  })
}
</script>

<style scoped>

</style>