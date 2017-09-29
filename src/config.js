let config= {
    ip:'',
    pageSize: 8,
    historyPageSize:5,
    loginIp:'http://192.168.1.20:9526',
    socketIP:'http://192.168.1.20:9525',
}
if (process.env.NODE_ENV === 'production'){
    config.ip = ''
}
else if (process.env.NODE_ENV === 'test'){
    config.ip=''
}
module.exports = config
