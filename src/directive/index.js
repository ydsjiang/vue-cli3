// 自定义指令
let directive = {
  bind: function (el, binding, node) {
    // 被绑定
  },
  inserted: function (el, binding, node) {
    // 被插入
  },
  update: function (el, binding, node) {
    // 更新
  },
  componentUpdated: function (el, binding, node) {
    // 更新完成
  },
  unbind: function (el, binding, node) {
    // 解绑
  }
}
export {
  directive
}