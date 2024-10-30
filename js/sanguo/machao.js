import Renwu from './renwu'

export default class Machao extends Renwu {
  name = '马超'
  constructor(x, y) {
    super('images/machao.png', 1, 2, x, y)
  }
}