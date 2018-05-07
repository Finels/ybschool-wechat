const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatTime = date => {      // '2018-02-03 12:30:25'
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const getNowDate = date => {    // '2018-02-03'
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

const getNextDate = () => {    // '2018-02-03'

  var curDate = new Date();
  var preDate = new Date(curDate.getTime() - 24 * 60 * 60 * 1000); //前一天
  var nextDate = new Date(curDate.getTime() + 24 * 60 * 60 * 1000); //后一天

  const year = nextDate.getFullYear()
  const month = nextDate.getMonth() + 1
  const day = nextDate.getDate()

  return [year, month, day].map(formatNumber).join('-')
}


const getHour = () => {    // '2018-02-03'

  var curDate = new Date();


  const hour = curDate.getHours()

  return hour;
}




const navigateToUrl = url => {
  wx.navigateTo({
    url: url,
  })
}

module.exports = {
  formatTime: formatTime,
  getNowDate: getNowDate,
  navigateToUrl: navigateToUrl,
  getNextDate: getNextDate,
  getHour: getHour
}
