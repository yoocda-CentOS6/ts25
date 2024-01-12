import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  titleTemplate: ':title だぜ兄弟！| CCYC',
  description: "A VitePress Site",
  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/'
    },
    en: {
      label: 'English',
      lang: 'en-US',
//      link: '/en-US/'
    }
  },
  lang: 'ja-JP',
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico' }],
    ['link',{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link',{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link',{ href: 'https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap', rel: 'stylesheet' }],
    ['script',{ async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9BZ3PCBW1H' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9BZ3PCBW1H');`
    ]
  ],
  themeConfig: {
    siteTitle: 'カウンティング・カーズ YouTubeリンク集',
    search: {provider: 'local'},
    aside: 'left',
    outline: {level: [2,2], label: 'エピソード一覧'},
    footer: {message: 'Released under the MIT License.'},
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yoocda-CentOS6/ts25' }
    ]
  }
})


