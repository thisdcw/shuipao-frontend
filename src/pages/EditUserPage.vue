<template>
  <van-form @submit="onSubmit">

    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
        :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from 'vue';
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast, Toast} from "vant";
import {getCurrentUser} from "../service/user";
import {setCurrentUserState} from "../states/user";

const route = useRoute()
const router = useRouter()

const currentUser = ref()

onMounted(async () => {
  currentUser.value = await getCurrentUser()
})

const editUser = ref({
  editKey: route.query.editKey,
  editName: route.query.editName,
  currentValue: route.query.currentValue
})

const onSubmit = async () => {
  if (!currentUser) {
    showFailToast("获取用户信息失败")
    return;
  }
  const res = await myAxios.post('/user/update', {
    'id': currentUser.value.id,
    [editUser.value.editKey]: editUser.value.currentValue,
  })
  console.log("更新请求")
  if (res.data > 0) {
    showSuccessToast("修改成功")
    console.log("更新 ", res)
    setCurrentUserState(null)
    router.back()
  } else {
    showFailToast("修改失败")
  }
};
</script>

<style scoped>

</style>