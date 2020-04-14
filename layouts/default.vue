<template lang="pug">
  .page-container
    header-content
    nuxt
    footer-content
</template>

<script>
import Vue from 'vue'
import HeaderContent from '~/components/Header'
import FooterContent from '~/components/Footer'

export default Vue.extend({
  components: {
    HeaderContent,
    FooterContent
  }
})
</script>

<style lang="stylus">

.page-container
  position relative

  width 100%
  min-width 1400px
  min-height 100vh
  padding-bottom 450px

</style>
