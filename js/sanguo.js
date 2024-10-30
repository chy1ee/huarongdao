import DataBus from './databus'
import BackGround from './runtime/background'
import Caocao from './sanguo/caocao'
import Guanyu from './sanguo/guanyu'
import Machao from './sanguo/machao'
import Zhaoyun from './sanguo/zhaoyun'
import Huangzhong from './sanguo/huangzhong'
import Zhangfei from './sanguo/zhangfei'
import Zu from './sanguo/zu'

GameGlobal.databus = new DataBus();

export default class Sanguo {
  bg = new BackGround()

  constructor() {
  }

  start(ctx) {
    this.ctx = ctx
    this.init()
    cancelAnimationFrame(this.aniId);
    this.aniId = requestAnimationFrame(this.loop.bind(this));
  }

  init() {
    GameGlobal.databus.reset()
    GameGlobal.databus.renwus.push(new Machao(0, 0))
    GameGlobal.databus.renwus.push(new Caocao(1, 0))
    GameGlobal.databus.renwus.push(new Zhaoyun(3, 0))
    GameGlobal.databus.renwus.push(new Huangzhong(0, 2))
    GameGlobal.databus.renwus.push(new Guanyu(1, 2))
    GameGlobal.databus.renwus.push(new Zhangfei(3, 2))
    GameGlobal.databus.renwus.push(new Zu(1, 3))
    GameGlobal.databus.renwus.push(new Zu(2, 3))
    GameGlobal.databus.renwus.push(new Zu(0, 4))
    GameGlobal.databus.renwus.push(new Zu(3, 4))
  }

  render() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.bg.render(this.ctx)
    GameGlobal.databus.renwus.forEach((item) => item.render(this.ctx))
  }

  update() {
    GameGlobal.databus.renwus.forEach((item) => item.update())
  }

  loop() {
    this.update(); // 更新游戏逻辑
    this.render(); // 渲染游戏画面

    // 请求下一帧动画
    this.aniId = requestAnimationFrame(this.loop.bind(this));
  }
}