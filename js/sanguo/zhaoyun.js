import Renwu from './renwu'

export default class Zhaoyun extends Renwu {
  name = '赵云'
  constructor(x, y) {
    super('images/zhaoyun.png', 1, 2, x, y)
  }
}