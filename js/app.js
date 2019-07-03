var app = (function($) {
    /**
     * 加载并执行js
     * @param {js路径} src 
     * @param {回调} cb 
     */
    function loadJs(src, cb) {
        if (!src) return;
        var scripts = './js/' + src
        $.getScript(scripts, function() {
            if(cb) {
                cb()
            }
        })
    }
    /**
     * 路由跳转
     * @param {*路由地址} routerPath 
     */
    function routerTo(routerPath, src, cb) {
        this.rootDom.load(routerPath, function() {
            loadJs(src, cb)
        })
    }
    /**
     * 加载模块
     * @param {*模块路径} htmlPath 
     * @param {*js路径} src 
     * @param {*配置项} opt 
     */
    function loadModule(htmlPath, src, opt) {
        opt = opt || {};
        var target = './views/' + htmlPath;
        if (!this.routerDom) {
            console.warn('无路由挂载点!')
            return
        }
        this.routerDom.load(target, function() {
            loadJs(src)
        })
    }

    /**
     * @class App
     */
    function App() {
        this.rootDom = $('#app')
        this.routerDom = null;
        this.start = function() {
            this.routerTo('./views/index', 'index.js')
        }
        this.setRouterDom = function(dom) {
            this.routerDom = dom;
        }
    }
    App.prototype = {
        loadModule: loadModule,
        routerTo: routerTo
    }
    return new App()
    
})($)

app.start()