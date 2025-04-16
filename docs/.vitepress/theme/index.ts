import DefaultTheme from 'vitepress/theme'
import TopMenu from './components/TopMenu.vue'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  Layout: (props, ctx) => {
    return h('div', [
      h(TopMenu),
    //   h(DefaultTheme.Layout, {
    //     ...props,
    //     // Remove nav slot to hide default header
    //   }, ctx?.slots)
    ])
  },
  enhanceApp({ app }) {
    app.component('TopMenu', TopMenu)
  }
}
