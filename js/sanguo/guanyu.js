import Renwu from './renwu'

export default class Guanyu extends Renwu {
  name = '关羽'
  constructor(x, y) {
    super('images/guanyu.png', 2, 1, x, y)
  }
}