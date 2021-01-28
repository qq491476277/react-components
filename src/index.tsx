import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
type ActionType = 'ADD_TO_CART' | 'UPDATE_CART' | 'DELETE_FROM_CART'

interface goodsCart {
  <T, K, P>(product: T, quantity?: K, unitCost?: P): Action<T, K, P>
}

interface Action<T = string, K = number, P = number> {
  type: ActionType,
  payload: { product: T, quantity?: K, unitCost?: P }
}

interface Action1<T = string> {
  type: ActionType,
  payload: { product: T }
}


const addToCart: goodsCart = function (product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

const updateCart: goodsCart = function (product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

const deleteFromCart: goodsCart = function (product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}
interface hanshu {
  (dispatch: any): void
}
const cartReducer = function (state = initialState, action: Action | Action1) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case UPDATE_CART: {

      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }
    case DELETE_FROM_CART: {

      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }
    default:
      return state
  }
}

const productsReducer = function (state = [], action: Action) {
  return state;
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);


let store = createStore(rootReducer, applyMiddleware(ReduxThunk));

let unsubscribe = store.subscribe(function () {
  console.log("initial state: ", store.getState());
})


store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250))
store.dispatch(updateCart('Flour 1kg', 3, 660))
store.dispatch(deleteFromCart('Juice 2L'))


// const asyncAction: asyncAction = function (dispatch: dispatch) {
//   setTimeout(() => {
// dispatch(updateCart('Coffee 500gm', 7, 255))
//   }, 2000)
// }
// store.dispatch(asyncAction);

// unsubscribe()

// interface Ad{
//   (num:)
// }

interface Ad {
  <T>(num: T): T
}

const ad: Ad = function (num) {
  return num
}
console.log(7, ad(3));
type AA = {
  (name: string, age?: number): void
}

let a: AA = function (name, age) {
  return {
    type: name,
    payload: age
  }
}

console.log(77, a('77'));



enum Sex {
  nan = '男', nv = '女', yaoguai = '妖怪'
}
type Person = {
  name: string
  sex: Sex
  age: number
}

type PersonX<T> = { [T in keyof Person]?: Person[T] }
type NewPerson = PersonX<Person> & { phone: number }

let zhang3: Person = { name: '张三', sex: Sex['nan'], age: 12 }
let li4: NewPerson = { name: '张三', sex: Sex['nan'], phone: 180818 }

type P = [number, string, boolean];
type Q = Date;    

// type R = [in P];

// let dd:R = [ 1,'2',false]
// console.log(dd);

// let dd:P = [1,'2',false]
// type getArr<T, U> = {
//   (a: T, b: U): [T, U]
// }
// let getArr: getArr<T, U> = function (a, b) {
//   return [a, b]
// }

// console.log(getArr(1, 2));
// let b = "lucifer"; // 我们没有给 a 声明类型， a 被推导为string
// b.toFixed(); // Property 'toFixed' does not exist on type 'string'.
// b.includes("1"); // ok
// b = 1;
