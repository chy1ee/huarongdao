import './render'; 
import Menu from './runtime/menu';
import Sanguo from './sanguo'
const ctx = canvas.getContext('2d');

export default class Main {
  menu = new Menu()

  constructor() {
    this.start()
  }

  start() {
    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
    this.aniId = requestAnimationFrame(this.loop.bind(this));
  }

  touchEventHandler(e) {
    e.preventDefault()
 
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    //获取结束时按钮面板信息
    let area = this.menu.btnArea_start
    //按钮事件监听
    if (x >= area.startX  && x <= area.endX  && y >= area.startY  && y <= area.endY)
    {
      canvas.removeEventListener(
        'touchstart',
        this.touchHandler
      )
      cancelAnimationFrame(this.aniId)
      new Sanguo().start(ctx)
    }
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.menu.renderMenu(ctx);
  }

  loop() {
    this.render(); // 渲染游戏画面

    // 请求下一帧动画
    this.aniId = requestAnimationFrame(this.loop.bind(this));
  }
}