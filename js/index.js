$(function() {
    console.log('index', app)
    app.setRouterDom($('#app_router'))
    app.loadModule('index/inventory_list', 'router/inventory_list.js')
})