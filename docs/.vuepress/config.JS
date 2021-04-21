module.exports = {
    lang: "et",
    title: "Tere!",
    description: "See on mu esimene Vuepressi leht! Lõpuks ometi",
    base: "/learn-docs/",
    dest: "gh-pages",
  
    themeConfig: {
      logo: "![VuePress Logo](/learn-docs/images/mm19kompaktlogo.png)",
      navbar: [
        // esileht
        {
          text: "Kodu",
          link: "/",
        },
        // teine leht teises folderis
        {
          text: "Tunnusgraafika",
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