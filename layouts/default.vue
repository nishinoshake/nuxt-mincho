<template>
  <div class="app">
    <nuxt/>
  </div>
</template>

<style lang="scss">
/*!
 * Noto Serif CJK JP licensed under the SIL Open Font License
 * https://www.google.com/get/noto/
 */
@font-face {
  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 400;
  src: url(~assets/fonts/noto-serif-sub.woff2) format("woff2"), url(~assets/fonts/noto-serif-sub.woff) format("woff");
}

html {
  font-size: 12px;
  box-sizing: border-box;
  @media only screen and (min-width: 769px) {
    font-size: 16px;
  }
}

body {
  font-family: "Roboto Slab", "Noto Serif", serif;
  font-size: 1rem;
  color: #333;
  letter-spacing: 0.06em;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  min-height: 100vh;
  padding: 6rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  margin-bottom: 4rem;
  font-size: 2rem;
  line-height: 1;
  letter-spacing: 0.12em;
  text-align: center;
  @media only screen and (min-width: 769px) {
    font-size: 2.6rem;
  }
}

.text {
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.4rem;
  line-height: 1.8;
  + .text {
    margin-top: 1.5rem;
  }
}

.button {
  width: 12rem;
  display: block;
  margin: 0 auto;
  padding: 1.2rem;
  font-size: 1.4rem;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #333;
  border-radius: 999em;
  box-shadow: 0.2rem 0.2rem 2rem rgba(#000, 0.1);
  appearance: none;
}
</style>
