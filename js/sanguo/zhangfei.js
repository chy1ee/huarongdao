import Renwu from './renwu'

export default class Zhangfei extends Renwu {
  name = '张飞'
  constructor(x, y) {
    super('images/zhangfei.png', 1, 2, x, y)
  }
}