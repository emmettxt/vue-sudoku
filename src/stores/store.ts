import { reactive } from 'vue'
import { getBoard, checkSolution } from '../Services/sudokuService'

export interface cell {
  isStatic: boolean
  value: PossibleCellValues
}
export const PossibleCellValuesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const
export type PossibleCellValues = (typeof PossibleCellValuesArray)[number]

export const PossibleCoOrd = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const
export type PossibleRow = (typeof PossibleCoOrd)[number]
export type PossibleColumn = PossibleRow

const blankCell: cell = { isStatic: true, value: 0 }
const blankBoard = [...Array(9)].map(() => [...Array(9)].map(() => blankCell))
const pencilCellBlank = PossibleCoOrd.map(() => false)
const blanckPencilBoard = [...Array(9)].map(() => [...Array(9)].map(() => [...pencilCellBlank]))

export const store = reactive({
  won: false,
  SelectedValue: 0 as PossibleCellValues,
  setSelectedValue(value: PossibleCellValues) {
    this.SelectedValue = value
  },
  setWon(won: boolean) {
    this.won = won
    if (won) console.log('YOU WON!')
  },
  boardHistoy: [] as { board: cell[][]; pencilBoard: boolean[][][] }[],
  updateHistory() {
    this.boardHistoy.push({ pencilBoard: this.pencilBoard, board: this.board })
  },
  board: blankBoard,
  setValue(row: PossibleRow, column: PossibleColumn, value: PossibleCellValues) {
    const cell = this.board[row - 1][column - 1]
    this.board[row - 1].splice(column - 1, 1, { ...cell, value })
    clearCellsRowAndColumnOfPencilValue(row, column)
    checkIsWon()
  },
  setIsStatic(row: PossibleRow, column: PossibleColumn, isStatic: boolean) {
    const cell = this.board[row - 1][column - 1]
    this.board[row - 1].splice(column - 1, 1, { ...cell, isStatic })
  },
  getIsStatic(row: PossibleRow, column: PossibleColumn) {
    return this.board[row - 1][column - 1].isStatic
  },
  setInitialValue(row: PossibleRow, column: PossibleColumn, value: PossibleCellValues) {
    this.setValue(row, column, value)
    this.setIsStatic(row, column, value !== 0)
  },
  getValue(row: PossibleRow, column: PossibleColumn) {
    return this.board[row - 1][column - 1].value
  },
  isPencilMode: false,
  toggleIsPencileMode() {
    this.isPencilMode = !this.isPencilMode
  },
  pencilBoard: blanckPencilBoard,
  togglePencilBoardCellValue(row: PossibleRow, column: PossibleColumn, value: PossibleColumn) {
    const newValue = !this.pencilBoard[row - 1][column - 1][value - 1]
    this.setPencilBoardCellValue(row, column, value, newValue)
    // this.pencilBoard[row - 1][column - 1].splice(value - 1, 1, newValue)
  },
  setPencilBoardCellValue(
    row: PossibleRow,
    column: PossibleColumn,
    value: PossibleColumn,
    isPenciled: boolean
  ) {
    this.pencilBoard[row - 1][column - 1].splice(value - 1, 1, isPenciled)
  },
  getPencilCell(row: PossibleRow, column: PossibleColumn) {
    return this.pencilBoard[row - 1][column - 1]
  },
  boardId: undefined as number | undefined,
  LoadNewBoard() {
    getBoard().then(({ board, id }) => {
      for (let i = 1; i <= 81; i++) {
        const value = Number(board[i - 1]) as PossibleCellValues
        const row = Math.ceil(i / 9) as PossibleRow
        const column = (i - (row - 1) * 9) as PossibleColumn
        this.setInitialValue(row, column, value)
        this.boardId = id
        this.setWon(false)
        this.updateHistory()
      }
    })
  }
})

const checkIsWon = () => {
  if (!checkBoardIsFull()) return
  if (store.boardId) {
    checkSolution(store.boardId, getBoardAsString()).then((isWon) => store.setWon(isWon))
  }
}

const getBoardAsString = () => {
  let str = ''
  for (const row of store.board) {
    for (const cell of row) {
      str += cell.value
    }
  }
  return str
}

const checkBoardIsFull = () => {
  for (const row of store.board) {
    for (const cell of row) {
      if (!cell.value) return false
    }
  }
  return true
}

const clearRowofPencilValue = (row: PossibleRow, value: PossibleColumn) => {
  for (const column of PossibleCoOrd) {
    store.setPencilBoardCellValue(row, column, value, false)
  }
}
const clearColumnofPencilValue = (column: PossibleColumn, value: PossibleColumn) => {
  for (const row of PossibleCoOrd) {
    store.setPencilBoardCellValue(row, column, value, false)
  }
}
const clearBoxOfPencilValue = (row: PossibleRow, column: PossibleColumn, value: PossibleColumn) => {
  const startRow = Math.floor((row - 1) / 3) * 3 + 1
  const startColumn = Math.floor((column - 1) / 3) * 3 + 1

  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startColumn; c < startColumn + 3; c++) {
      store.setPencilBoardCellValue(r as PossibleRow, c as PossibleColumn, value, false)
    }
  }
}
const clearCellsRowAndColumnOfPencilValue = (row: PossibleRow, column: PossibleColumn) => {
  const value = store.getValue(row, column)
  if (value) {
    clearColumnofPencilValue(column, value)
    clearRowofPencilValue(row, value)
    clearBoxOfPencilValue(row, column, value)
  }
}
