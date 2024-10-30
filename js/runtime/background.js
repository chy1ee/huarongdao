import Sprite from '../base/sprite';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../render';

const BACKGROUND_IMAGE_SRC = 'images/bg.jpg';

export default class BackGround extends Sprite {
  constructor() {
    super(BACKGROUND_IMAGE_SRC, SCREEN_WIDTH, SCREEN_HEIGHT);
    this.top = 0;
  }
}