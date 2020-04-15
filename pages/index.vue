<template lang="pug">
.container
<<<<<<< HEAD
=======

  .top-board
    .swiper.navs(v-swiper="navSwiperOption")
      .swiper-wrapper
        .swiper-slide(
          v-for="b, index in banners"
          :key="index")
          .nav {{b.name}}

    // swiper.swipers(ref="mySwiper" :options="mainOption")
    //   swiper-slide(
    //     v-for="b, index in banners"
    //     :key="index")
    //     a.item(
    //       :href="b.link"
    //       :data-size="b.size"
    //       :data-type="b.type")
    //       .title {{b.title}}
    //       .desc {{b.desc}}
    //       .image-container
    //         img.product(:src="b.img")
>>>>>>> update: swiper
    
  .main
    a.img1(href="/seer/why.html")
      img(:src="require('@/assets/home/img/img-main.png')")
    .center
      a.left(href="/seer/src.html")
        img(:src="require('@/assets/home/img/img-left.png')")
      .right
        a.core(href="/seer/amb.html")
          img(:src="require('@/assets/home/img/core.png')")
        a.jacking(href="/seer/slam.html")
          img(:src="require('@/assets/home/img/jacking.png')")

    a.college(href="/seer/images.html")
      img(:src="require('@/assets/home/img/img-college.png')")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
Component.registerHooks(['asyncData']);

interface Resource {
  name: '',
  title: '',
  link: '',
  img: ''
}

@Component
export default class Home extends Vue {
  private list: Resource[] = []
<<<<<<< HEAD

  async asyncData ({ app }) {
    const list = await app.$api.get('resources?page.id=1')
    return { list }
  }

  private mounted() {
    console.log('list:', this.list)
=======
  private navSwiperOption: any = {
    initialSlide: 0,
    direction: 'vertical',
    mousewheel: true,
    mousewheels: true,
    allowTouchMove: false,
    slideToClickedSlide: true,
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 20,
    on: {
      init() {
      }
    }
  }

  private mainOption: any = {
    initialSlide: 0,
    direction: 'vertical',
    mousewheel: false,
    mousewheels: false,
    spaceBetween: 0,
    on: {
      init() {
      }
    }
  }

  async asyncData ({ app }: {
    app: any
  }) {
    let list = await app.$api.get('resources?page.id=1')
    list = list.concat(list)
    list = list.concat(list)
    return { list }
  }

  get banners() {
    return this.list
  }

  private async mounted() {
    const list = await this.$api.get('resources?page.id=1')
    console.log('list:', list)
>>>>>>> update: swiper
  }
}

</script>

<style lang="stylus">

.container
  font-size 16px
  background #fff

<<<<<<< HEAD
=======
  .top-board
    height 700px

    background #000

  .navs
    abs-left 56px
    top 302px
    z-index 100
    margin-right 400px

    height 220px
    color #fff

    .swiper-slide
      opacity .2

    .swiper-slide-prev
    .swiper-slide-next
      opacity .5

    .swiper-slide-active
      opacity 1
      .nav
        border-left-color #fff

    .nav
      margin 10px 0
      padding-left 50px
      border-left 4px solid transparent
      list-style none

>>>>>>> update: swiper
  .main
    margin auto
    padding 130px 0 40px
    width 1200px

    .center
      display flex
      flex-wrap nowrap
      height 713px
    
    .left
      overflow hidden
      flex 0 0 auto
      margin-right 20px
      width 600px

    .right
      position relative
      width 588px
      height 100%

      img
        width 100%
        height 100%
        object-fit fill

      .jacking
        overflow hidden
        display block
        height 346px

      .core
        overflow hidden
        abs-bottom 0
        height 346px

    img
      display block
      margin auto
      object-fit contain
      width 1196px

      border-radius 6px

      transition all .3s

    .img1
      display block
      margin-bottom 42px

      img
        vertical-align top
        width 100%
        height 100%

    .college
      display block
      margin-top 42px

</style>
