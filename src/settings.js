module.exports = {
    title: 'Vue Admin Template',

    /**
     * @type {boolean} true | false
     * @description 是否显示设置右面板
     */
    showSettings: true,

    /**
     * @type {boolean} true | false
     * @description 是否需要tagsView
     */
    tagsView: true,

    /**
     * @type {boolean} true | false
     * @description 是否填充头部
     */
     fixedHeader: false,

    /**
     * @type {boolean} true | false
     * @description 是否在侧边栏显示logo
     */
    sidebarLogo: false,

    /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: 'production'
}
