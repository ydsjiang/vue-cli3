export default {
  // 格式化时间(秒)
  formatTime(time) {
    return {
      hour: parseInt(time / 3600),
      minute: parseInt(time / 60) % 60,
      sec: time % 60
    }
  },
}
