import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './.vitepress/dist',
  title: "Home",
  titleTemplate: 'エピソード :title だぜ兄弟！| CKEC',
  description: "A VitePress Site",
  lang: 'ja-JP',
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico' }],
    ['link',{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link',{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link',{ href: 'https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap', rel: 'stylesheet' }],
    ['script',{ async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
    ]
  ],
  themeConfig: {

    siteTitle: 'CKエピソードコレクション',

    aside: true,

    outline: { level: 'deep', label: 'チャプター'},

    footer: {
      message: 'Released under the MIT License.'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: 'エピソード番号',
        items: [
          { text: '7', link: '/episodes/007' },
          { text: '8', link: '/episodes/008' },
          { text: '9', link: '/episodes/009' },
          { text: '10', link: '/episodes/010' },
          { text: '11', link: '/episodes/011' },
          { text: '14', link: '/episodes/014' },
          { text: '17', link: '/episodes/017' },
          { text: '21', link: '/episodes/021' },
          { text: '22', link: '/episodes/022' },
          { text: '40', link: '/episodes/040' },
          { text: '41', link: '/episodes/041' },
          { text: '68', link: '/episodes/068' },
          { text: '69', link: '/episodes/069' },
          { text: '70', link: '/episodes/070' },
          { text: '73', link: '/episodes/073' },
          { text: '74', link: '/episodes/074' },
          { text: '75', link: '/episodes/075' },
          { text: '76', link: '/episodes/076' },
          { text: '78', link: '/episodes/078' },
          { text: '79', link: '/episodes/079' },
          { text: '80', link: '/episodes/080' },
          { text: '81', link: '/episodes/081' }
        ]
      }
    ]

    /*
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
    */
  }
})


