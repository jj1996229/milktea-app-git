<template>
    <div>
        <div>
            <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="手机号" placeholder="请输入手机号"
                        :rules="[{ required: true, message: '请填写手机号' }, { pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/, message: '请填写正确手机号' }]" />
                    <van-row>
                        <van-col span="16">
                            <van-field v-model="yzm" name="yzm" label="验证码" placeholder="请输入验证码"
                                :rules="[{ required: true, message: '请输入验证码' }]" />
                        </van-col>
                        <van-col span="8">
                            <van-button @click="handleSendYzm">发送验证码</van-button>
                        </van-col>

                    </van-row>

                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import { update } from 'lodash'
import { sendYzm,login } from '../api/users'
import{ showNotify }from'vant'

export default {
    data() {
        return {
            username: '',
            yzm: '',     
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back()
        },
        onSubmit(values) {
          login(values).then((res)=>{
            if(res.data.errcode === 0) {
               this.$store.commit('userToken/updateToken',res.data.token)
               this.$router.push('/user') 
                showNotify({
                    type:'success',
                    message:'登陆成功'
             })
            }
            else{
                showNotify({
                    type:'danger',
                    message:'登陆失败'
                })
            }
          })
           

        },
        handleSendYzm() {
            if (!this.username) {
               showNotify({
                type:'danger',
                message:'请输入手机号'
                })
                return;
            }
            sendYzm({ username: this.username }).then((res) => {
                console.log(res.data.yzm);
    
})
        }
    }

}
</script>

<style lang="scss" scoped></style>