import { reactive } from 'vue'

const themes = {
  0: 'theme-white',
  1: 'theme-black',
  2: 'theme-licorice',
  3: 'theme-claret',
  4: 'theme-sky-blue'
} as const
export type ThemeIndex = keyof typeof themes
export type Theme = (typeof themes)[ThemeIndex]

export default reactive({
  currentTheme: themes[0] as Theme,
  availableThemes: themes,
  setCurrentTheme(theme: ThemeIndex | Theme) {
    if (typeof theme === 'number') this.currentTheme = this.availableThemes[theme]
    else this.currentTheme = theme
  }
})
