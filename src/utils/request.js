// 设置基地址
const BASE_URL = 'https://ugo.botue.com'

function request (option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + option.url,
      data: option.data || {},
      method: option.method || 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }

    })
  })
}
export default request
