import Renwu from './renwu'

export default class Caocao extends Renwu {
  name = '曹操'
  constructor(x, y) {
    super('images/caocao.png', 2, 2, x, y)
  }
}