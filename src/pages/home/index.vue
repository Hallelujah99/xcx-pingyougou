<template>
  <div>
    <!-- 头部 -->
    <view class="inputModule">
      <view class="search">
        <icon type="search"
              size="20"
              color="#c1c1c1" />
        <text>搜素</text>
      </view>
    </view>
    <!-- 轮播图 -->
    <view class="page-section page-section-spacing swiper">
      <swiper indicator-dots
              autoplay>
        <block>
          <swiper-item v-for="item in swiperData"
                       :key="item">
            <img :src="item.image_src"
                 alt
                 class="banner" />
          </swiper-item>
        </block>
      </swiper>
    </view>
    <!-- 列表 -->
    <view>
      <ul class="list">
        <li v-for="(item,index) in iconData"
            :key="index">
          <img :src="item.image_src"
               alt="">
        </li>
      </ul>
    </view>
    <!-- 楼层 -->
    <view class="floor" v-for="(item,index) in floorData" :key='index'>
      <div class="topBox">
        <img :src="item.floor_title.image_src"
             alt="">
      </div>
      <div class="buttomBox">
        <div class="leftBox">
          <img :src="item.product_list[0].image_src"
               alt="">
        </div>
        <ul class="rightBox">
          <li>
            <img :src="item.product_list[1].image_src"
                 alt="">
          </li>
          <li>
            <img :src="item.product_list[2].image_src"
                 alt="">
          </li>
          <li>
            <img :src="item.product_list[3].image_src"
                 alt="">
          </li>
          <li>
            <img :src="item.product_list[4].image_src"
                 alt="">
          </li>

        </ul>
      </div>
    </view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperData: [],
      iconData: [],
      floorData: []
    }
  },
  methods: {
    // 获取轮播图
    getSwiper () {
      this.$request({
        url: '/api/public/v1/home/swiperdata'
      }).then(data => {
        this.swiperData = data.data.message
      })
    },
    // 获取图标
    getIcon () {
      this.$request({
        url: '/api/public/v1/home/catitems'
      }).then(res => {
        this.iconData = res.data.message
      })
    },
    // 获取楼层列表
    getFloor () {
      this.$request({
        url: '/api/public/v1/home/floordata'
      }).then(res => {
        console.log(res.data)
        this.floorData = res.data.message
      })
    }
  },
  created () {
    this.getSwiper()
    this.getIcon()
    this.getFloor()
  }
}
</script>

<style lang="less">
.inputModule {
  background-color: #eb4450;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  .search {
    width: 718rpx;
    height: 60rpx;
    background-color: #fff;
    border-radius: 8rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    > text {
      font-size: 24rpx;
      color: #c1c1c1;
      margin-left: 10rpx;
    }
  }
}
.banner {
  width: 100%;
  height: 340rpx;
}
.list {
  height: 194rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 140rpx;
    width: 128rpx;
  }
}
.floor {
  .topBox {
    background-color: #f5f5f5;
    height: 88rpx;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 58rpx;
      position: absolute;
      bottom: 0;
    }
  }
  .buttomBox {
    height: 372rpx;
    padding: 20rpx 17rpx;
    display: flex;
    .leftBox {
      height: 100%;
      width: 232rpx;
      img {
        height: 100%;
        width: 232rpx;
      }
    }
    .rightBox {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-left: 10rpx;
        img {
          width: 232rpx;
          height: 184rpx;
        }
      }
    }
  }
}
</style>
