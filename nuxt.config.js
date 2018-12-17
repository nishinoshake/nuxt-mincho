module.exports = {
  mode: 'universal',
  head: {
    title: 'きれいな明朝とNuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'きれいな明朝とNuxt' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:300'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  },
  loading: false
}
