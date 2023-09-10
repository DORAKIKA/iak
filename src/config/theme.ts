// 预定义的主题选项
// 可在variables里面定义css变量，或在css中[data-theme=xxx]{}形式进行定义
export const themeOptions: Record<string, any> = {
  light: {
    label: '空日白',
    variables: {
      '--font-color': 'rgba(255,255,255,0.8)',
      '--color-deep-op': 'rgba(255,255,255,0.8)',
      '--color-op': 'rgba(255,255,255,0.2)',
      '--color-deep-text': 'rgba(0,0,0,0.8)',
      '--color-op-text': 'rgba(255,255,255,0.8)',
      '--kk-texture-color': 'rgba(255,255,255,0.2)',

      /* card */
      '--bg': '#fcfcfd',
      '--card-tab-bg': '#ecedef',
      '--card-text-color': '#23272b',
      '--card-sub-text-color': '#9ba0a5',
      '--card-bg': '#ffffff',
      '--card-inner-bg': '#f5f7f9',
      '--card-active': 'var(--main-color)',
      '--card-active-text': '#ffffff',
      '--card-shadow-color': 'rgba(0,0,0,0.1)',
      '--card-shadow': '1px 2px 8px var(--card-shadow-color)',
      '--card-outline': '0 0 0 3px var(--main-color)',
      '--card-border-color': '#eef1ef',
      '--card-border': '3px solid var(--card-border-color)',
      '--base-radius': '16px',
    }
  },
  dark: {
    label: '黑耀夜',
    variables: {
      '--font-color': 'rgba(0,0,0,0.8)',
      '--kk-texture-color': 'rgba(0,0,0,0.2)',
      '--color-op': 'rgba(0,0,0,0.2)',
      '--color-deep-op': 'rgba(0,0,0,0.8)',
      '--color-deep-text': 'rgba(255,255,255,0.8)',
      '--color-op-text': 'rgba(0,0,0,0.8)',

      /* card */
      '--bg': '#151716',
      '--card-tab-bg': '#2b2b2b',
      '--card-text-color': '#ffffff',
      '--card-sub-text-color': '#9ba0a5',
      '--card-bg': '#1c1e1d',
      '--card-inner-bg': '#2a2a2a',
      '--card-active': 'var(--main-color)',
      '--card-active-text': '#ffffff',
      '--card-shadow-color': 'rgba(0,0,0,0.1)',
      '--card-shadow': '1px 2px 8px var(--card-shadow-color)',
      '--card-outline': '0 0 0 4px var(--main-color)',
      '--card-border-color': '#212322',
    }
  },
  // gray: {},
  // orange: {},
  purple: {}
}

export const brightnessOptions = [0.6, 0.8, 1]

export const activeTheme = 'dark'
export default {
  themeMode: 'dark',
  brightness: 1,
  headerFixed: true
}