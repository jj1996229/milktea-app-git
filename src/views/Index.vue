<template>
    <div class="fresh">
        <van-pull-refresh v-model="loading" @refresh="onRefresh" success-text="刷新成功,开始点单吧" success-duration="800">
            <div class="bg">
                <a><img src="https://img1.baidu.com/it/u=3787080092,1571271225&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        alt="个人中心"></a>
                <div class="nm">
                    <div class="top">
                        <h1>
                            <a>来点奶茶</a>
                            <p>在线接单中,欢迎选购</p>
                        </h1>
                    </div>
                    <div class="down">
                        <p>公告：本店会通过不断地尝试来研发新类奶茶，新类奶茶会成为本周的推荐饮品，在推出的前两天会特价销售。</p>
                    </div>
                </div>
            </div>
            <div class="order">
                <van-tree-select v-model:main-active-index="activeIndex" :items="items">
                    <template #content>
                        <van-image v-if="activeIndex === 0"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
                        <van-image v-if="activeIndex === 1"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" />
                    </template>
                </van-tree-select>

            </div>
        </van-pull-refresh>
    </div>
</template>

<script>

export default {
    data() {
        return {
            loading: false,
            activeIndex: 0,
            items: [{ text: '冰淇淋与茶' }, { text: '奶盖茶与原叶茶' }, { text: 'aa茶a茶a茶' }, { text: 'bb茶bb茶' }, { text: 'cc茶茶c茶cc' }, { text: 'd茶d茶d茶d茶d' }],
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }

    },
};


</script>

<style>
* {
    margin: 0;
    padding: 0;
    /* outline: 1px solid #000; */
}

.template {
    overflow-y: scroll
}

/* .fresh {
    text-align: center;
    color: #fff;
    flex: 3;
}

.fresh p {
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: transparent;
    z-index: 9999;
    position: relative;
} */

.bg {
    width: 100vw;
    height: 30vh;
    background-image: url("https://img.tukuppt.com/png_preview/00/11/20/vTICWd6ExY.jpg%21/fw/780");
    background-size: cover;

}

.nm {
    position: relative;
    top: 20vh;
    width: 80vw;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1px 1px 10px #cecbcb, 1px -1px 10px #cecbcb, -1px 1px 10px #cecbcb, -1px -1px 10px #cecbcb;
}

.bg a img {
    width: 10vw;
    height: 5vh;
    border-radius: 5vh;
    position: relative;
    top: 17vh;
    margin-left: 9vw;

}

.nm .top {
    flex: 1;
}

.nm .top h1 {
    background-image: url("https://img0.baidu.com/it/u=1622302095,871955617&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500");
    background-size: cover;
    background-repeat: no-repeat;
    width: 20vw;
    height: 10vh;
    font-size: 8vh;
}

.nm .top h1 a {
    position: relative;
    left: 20vw;
    width: 50vw;
    height: 10vh;
    display: block;
    padding: 8px;
    padding-bottom: 0;
    font-weight: normal;
    font-size: 4vh;
}

.nm .down {
    flex: 1;
}

.nm .down p {
    font-size: .5vh;
    color: #a69e9e;
}

.nm .top h1 p {
    background-image: url("https://bpic.51yuansu.com/pic2/cover/00/30/55/58108745622fb_610.jpg");
    background-size: 4vw;
    background-repeat: no-repeat;
    font-size: .6vh;
    width: 50vw;
    position: relative;
    bottom: 5vh;
    left: 23vw;
    text-indent: 6vw;
    font-weight: normal;
    height: 3vh;
    margin-top: 2px;
}

.order {
    background-color: #fff;
    flex: 7;
    height: 70vh;
    padding-top: 15vh;
}

/* .template {
    display: flex;
} */
</style>