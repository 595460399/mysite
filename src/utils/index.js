import Moment from 'moment'

export const initDate = (oldDate, full) => {
  var odate = new Date(oldDate)
  var year = odate.getFullYear()
  var month =
    odate.getMonth() < 9 ? '0' + (odate.getMonth() + 1) : odate.getMonth() + 1
  var date = odate.getDate() < 10 ? '0' + odate.getDate() : odate.getDate()
  if (full === 'year') {
    return year
  } else if (full === 'month') {
    return odate.getMonth() + 1
  } else if (full === 'date') {
    return date
  } else if (full === 'newDate') {
    return year + '年' + month + '月' + date + '日'
  } else {
    return Moment(oldDate).format('YYYY-MM-DD HH:mm:ss')
  }
}

export const goBackTop = () => {
  // chrome
  document.body.scrollTop = 680
  // firefox
  document.documentElement.scrollTop = 680
  // safari
  window.pageYOffset = 680
}
