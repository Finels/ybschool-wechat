const showToast = data => {    // '2018-02-03'
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return showToast
}

module.exports = {
  formatTime: formatTime,
  getNowDate: getNowDate,
  navigateToUrl: navigateToUrl
}