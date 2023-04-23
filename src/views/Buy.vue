<template>
    <van-nav-bar title="标题" left-text="" left-arrow @click-left="onClickLeft" />
    <van-skeleton title :row="3" />
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onClickLeft() {
            history.back()
        }
    }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
    background-color: #000;
    height: 10vh;
}

.van-nav-bar :deep(.van-nav-bar__title) {
    color: #fff;
    font-weight: normal;
    line-height: 10vh;
    height: 100%;
}

.van-nav-bar :deep(.van-icon) {
    color: #fff;
    line-height: 10vh;
    height: 100%;
}


</style>