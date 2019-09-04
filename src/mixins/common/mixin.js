  export default {
    methods: {
      formatDate(dateTime, fmt = 'YYYY年M月DD日 HH:mm:ss') {
        if (!dateTime) {
          return ''
        }
        dateTime = moment(dateTime).format(fmt)
        return dateTime
      }
    }
  }