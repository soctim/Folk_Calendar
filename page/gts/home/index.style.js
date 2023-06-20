import * as hmUI from '@zos/ui'
import { getText } from '@zos/i18n'
import { getDeviceInfo } from '@zos/device'
import { log as Logger } from '@zos/utils'
import { readFileSync, readdirSync, openSync, O_RDONLY } from '@zos/fs'
import Months from './months.js'
import { Time } from '@zos/sensor'

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo()
const logger = Logger.getLogger('index.style')

// idk why, but there JS getMonth starts with 0...
const months = {
  0: {
    month: 'Январь',
    readable: 'января'
  },
  1: {
    month: 'Февраль',
    readable: 'февраля'
  },
  2: {
    month: 'Март',
    readable: 'марта'
  },
  3: {
    month: 'Апрель',
    readable: 'апреля'
  },
  4: {
    month: 'Май',
    readable: 'мая'
  },
  5: {
    month: 'Июнь',
    readable: 'июня'
  },
  6: { 
    month: 'Июль',
    readable: 'июля'
  },
  7: {
    month: 'Август',
    readable: 'августа'
  },
  8: {
    month: 'Сентябрь',
    readable: 'сентября'
  },
  9: {
    month: 'Октябрь',
    readable: 'октября'
  } ,
  10: {
    month: 'Ноябрь',
    readable: 'ноября'
  },
  11: {
    month: 'Декабрь',
    readable: 'декабря'
  }
}

function getName() {
  let currentDate = new Date(new Time().getTime())
  // JS TIMEZONES NOT WORKING, WAAAAAGHHH!!1
  currentDate.setHours(new Date().getHours() - 5)
  let name = Months[months[currentDate.getMonth()].month][currentDate.getDate()]
    
  return name 
    ? name.replaceAll(',', ',\n') 
    : '!! Day not found !!'
}

function getReadableDay() {
  const currentDate = new Date(new Time().getTime())
  let name = `${currentDate.getDate()} ${months[currentDate.getMonth()].readable}`
  
  return name
}

export const THE_DAY = {
  text: getName(),
  x: 26,
  y: 200,
  w: DEVICE_WIDTH - 24 * 2,
  h: 400,
  color: 0xffffff,
  text_size: 42,
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
}


export const READABLE_DAY = {
  text: getReadableDay(),
  x: 120,
  y: 80,
  w: DEVICE_WIDTH - 42 * 2,
  h: 100,
  color: 0xffffff,
  text_size: 38,
  align_h: hmUI.align.TOP,
  text_style: hmUI.text_style.WRAP,
}
