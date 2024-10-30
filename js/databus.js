const GRID_COLS = 4
const GRID_ROWS = 5

export default class DataBus {
  renwus = []
  grids = Array.from(Array(GRID_ROWS), () => new Array(GRID_COLS));

  reset() {
    this.renwus = []
    for (let i=0;i<GRID_COLS;i++) {
     for (let j=0;j<GRID_ROWS;j++)
      this.grids[j][i] = 0
    }
  }
}