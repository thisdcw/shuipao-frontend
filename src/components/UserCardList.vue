<template>
  <van-card
      v-for="user in props.userList"
      :desc="user.profile"
      :title="`${user.username}:(${user.inviteCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 4px">{{
          tag
        }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList || userList.length<1" image="search" description="暂无数据"/>
</template>

<script setup lang="ts">

import {defineProps, withDefaults} from "vue";
import {UserType} from "../models/user.d";

interface UserCardListProps {
  userList: UserType[]
}

const props = withDefaults(
    defineProps<UserCardListProps>(), {
      userList: [] as UserType[]
    })

</script>

<style scoped>

</style>