// 抛出message
export function postMessage(data) {
  const { opener } = window
  if (opener) {
    opener.postMessage(
      JSON.stringify({
        type: 'postMessage',
        data: data || {}
      })
    )
  }
}

// 关闭窗口
export function closeOpener() {
  const { opener } = window
  if (opener) {
    window.close()
  }
}

export function getUUID(length = 18) {
  const charts = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let uuid = []
  let i
  const radix = charts.length
  for (i = 0; i < length; i++) uuid[i] = charts[0 | (Math.random() * radix)]
  return uuid.join('')
}