<template lang="pug">

.header(:data-type="type")
  .header-content
    a.logo(href="/seer/index.html")
      img(:src="require('./img/logo.png')")
      .name SEER ROBOTICS

    .right-actions
      a.search(href="javascript:")
        img(:src="require('./img/search.svg')")
      a.menu(href="javascript:" @click="showMenu=true")
        img(:src="require('./img/menu.png')")

  .menus(:class="{ show: showMenu }")
    .menus-mask(@click="showMenu=false")
    .menus-content
      a.btn.btn-close(
        href="javascript:"
        @click="showMenu=false")
        img(:src="require('./img/close.svg')")
      ul
        li
          a.link(href="/seer/why.html") Why our robots
        li
          a.link(href="/seer/products.html") Robots
        li
          a.link(href="/seer/src.html") SRC series core controller
        li
          a.link(href="/seer/srd.html") SRD
        li
          a.link(href="/seer/applications.html") Applications
        li
          a.link(href="/seer/news.html") News
        li
          a.link(href="/seer/support.html") Support
        li
          a.link(href="/seer/about-us.html") Company
        li
          a.link(href="/seer/college.html") College

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop({ default: '' }) type!: string

  private showMenu: boolean = false
}

</script>

<style lang="stylus" scoped>

@import "~@/common/css/mixins.styl"

.header
  position relative
  z-index 100
  display flex
  justify-content space-between
  align-items center
  padding 0 60px

  height 92px

  &[data-type='white']
    background #fff

    .header-content
      .logo
        img
          filter: brightness(0);

        .name
          color #000

      .menu
      .search
        img 
          filter brightness(0)

        &:hover
          img
            filter none

  .menus
  .menus-mask
    pointer-events none
    fixed-stretch()
    z-index 100000

  .menus-mask
    z-index 1

  .menus
    opacity 0
    &.show
      opacity 1

      .menus-mask
        pointer-events auto

      .menus-content
        pointer-events auto
        transform translateX(0)

  .menus-content
    position fixed
    right 0
    top 0
    z-index 2
    padding 120px 0 0 42px

    width 280px
    height 100vh
    background #094793

    transform translateX(100%)
    transition all .26s

    .btn-close
      abs-right 60px
      top 37px
      flex-center()

      width 44px
      height @width

      border-radius 50%
      
      transition background .24s

      &:hover
        background #fff

        img
          filter: invert(33%) sepia(83%) saturate(1030%) hue-rotate(192deg) brightness(86%) contrast(95%);

      img
        width 22px
        color #fff

    ul
      overflow auto
      margin 0
      padding 0

      height calc(100vh - 140px)

    li
      margin 0
      list-style none

      color #fff

    .link
      display block
      margin-bottom 28px

    .sub-links
      .link
        margin-bottom 18px
        font-size 12px
        color #eee

    .link
      font-size 14px
      color #fff

  .header-content
    width 100%
    display flex
    justify-content space-between
    align-items center

    margin auto

    .logo
      display flex
      align-items center

      img
        margin-right 15px
        width 44px

      .name
        font-size 22px
        color #fffefe

    .right-actions
      display flex
      justify-content flex-end

    a.menu
    .search
      margin-left 10px
      overflow hidden
      flex-center()
      width 64px
      height @width

      border-radius 50%
      transition all .24s

      &:hover
        background #0f4991

      img
        width 30px

</style>