<template lang="pug">

.footer
  .talk-container(:class="{ active: showTalk }")
    a.btn.btn-close(
      href="javascript:"
      @click="showTalk=false") ×

  a.btn.btn-talk(
    href="javascript:" 
    :class="{ active: showTalk }"
    @click="showTalk=true")
    img(:src="require('./img/talk-s.png')")

  .footer-content
    .links
      .item
        a.title(href="/seer/why.html") 
          img(:src="require('@/common/icons/robot.svg')")
          | WHY OUR ROBOTS
      .item
        a.title(href="/seer/applications.html") 
          img(:src="require('@/common/icons/case.svg')")
          | CASE STUDY
        a.link(href="/seer/application.html") S1
        a.link(href="/seer/application.html") S2
        a.link(href="/seer/application.html") S3
      .item
        a.title(href="/seer/support.html") 
          img(:src="require('@/common/icons/support.svg')")
          | Support
        a.link(href="/seer/faq.html") FAQ
        a.link(href="/seer/downloads.html") Downloads
        a.link(href="/seer/feedback.html") Feedbacks
      .item
        a.title(href="/seer/about-us.html") 
          img(:src="require('@/common/icons/company.svg')")
          | Company
        a.link(href="/seer/about-us.html") About Us
        a.link(href="/seer/recruitment.html") Jobs

    .address
      .foot-logo
        img(:src="require('./img/logo.png')")
        .info
          .phone 400-0616-660
          .home Contact@seer-robotics.com
          .addr No. 203, 7 Building,Jinlingzhidu, No.1888 New Jinqiao Road, Pudong New District
      .sites
        a.site(href="https://www.linkedin.com/company/32831322" target="_blank")
          img(:src="require('./img/linkin.png')")
        // a.site(href="javascript:")
        //   img(:src="require('./img/weChat.png')")
        // a.site(href="javascript:")
        //   img(:src="require('./img/weibo.png')")
        // a.site(href="javascript:")
        //   img(:src="require('./img/talk-s.png')")
        // a.site(href="javascript:")
        //   img(:src="require('./img/facebook.png')")
        // a.site(href="javascript:")
        //   img(:src="require('./img/youtube.png')")
        // a.site(href="javascript:")
        //   img(:src="require('./img/twitter.png')")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  private showTalk: boolean = false
}

</script>

<style lang="stylus">

@import "~@/common/css/mixins.styl"

.talk-container
  opacity 1
  position fixed
  z-index 200
  right 20px
  bottom 20px

  width 100%
  max-width 380px
  height 100%
  max-height 600px

  border-radius 6px
  background #fff

  opacity 0
  pointer-events none
  transform scale(.4)

  transform-origin right bottom

  .btn-close
    abs-right 10px
    top 8px

    font-weight 700
    font-size 16px

  &.active
    transition all .24s
    pointer-events auto
    opacity 1
    transform scale(1)

.btn-talk
  opacity 1
  position fixed
  z-index 200
  right 20px
  bottom 20px

  width 60px
  height @width

  border-radius 50%
  background-color #000

  flex-center()

  pointer-events auto
  transform-origin center bottom
  transition all .24s

  img
    width 60%
    height @width

  &.active
    pointer-events none
    opacity 0
    transform scale(.4)

.footer
  position absolute
  top auto
  bottom 0
  display flex
  justify-content center
  padding 79px 0 64px

  width 100%
  height 450px

  background #272727

.footer-content
  display flex
  justify-content space-between
  align-items flex-start
  flex-direction column

  width 1200px

.links
  display flex
  justify-content flex-start
  width 100%

  a
    display block

  .item
    margin-right 30px
    width 180px

  .title
    flex-center()
    justify-content flex-start
    margin-bottom 17px
    font-size 16px
    color #FFFFFF

    img
      margin-right 6px
      width 19px

  .link
    margin-bottom 17px
    display block

    text-decoration none
    font-size 14px
    color #fff

.address
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  width 100%
  padding-top 28px

  border-top 1px solid #505253

  +larger-than(1200px)
    justify-content space-between

.foot-logo
  flex 0 0 auto
  display flex
  align-items center
  margin-bottom 20px

  width 754px

  +larger-than(1200px)
    margin-bottom 0

  img
    flex 0 0 auto
    margin-right 33px

    width 30px

  .info
    font-size 14px
    color #fff

  .home
  .phone
    margin-bottom 6px

.sites
  flex-center()
  align-self flex-end
  flex 0 0 auto

  .site
    margin-left 30px
    width 20px
</style>