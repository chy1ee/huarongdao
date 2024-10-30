import Sprite from '../base/sprite';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../render';

export const OFFSET_X = 12
export const OFFSET_Y = 150
export const UNIT = (Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) - 2 * OFFSET_X) / 4
export const WORK_AREA = {
  x1: OFFSET_X,
  y1: OFFSET_Y,
  x2: OFFSET_X + 4 * UNIT,
  y2: OFFSET_Y + 5 * UNIT
}

/**
 * 游戏基础的精灵类
 */
export default class Renwu extends Sprite {
  name = 'noname'
  selected = false
  visible = true; // 是否可见
  isActive = true; // 是否可碰撞

  x1 = 0
  y1 = 0

  x2 = 0
  y2 = 0

  constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
    super(imgSrc);

    this.x1 = x
    this.y1 = y
    this.x2 = width
    this.y2 = height

    for (let i=0;i<width;i++) {
      for (let j=0;j<height;j++) {
        GameGlobal.databus.grids[j + this.y1][i + this.x1] = 1
      }
    }

    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
  }

  update() {
    this.width = this.x2 * UNIT;
    this.height = this.y2 * UNIT;

    this.x = this.x1 * UNIT + OFFSET_X;
    this.y = this.y1 * UNIT + OFFSET_Y;
  }

  render(ctx) {
    super.render(ctx)
    if (!this.visible) return;
    if (this.selected) {
      const oldStyle = ctx.strokeStyle
      ctx.strokeStyle = 'red'
      ctx.strokeRect(this.x + 6, this.y + 6, this.width - 12, this.height - 12)
      ctx.strokeStyle = oldStyle
    }
  }

  touchEventHandler(e) {
    e.preventDefault()
    
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    if (this.selected) {
      if (x > WORK_AREA.x1  && x < WORK_AREA.x2  && y > WORK_AREA.y1  && y < WORK_AREA.y2) {
        const b = this.positionToBlock(x, y)
        if(GameGlobal.databus.grids[b.y][b.x] === 0) this.moveTo(b)
      }
    } else if (x >= this.x  && x <= this.x + this.width  && y >= this.y  && y <= this.y + this.height) {
      GameGlobal.databus.renwus.forEach((item) => {
        if (item != this) item.selected = false
      })
      this.selected = !this.selected
    }
  }

  moveTo(b) {
    const d = this.direct(b)
    if (d == null) return
    this[d]()
  }

  top() {
    console.log('top')
  }


  down() {
    console.log('down')
    // this.y1++
  }

  left() {
    console.log('left')
  }

  right() {
    console.log('right')
  }

  direct(b) {
    if (b.y >= this.y1 && b.y <= this.y1 + this.y2 -1) {
      if (b.x == this.x1 - 1) return 'left'
      else if (b.x == this.x1 + this.x2) return 'right'
    } else if (b.x >= this.x1 && b.x <= this.x1 + this.x2 -1) {
      if (b.y == this.y1 - 1) return 'up'
      else if (b.y == this.y1 + this.y2) return 'down'
    }
    return null
  }

  positionToBlock(x, y) {
    return { x: Math.floor((x - OFFSET_X) / UNIT), y: Math.floor((y - OFFSET_Y) / UNIT) }
  }
}
