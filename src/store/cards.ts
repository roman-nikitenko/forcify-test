import { makeAutoObservable } from "mobx"

class Cards {
  constructor() {
    let cards = []
    makeAutoObservable(this)
  }
  
  
}

export default new Cards()