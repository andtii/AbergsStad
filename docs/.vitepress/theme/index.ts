import DefaultTheme from 'vitepress/theme'
import Entry from './components/Entry.vue'
import './style.css';

export default {
  ...DefaultTheme,
  Layout: Entry,
}
