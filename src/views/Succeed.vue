<template>
    <van-nav-bar title="来点奶茶" left-text="" left-arrow>
        <template #left>
            <van-icon name="arrow-left" size="20px" color="#fff" @click="onClickLeft" />
        </template>
        <template #right>
            <van-icon name="home-o" size="20px" color="#fff" @click="onClickRight" />
        </template>
    </van-nav-bar>
    <div class="down">
        <van-icon name="todo-list-o" size="80px" color="lightgreen"/>
        <h3>下单成功</h3>
        <p>预计30分钟后送达</p>
        <p>后厨正在加紧制作中，请耐心等待~</p>
        <van-button type="primary" to="orders">查看订单</van-button>

    </div>
    
</template>

<script>
export default {
    data() {
        return{
        }
    },
    methods: {
        onClickLeft() {
            history.back()
        },
        onClickRight() {
            console.log(123);
            window.location.href = "/"
        },

    }


}
</script>

<style scoped>
.van-nav-bar {
    background-color: #000;
    padding-top: 10vh;
}


.van-nav-bar :deep(.van-nav-bar__title) {
    color: #fff;
    font-weight: normal;
    /* background-color: #fff; */
}

.down{
    text-align: center;
    height: 70vh;
    padding-top: 20vh;
    color:#443f3f;
}

.van-button{
    background-color: #f8b45b;
    border: none;
    color:#000;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>