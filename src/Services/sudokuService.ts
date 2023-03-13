import json from '../../db.json'

export interface BoardResponse {
  board: DataBaseItem['board']
  id: number
}

interface DataBaseItem {
  board: string
  solution: string
}

const data = json as DataBaseItem[]

export const getBoard = () => {
  const index = Math.floor(Math.random() * data.length)
  const item = data[index]
  const boardResponse = { board: item.board, id: index }
  return new Promise<BoardResponse>((resolve) => {
    resolve(boardResponse)
  })
}

export const checkSolution = (id: number, potentialSolution: string) => {
  const item = data[id]
  const isSolution = item.solution === potentialSolution
  return new Promise<boolean>((resolve) => {
    resolve(isSolution)
  })
}
