//全局配置
var baseUrl = 'http://192.168.1.21:9090/feps/';

const CONFIG = {
  page: {
    size: 10,
    total: 0,
  },
  api: {
    login: baseUrl + 'login/login.do', //登录
  },
  ajaxCount: 0,
  success: {
    "1": "加载数据成功",
    '101': ""
  },
  error: {
    '-1': '加载数据失败，请检查网络！',
    '-1010': '姓名不能为空',
  }
}

export default CONFIG;