<template lang="pug">
.container
    
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

  async asyncData ({ app }) {
    const list = await app.$api.get('resources?page.id=1')
    return { list }
  }

  private mounted() {
    console.log('list:', this.list)
  }
}

</script>

<style lang="stylus">

.container
  font-size 16px
  background #fff

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
