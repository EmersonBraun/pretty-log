import PrettyLog from './index'

const hello = 'hello world'
PrettyLog.info('test info')
PrettyLog.info('test info with var', hello)
PrettyLog.success('teste success')
PrettyLog.success('teste success with var', hello)
PrettyLog.warn('teste warn')
PrettyLog.warn('teste warn with var', hello)
PrettyLog.error('teste error')
PrettyLog.error('teste error with var', hello)
PrettyLog.custom('teste custom', null, {
  iconColor: 'white',
  icon: 'bullet',
})
PrettyLog.custom('teste custom with var', hello, {
  iconColor: 'white',
  icon: 'bullet',
})
