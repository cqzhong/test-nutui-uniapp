import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
// 获取最近7天的日期
export const getFutureSevenDays = () => {
  // 获取今天的日期
  const today = dayjs()
  // 生成未来7天的日期数组
  const futureDates: any = []
  for (let i = 0; i < 7; i++) {
    const date = today.add(i, 'day')
    if (i === 0) {
      const formattedDate = date.format('M月D日(今天)')
      futureDates.push({ text: formattedDate, value: date.format('YYYY-MM-DD') })
    } else {
      const formattedDate = date.format('M月D日(dddd)')
      futureDates.push({ text: formattedDate, value: date.format('YYYY-MM-DD') })
    }
  }
  // console.log(futureDates)
  return futureDates
}
// 获取最近7天的日期的每个时间段
export const getTimeRange = (date: string) => {
  // 获取当前日期
  const currentDate = dayjs()

  // 创建一个空数组来存储时间段
  const timeRanges: any = []

  // 判断是否是今天
  if (date === currentDate.format('YYYY-MM-DD')) {
    // 循环生成时间段
    for (let i = 0; i < 22; i += 2) {
      // 从早上9点开始，每隔2小时生成一段时间
      const startHour = i + 3 // 3表示早上3点
      if (startHour + 1 <= currentDate.hour()) {
        continue
      }
      const endHour = Math.min(startHour + 2, 24)
      const timeRange = `${startHour}:00-${endHour}:00`
      timeRanges.push(timeRange)
    }
    // console.log(timeRanges)
    return timeRanges
  }

  // 循环生成时间段
  for (let i = 0; i < 22; i += 2) {
    // 从早上9点开始，每隔2小时生成一段时间
    const startHour = i + 3 // 3表示早上3点
    const endHour = Math.min(startHour + 2, 24)
    const timeRange = `${startHour}:00-${endHour}:00`
    timeRanges.push(timeRange)
  }
  // console.log(timeRanges)
  return timeRanges
}

// 获取日期的月份日期 格式: MM-DD
export const getMonthDate = (date: string) => {
  return dayjs(date).format('MM-DD')
}

// 获取日期的时分秒 格式: HH-MM-SS
export const getHourMinuteSecond = (date: string) => {
  return dayjs(date).format('HH:mm:ss')
}
