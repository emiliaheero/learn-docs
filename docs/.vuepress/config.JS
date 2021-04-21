module.exports = {
    lang: "et",
    title: "Te",
    description: "See on mu esimene Vuepressi leht! Tegelt teine",
    base: "/learn-docs/",
    dest: "gh-pages",
  
    themeConfig: {
      logo: "![VuePress Logo](/learn-docs/images/kass.png)",
      navbar: [
        // esileht
        {
          text: "Kodu",
          link: "/",
        },
        // teine leht teises folderis
        {
          text: "tnnusgraafika",
          link: "/tunnusgraafika/",
        },
        // kolmas leht kolmandas folderis jne
        {
          text: "Prototüüpimine",
          link: "/prototyypimine/",
        },

      ],
      sidebar: "auto",
    },
  };