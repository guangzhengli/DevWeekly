const siteMetadata = {
  title: 'Dev Weekly',
  author: 'Dev Weekly',
  headerTitle: 'Dev Weekly',
  description:
    'Hello and welcome to Developer Weekly! I am excited to share with you the latest updates on trending projects from GitHub and Hacker News',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://devweekly.pages.dev',
  siteRepo: 'https://github.com/guangzhengli/DevWeekly',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'iguangzhengli@gmail.com',
  github: 'https://github.com/guangzhengli/DevWeekly',
  twitter: 'https://twitter.com/DevDevWeekly',
  youtube: 'https://www.youtube.com/@devweekly',
  locale: 'en-US',
  analytics: {
    umamiWebsiteId: 'b95bd6d5-9498-4f23-8ec5-2a0f8383ebd8', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-29CL0ZYY85', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'guangzhengli/DevWeekly',
      repositoryId: 'R_kgDOJrO9Og',
      category: 'Q&A',
      categoryId: 'DIC_kwDOJrO9Os4CW9Rq',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'preferred_color_scheme',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'en',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
