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
                <van-tree-select v-model:main-active-index="activeIndex" :items="items" style="height: 55vh;">
                    <template #content>
                        <van-card :num="index" price="20.00" desc="描述信息" title="商品标题"
                            thumb="https://picx.zhimg.com/v2-b80d08a69997553d389dcd3818f023ea_1440w.jpg?source=172ae18b"
                            v-for="(item, index) in items" :key="index">
                            <template #tags>
                                <van-tag plain type="primary">{{ item.dec }}</van-tag>
                                <van-tag plain type="primary">{{ item.text }}</van-tag>
                            </template>
                            <template #footer>
                                <van-button size="mini" @click="showPopup">选择规格</van-button>
                            </template>

                        </van-card>
                    </template>
                </van-tree-select>
            </div>
        </van-pull-refresh>
        <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit" button-color="rgb(233, 143, 9)">
            <van-icon name="shopping-cart" color="#ee0a24" size="30px" />
        </van-submit-bar>
        <van-popup v-model:show="show" :style="{ padding: '20px' }" round="true">
            <br>糖量<br><van-tag plain type="primary">标签1</van-tag><van-tag plain type="primary">标签2</van-tag>
            <br>温度<br><van-tag plain type="primary">标签3</van-tag><van-tag plain type="primary">标签4</van-tag>
            <br>包装<br><van-tag plain type="primary">标签5</van-tag><van-tag plain type="primary">标签6</van-tag>
            <br><van-button color="#000" plain size="small">加入购物车</van-button>
        </van-popup>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            price: '',
            loading: false,
            activeIndex: 0,
            items: [{ text: '冰淇淋与茶', dec: '好喝' }, { text: '奶盖茶与原叶茶', dec: '好喝晕了' }, { text: 'aa茶a茶a茶', dec: '好喝极了' }, { text: 'bb茶bb茶', dec: '好喝晕了' }, { text: 'cc茶茶c茶cc', dec: '好喝' }, { text: 'd茶d茶d茶d茶d', dec: '好喝极了' }, { text: 'd茶d茶d茶d茶d', dec: '好喝' }, { text: 'e茶e茶e', dec: '好喝' }, { text: 'fd茶f茶d茶f', dec: '好喝' }],
            show: false,
            showBottom: false
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        onSubmit() {
            this.showBottom = true;
        },
        showPopup() {
            this.show = true;
        },


    }

};



</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    /* outline: 1px solid #000; */
}





.bg {
    width: 100vw;
    height: 30vh;
    background-image: url("https://bpic.588ku.com/back_list_pic/20/09/28/efa33573d17cd5ba57c18701a1bb5efb.jpg%21/fw/640/quality/90/unsharp/true/compress/true");
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
    font-size: 3vh;
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
    margin-top: 15vh;
    padding-bottom: 8vh;
}

.van-image {
    width: 50px;
    height: 50px;
}

.van-button {
    background-color: rgb(233, 143, 9);
    border-radius: 15px;
    padding: 5px;
}

.van-card {
    padding-right: 15px;
}

.van-submit-bar {
    background-color: #000;
    border-radius: 50px;
    width: 90vw;
    height: 7.5vh;
    margin-left: 5vw;
}

.van-submit-bar :deep(.van-submit-bar__text span) {
    color: #fff;
}

.van-submit-bar :deep(.van-button) {
    color: #000 !important
}

.van-overlay {
    background: transparent;
}
.goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
  .van-popup .van-tag{
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid rgb(233, 143, 9);
    color: #000;
    font-size:2vh;
    width: 15vw;
    height: 5vh;
    justify-content: space-around;
  }
  .van-popup .van-button {
    border: 0;
    margin-left: 50%;
    margin-top: 5px;
  }
</style>