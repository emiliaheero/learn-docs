export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Õpidokud",
  "lang": "et",
  "frontmatter": {
    "lang": "et",
    "title": "Õpidokud",
    "description": "Õpilaste tööde dokumentatsioon",
    "home": true
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1618999212000,
    "contributors": [
      {
        "name": "emiliaheero",
        "email": "emilia.heero@gmail.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
