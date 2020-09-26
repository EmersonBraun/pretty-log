import PrettyLog from './index'

describe('Test Pretty Log', () => {
  test('Test info withouth var', () => {
    const val = PrettyLog.info('test info')
    expect(val).toBe(true)
  })

  test('Test info with var', () => {
    const val = PrettyLog.info('test info', 'hello word')
    expect(val).toBe('hello word')
  })

  test('Test success withouth var', () => {
    const val = PrettyLog.success('test success')
    expect(val).toBe(true)
  })

  test('Test success with var', () => {
    const val = PrettyLog.success('test success', 'hello word')
    expect(val).toBe('hello word')
  })

  test('Test warn withouth var', () => {
    const val = PrettyLog.warn('test warn')
    expect(val).toBe(true)
  })

  test('Test warn with var', () => {
    const val = PrettyLog.warn('test warn', 'hello word')
    expect(val).toBe('hello word')
  })

  test('Test error withouth var', () => {
    const val = PrettyLog.error('test error')
    expect(val).toBe(true)
  })

  test('Test error with var', () => {
    const val = PrettyLog.error('test error', 'hello word')
    expect(val).toBe('hello word')
  })

  test('Test custom withouth var', () => {
    const val = PrettyLog.custom('teste custom', null, {
      iconColor: 'white',
      icon: 'bullet',
    })
    expect(val).toBe(true)
  })

  test('Test custom with var', () => {
    const val = PrettyLog.custom('test custom', 'hello word', {
      iconColor: 'white',
      icon: 'bullet',
    })
    expect(val).toBe('hello word')
  })

  test('Test icon undefined', () => {
    const val = PrettyLog.custom('Test icon', 'hello word', {
      iconColor: 'black',
      icon: undefined,
    })

    expect(val).toBe('hello word')
  })

  test('Test icon underlined', () => {
    const val = PrettyLog.custom('Test icon', 'hello word', {
      iconColor: 'black',
      iconUnderlined: true,
      icon: undefined,
    })

    expect(val).toBe('hello word')
  })
})
