import * as hmUI from '@zos/ui'
import { log as Logger } from '@zos/utils'
import { THE_DAY, READABLE_DAY } from './index.style'

const logger = Logger.getLogger('helloworld')

Page({
  build() {
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...READABLE_DAY,
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...THE_DAY,
    })
  },

  onInit() {},

  onDestroy() {},
})