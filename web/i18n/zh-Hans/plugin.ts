const translation = {
  category: {
    all: '全部',
    models: '模型',
    tools: '工具',
    agents: 'Agent 策略',
    extensions: '扩展',
    bundles: '插件集',
  },
  categorySingle: {
    model: '模型',
    tool: '工具',
    agent: 'Agent 策略',
    extension: '扩展',
    bundle: '插件集',
  },
  search: '搜索',
  allCategories: '所有类别',
  searchCategories: '搜索类别',
  searchPlugins: '搜索插件',
  from: '来自',
  findMoreInMarketplace: '在 Marketplace 中查找更多',
  searchInMarketplace: '在 Marketplace 中搜索',
  fromMarketplace: '来自市场',
  endpointsEnabled: '{{num}} 组端点已启用',
  searchTools: '搜索工具...',
  installPlugin: '安装插件',
  installFrom: '安装源',
  list: {
    noInstalled: '无已安装的插件',
    notFound: '未找到插件',
    source: {
      marketplace: '从 Marketplace 安装',
      github: '从 GitHub 安装',
      local: '本地插件',
    },
  },
  source: {
    marketplace: 'Marketplace',
    github: 'GitHub',
    local: '本地插件',
  },
  detailPanel: {
    switchVersion: '切换版本',
    categoryTip: {
      marketplace: '从 Marketplace 安装',
      github: '从 Github 安装',
      local: '本地插件',
      debugging: '调试插件',
    },
    operation: {
      install: '安装',
      detail: '详情',
      update: '更新',
      info: '插件信息',
      checkUpdate: '检查更新',
      viewDetail: '查看详情',
      remove: '移除',
    },
    actionNum: '包含 {{num}} 个 {{action}}',
    strategyNum: '包含 {{num}} 个 {{strategy}}',
    endpoints: 'API 端点',
    endpointsTip: '此插件通过 API 端点提供特定功能，您可以为当前工作区配置多个 API 端点集。',
    endpointsDocLink: '查看文档',
    endpointsEmpty: '点击 \'+\' 按钮添加 API 端点',
    endpointDisableTip: '停用 API 端点',
    endpointDisableContent: '是否要停用 {{name}} 的 API 端点 ？',
    endpointDeleteTip: '移除 API 端点',
    endpointDeleteContent: '是否要移除 {{name}} ？',
    endpointModalTitle: '设置 API 端点',
    endpointModalDesc: '完成配置后可使用插件 API 端点提供的功能',
    serviceOk: '服务正常',
    disabled: '停用',
    modelNum: '{{num}} 模型已包含',
    toolSelector: {
      title: '添加工具',
      toolLabel: '工具',
      descriptionLabel: '工具描述',
      descriptionPlaceholder: '简要描述工具目的，例如，获取特定位置的温度。',
      placeholder: '选择工具',
      settings: '用户设置',
      params: '推理配置',
      paramsTip1: '控制 LLM 推理参数。',
      paramsTip2: '当“自动”关闭时，使用默认值。',
      auto: '自动',
      empty: '点击 "+" 按钮添加工具。您可以添加多个工具。',
      uninstalledTitle: '工具未安装',
      uninstalledContent: '此插件安装自 本地 / GitHub 仓库，请安装后使用。',
      uninstalledLink: '在插件中管理',
      unsupportedTitle: '不支持的 Action',
      unsupportedContent: '已安装的插件版本不提供这个 action。',
      unsupportedContent2: '点击切换版本',
    },
    configureApp: '应用设置',
    configureModel: '模型设置',
    configureTool: '工具设置',
  },
  install: '{{num}} 次安装',
  installAction: '安装',
  debugInfo: {
    title: '调试',
    viewDocs: '查看文档',
  },
  privilege: {
    title: '插件偏好',
    whoCanInstall: '谁可以安装和管理插件？',
    whoCanDebug: '谁可以调试插件？',
    everyone: '所有人',
    admins: '管理员',
    noone: '无人',
  },
  pluginInfoModal: {
    title: '插件信息',
    repository: '仓库',
    release: '发布版本',
    packageName: '包',
  },
  action: {
    checkForUpdates: '检查更新',
    pluginInfo: '插件信息',
    delete: '移除插件',
    deleteContentLeft: '是否要移除 ',
    deleteContentRight: ' 插件?',
    usedInApps: '此插件正在 {{num}} 个应用中使用。',
  },
  installModal: {
    installPlugin: '安装插件',
    installComplete: '安装完成',
    installedSuccessfully: '安装成功',
    installedSuccessfullyDesc: '插件已成功安装。',
    uploadFailed: '上传失败',
    installFailed: '安装失败',
    installFailedDesc: '插件安装失败。',
    install: '安装',
    installing: '安装中...',
    uploadingPackage: '上传 {{packageName}} 中...',
    readyToInstall: '即将安装以下插件',
    readyToInstallPackage: '即将安装以下插件',
    readyToInstallPackages: '即将安装以下 {{num}} 个插件',
    fromTrustSource: '请保证仅从<trustSource>可信源</trustSource>安装插件。',
    dropPluginToInstall: '拖放插件包到此处安装',
    labels: {
      repository: '仓库',
      version: '版本',
      package: '包',
    },
    close: '关闭',
    cancel: '取消',
    back: '返回',
    next: '下一步',
    pluginLoadError: '插件加载错误',
    pluginLoadErrorDesc: '此插件将不会被安装',
  },
  installFromGitHub: {
    installPlugin: '从 GitHub 安装插件',
    updatePlugin: '更新来自 GitHub 的插件',
    installedSuccessfully: '安装成功',
    installFailed: '安装失败',
    uploadFailed: '上传失败',
    gitHubRepo: 'GitHub 仓库',
    selectVersion: '选择版本',
    selectVersionPlaceholder: '请选择一个版本',
    installNote: '请确保只从可信源安装插件。',
    selectPackage: '选择包',
    selectPackagePlaceholder: '请选择一个包',
  },
  upgrade: {
    title: '安装插件',
    successfulTitle: '安装成功',
    description: '即将安装以下插件',
    usedInApps: '在 {{num}} 个应用中使用',
    upgrade: '安装',
    upgrading: '安装中...',
    close: '关闭',
  },
  error: {
    inValidGitHubUrl: '无效的 GitHub URL。请输入格式为 https://github.com/owner/repo 的有效 URL',
    fetchReleasesError: '无法获取发布版本。请稍后再试。',
    noReleasesFound: '未找到发布版本。请检查 GitHub 仓库或输入的 URL。',
  },
  marketplace: {
    empower: '助力您的 AI 开发',
    discover: '探索',
    and: '和',
    difyMarketplace: 'Dify 市场',
    moreFrom: '更多来自市场',
    noPluginFound: '未找到插件',
    pluginsResult: '{{num}} 个插件结果',
    sortBy: '排序方式',
    sortOption: {
      mostPopular: '最受欢迎',
      recentlyUpdated: '最近更新',
      newlyReleased: '最新发布',
      firstReleased: '首次发布',
    },
    viewMore: '查看更多',
    verifiedTip: '此插件由 Dify 认证',
    partnerTip: '此插件由 Dify 合作伙伴认证',
  },
  task: {
    installing: '{{installingLength}} 个插件安装中，0 已完成',
    installingWithSuccess: '{{installingLength}} 个插件安装中，{{successLength}} 安装成功',
    installingWithError: '{{installingLength}} 个插件安装中，{{successLength}} 安装成功，{{errorLength}} 安装失败',
    installError: '{{errorLength}} 个插件安装失败，点击查看',
    installedError: '{{errorLength}} 个插件安装失败',
    clearAll: '清除所有',
  },
  submitPlugin: '上传插件',
}

export default translation
