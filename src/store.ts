import { reactive } from 'vue'

export const store = reactive({
  won: false,
  setWon(won: boolean) {
    this.won = won
  }
})
