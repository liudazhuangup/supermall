import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-type"

export default {
  // mutations 唯一的目的就是修改state中的状态
  // mutations 中的每一个方法尽可能完成的事件比较单一一点
  ADD_COUNTER(state, payload) {
    payload.count++
  },
  ADD_TO_CART(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  checkFalse(state, payload) {
    state.cartList.forEach(item => (item.checked = false))
  },
  checkTrue(state, payload) {
    state.cartList.forEach(item => (item.checked = true))
  }
}
