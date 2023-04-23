<template>
  <van-nav-bar title="新增收货地址" left-arrow @click-left="onClickLeft" />
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="username" name="联系人" label="联系人" placeholder="" :rules="[{ required: true, }
      ]" />
      <van-radio-group v-model="checked" direction="horizontal" icon-size="15px" checked-color="rgba(255, 183, 0)">
        <van-radio name="1">先生</van-radio>
        <van-radio name="2">女士</van-radio>
      </van-radio-group>


      <van-field v-model="value1" type="text" name="手机号" label="手机号" placeholder="请填写收货人手机号码"
        :rules="[{ required: true, message: '请填写收货人手机号码' }]" />
      <van-field v-model="value2" type="text" name="收货地址" label="收货地址" placeholder="请输入收货地址"
        :rules="[{ required: true, message: '请输入收货地址' }]" />
      <van-field v-model="value3" type="text" name="标签" label="标签" placeholder=""
        :rules="[{ required: true, message: '' }]" />

      <van-tag v-for="item, index in list" :key="index" plain ref="a" @click="onTag(index)" v-model="value4" type="primary"
        :class="{ active: value4 === index }">{{ item }}</van-tag>
 

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="onSubmit">
        保存地址
      </van-button>


    </div>
  </van-form>
</template>

<script>
import { closeToast, showLoadingToast } from 'vant';

export default
  {
    data() {
      return {
        username: '',
        checked: '',
        value1: '',
        value2: '',
        value3: '',
        value4: 0,
        pattern: /\d{6}/,
        list: ['无', '学校', '家', '公司']
      }



    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    methods: {
      validator(val) { /1\d{10}/.test(val) },
      validatorMessage(val) { `${val} 不合法，请重新输入` },
      asyncValidator(val) {

        new Promise((resolve) => {
          showLoadingToast('验证中...');



          setTimeout(() => {
            closeToast();
            resolve(val === '1234');
          }, 1000);
        }),
          onFailed = (errorInfo) => {
            console.log('failed', errorInfo);
          }
      },
      onSubmit() {

        this.$store.dispatch('addAddress/address', { telephone: this.value1, address: this.value2, username: this.username })
      },
      onTag(a) {
        this.value4 = a


      }


    }
  };
// 表单项类型 - 开关


</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #000;
}

.van-nav-bar :deep(.van-nav-bar__title) {
  color: white;
  font-weight: normal;
}


.van-button {
  background-color: rgba(255, 183, 0);
  border: none;
}

.van-button :deep(.van-button__text) {
  color: #000;

}

.van-radio-group {
  position: relative;
  top: -30px;
  left: 200px;
  font-size: 12px;

}

.van-tag {
  position: relative;
  top: -30px;
  left: 100px;
  font-size: 12px;
  margin-left: 5px;
}

.active {
  background-color: #cde1f5;
  color: #000;
}</style>