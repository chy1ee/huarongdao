import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../render';

const menupic = wx.createImage();
menupic.src = 'images/menu.jpg';

export default class Menu {
  constructor() {
    /* *
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea_start = {
      startX: SCREEN_WIDTH / 2 - 100,
      startY: SCREEN_HEIGHT - 90,
      endX: SCREEN_WIDTH / 2 + 100,
      endY: SCREEN_HEIGHT - 5
    }
  }

  renderMenu(ctx) //k开始菜单
  {
    ctx.drawImage(menupic, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
  }

}