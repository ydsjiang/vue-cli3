export default {
  //TopNav
  topNav: {
    systemName: 'PLM-风险管理系统',
    languageSelection: '请选择语言',
    strExit: '退出'
  },
  //End TopNav

  //nav
  nav: {
    index: '首页',
    riskRepository: '风险库',
    mainDoc: '主文档',
    report: '报表',

    inputSearchContents: '请输入搜索内容'
  },
  common : { //公共部分
    selectText: "请选择",
    selectDate: "选择日期",
    confirm: "确定",
    cancle: "取消"
  },
  report : {
    rightTip: '请先选择/创建数据',
    leftTitle: '公共清单报表',
    inputPlaceholder: '输入文件名',
    hadleRightMenu1: "添加文件夹",
    hadleRightMenu2: "添加清单",
    hadleRightMenu3: "修改名称",
    hadleRightMenu4: "上移",
    hadleRightMenu5: "下移",
    hadleRightMenu6: "删除文件夹",
    hadleRightMenu7: "编辑清单",
    hadleRightMenu8: "删除清单",
    export: "Export",
    listHeadPart1: "添加",
    listHeadPart2: "编辑",
    listHeadPart3: "清单",
    listHead2: "筛选条件设置:",
    listHead3: "统计条目设置:",
    listHead4: "所有条目",
    listHead5: "已选条目",
    listName: "清单名称：",
    inputPlaceholder2: "输入清单名称",
    listErrorText1: "清单名称不能为空",
    listErrorText2: "请完整填写筛选条件",
    listErrorText3: "请完整填写筛选条件"
  },
  //通用
  cmm: {
    lastCreateRow: '新建行',
    lastCreate: '新建',
    update: '更新',
    delete: '删除',
    save: '保存',
    ok: '确定',
    cancel: '取消',
    filter: '筛选',
    transfer: '转派',
    submit: '提交',
    review: '驳回',

    slcAll: '全选',
    slcAllReverse: '反选',

    reset: '重置',

    success: '成功！',
    faild: '失败！',
    tips: '提示',

    loadingTxt: 'Loading...',
    noData: '无数据',

    operation: '操作',

    fmMsgRequired: '必填项',

    delConfirm: '确定删除吗？',
    saveFaild: '保存失败',

    yesTxt: '是',
    noTxt: '否',

    plhdAutoCreateInSys: '系统自动创建'
  },
  //End 通用

  //风险库
  cmmConfirm: {
    title: '删除确认',
    delContent: '确定要删除吗？',
    cancel: '取消',
    ok: '确定',
  },

  repository: {
    tabBasicInfo: '主文档基本信息',
    tabRepositoryTeam: '项目风险管理团队',
    tabSecurity: '安全特征判定',
    tabRiskItem: '风险管理总表',
    tabVersion: '版本记录',
    documentReport: '报告信息',
    tabProductInfo: '产品信息',
    tabRistList: '风险管理表',
    tabSummarize: '风险管理总结',
    tabProcessLog: '流程日志',
    //----------
    lblRptType: '风险库类型',
    lblRptProductLine: '产品线',
    lblRptProductName: '产品名称',
    lblRptName: '风险库名称',
    lblRptAdmin: '风险库管理员',
    lblRptVersion: '库版本信息',
    //----
    lblMainType: '主型号',
    lblMainDoc: '主文档名称',
    lblProductCode: '项目代号',
    lblCraft: '工艺代号',
    lblStatuteArea: '法规区域',
    //-----
    //-----
    lblMainCode: '编号',
    lblMainClassify: '分类',
    lblMainSequence: '事件序列',
    lblMainArea: '适用区域',
    //-----
    lblCreateBy: '创建人',
    lblCreateTime: '创建时间',
    lblRptAddVersion: '建立库版本',

    lblIVD: '通用医疗器械',
    lblMDD: '体外诊断医疗器械',

    msgCreateFaild: '创建失败！',
    msgGetDataFaild: '获取数据失败！',
    msgDelRowDataFaild: '删除失败！',

    msgExitCopyRow: '存在复制的行，不能完成此操作！',

    //------------
    tabTitleRptTeam: '主文档平台团队',
    tabTitleRiskReviewTeam: '主文档管理团队',

    rptTeamLblNum: '序号',
    rptTeamLblDuty: '职责',
    rptTeamLblPersion: '责任人',
    rptTeamLblRemark: '备注',

    reviewTeamLblNum: '序号',
    reviewTeamLblDuty: '职责',
    reviewTeamLblPersion: '责任人',
    reviewTeamLblRemark: '备注',

    //-----------

    revision: '修订行',
    preReview: '启动评审',
    reViewStart: '启动评审',
    check: '校验',

    lblIds: '编号',
    lblVersion: '版本',
    lblStatus: '状态',
    lblLanguages: '语言',
    lblSafetyCharacteristics: '安全特征判定', //'可能影响安全性的特征',
    lblYesOrNo: '是否影响',
    lblHazardsDescription: '可能影响安全性的特征', //'危害描述',
    lblSource: '危险（源）',
    lblProjectId: '对应的项目编号',

    msgRevisionFaild: '修订失败',
    msgValidate: '校验',
    reviewStartTitle: '启动评审',
    editStartTitle: '启动编辑',

    lblReviewStartTitle: '流程主题',
    lblRSTIsSkip: '跳过预审',

    msgRSTTitle: '必填项',
    msgRSTIsSkip: '必填项',

    //风险项
    btnCopeRowTxt: '复制行',
    btnDelRowTxt: '删除行',
    btnRevisionTxt: '修订行',

    btnCreateRiskItemTxt: '新建风险项',
    btnExportRiskItemTxt: '导入风险项',

    btnEditStartTxt: '启动编辑',
    btnPreReviewStartTxt: '启动评审',
    btnReviewStartTxt: '启动评审',

    filterHeaderFilterBtnTxt: '筛选',
    filterHeaderResetBtnTxt: '重置',

    lblRiskItemNo: '库中风险项编号',
    lblDocRistItemNo: '主文档中风险项编号',
    lblDocRegion: '',
    // lblVersion:'版本',
    lblState: '状态',
    lblLanguage: '语言',
    lblHazard: '危险（源）',
    lblSequenceOfEvents: '事件序列',
    lblHarm: '伤害',
    lblBeforeMeasureS: 'S(前)', //风险控制前S
    lblBeforeMeasureO: 'O(前)', //'风险控制前O',
    lblBeforeMeasureD: 'D(前)', //'风险控制前D',
    lblBeforeMeasureEvaluation: 'SOD评估说明(前)',
    lblCategoryRelatedData: '控制措施',
    lblAfterMeasureS: 'S(后)', //'风险控制后S',
    lblAfterMeasureO: 'O(后)', //'风险控制后O',
    lblAfterMeasureD: 'D(后)', //'风险控制后D',
    lblAfterMeasureEvaluation: 'SOD评估说明(后)',

    //可能不显示的字段
    lblHistoryRiskItemNo: '历史风险项编号',
    lblProductSeries: '产品系列',
    lblPrimaryFunction: '一级功能 ',
    lblSecondaryFunction: '二级功能 ',
    lblThreeLevelfunction: '三级功能',
    lblSourceType: '来源类型',
    lblSourceNumber: '来源编号',
    lblRiskItemType: '风险项分类',
    lblCategory: '专业方向分类',
    lblReasonForFailure: '失效原因',
    lblFailureMode: '失效模式',
    lblEndEffect: '结束效应',
    lblSupplementaryExplanation: '补充说明',
    lblHazardousSituation: '危险情况',
    lblBeforeMeasureSeverity: '严重度控制措施(前)',
    lblBeforeMeasureProbability: '发生概率(前)',
    lblBeforeMeasureDetectability: '可探测度(前)',
    lblBeforeMeasureRiskLevel: '风险等级(前)', //'(控制措施前)风险等级',
    lblControlMeasures: '控制措施',
    lblAfterMeasureSeverity: '严重度(后)',
    lblAfterMeasureDetectability: '可探测度(后)',
    lblAfterMeasureRiskLevel: '风险等级(后）', //'(控制措施后)风险等级',
    lblNewRisks: '控制措施引入的新风险',
    lblIncomeGreaterRisk: '收益是否大于风险',

    lblImportRistItemTitle: '导入风险项',
    lblFile: '选择导入文档',
    lblBlankTpl: '空文档下载',
    downloadByClick: '点击下载',

    lblRegion: '区域',
    lblArchivePLM: '是否归档PLM',
    lblWhetherToSubmit: '是否递交',
    lblWhetherToReview: '是否应审',
    lblProductNumber: '产品型号',
    lblTraceBack: '追溯',
    lblVerification: '验证',
    //静态字段部分
    STATICDATACN: '中文',
    STATICDATAEN: '英文',

    //End 静态字段部分

    isMsgPlsTblRowsSlc: '请检查是否选中表格中的行',
    lblCreateVersion: '建立版本',
    lblVersionNum: '版本号',
    lblDesc: '版本说明',
    lblCreateName: '创建人',
    lblTakeEffect: '创建时间',

    lblRiskLibrayName: '名称',
    lblProductLine: '产线',
    lblDetailTopCreateBy: '创建人',
    lblDetailTopCreateTime: '创建时间',


    lblEpProductSeries: '编码',
    lblEpStatus: '状态',

    msgUsersRequired: '必填项',

    lblTransferTo: '转派给'

  },
  productInput: {
    lbltitle: '第一章 产品概述',
    lbl1: '产品名称和型号',
    lbl2: '预期用途',
    lbl3: '组成',
    lbl4: '可选附件',
    lbl5: '可支持外设',
    lbl6: '环境和使用条件',
    lbl7: '预期使用寿命',
    lbl8: '基本性能',
    lbl9: '软件安全分级',
    lbl10: '其他',
    lblremarks: '产品的具体功能和构成请参考《【设计输入】》。'
  },
  summarize: {
    lblFourTitle: '第四章 风险管理总表',
    lblFiveTitle: '第五章 生产后信息',
    lblSixTitle: '第六章 风险控制的完整性评价',
    lblSevenTitle: '第七章 综合剩余风险的可接受性评价',
    lblTableTitle: '表5 生产后风险回顾'
  },
  //End 风险库
  //风险库编辑状态
  repositoryEp: {
    msgParamsException1: '请检测参数workItemOid是否存在！',
  }
  //End 风险库编辑状态
}