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
})