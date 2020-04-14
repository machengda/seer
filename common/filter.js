import { chineseUnit } from './utils'

export default {
  install: function (Vue, options) {
    Vue.filter('chineseUnit', chineseUnit)
  }
};
