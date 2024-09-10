describe('import.meta.glob', () => {
  test('eager: flase', () => {
    const pageModules = import.meta.glob('~/pages/**/page.ts')
    expect(pageModules).toMatchInlineSnapshot(`
      {
        "/src/pages/HomeView/page.ts": [Function],
      }
    `)
  })
  test('eager: true', () => {
    const pageModules = import.meta.glob('~/pages/HomeView/page.ts', {
      eager: true
    })
    expect(pageModules).toMatchInlineSnapshot(`
      {
        "/src/pages/HomeView/page.ts": {
          "default": {
            "name": "HomeView",
            "path": "/",
          },
        },
      }
    `)
  })
  test('componentModules', () => {
    const componentModules = import.meta.glob('../../pages/HomeView/HomeView.vue')
    expect(componentModules).toMatchInlineSnapshot(`
      {
        "../../pages/HomeView/HomeView.vue": [Function],
      }
    `)
  })
  test('View.vue regex', () => {
    const componentModules = import.meta.glob('~/pages/**/*View.vue')
    expect(componentModules).toMatchInlineSnapshot(`
      {
        "/src/pages/ComponentsView.vue": [Function],
        "/src/pages/HomeView/HomeView.vue": [Function],
        "/src/pages/NuxtView.vue": [Function],
        "/src/pages/VueView.vue": [Function],
      }
    `)
  })
  test('path', () => {
    const pagePath = '/src/pages/ComponentsView.vue'
    const pattern = /page\.(j|t)s/ // 匹配page.js和page.ts
    const path = pagePath.replace('~/pages', '').replace(pattern, '') || '/'
    expect(path).toMatchInlineSnapshot('"/src/pages/ComponentsView.vue"')
  })
})