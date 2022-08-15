import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  // EXPLANATION OF ADD_TO_CART
  // first destructure out the properties of the product coming from addToCart function in the singleProduct
  // searches the previous cart for an cartItem whose id matches the id+color of the product we passing in
  // else the product is not yet in the cart, a new cartItem is created with an id equals to id+color, max property with a value of the number of items in stock, and other properties
  // if the product is in the cart, a new cart is created from the existing cart. We map over the existing cart to find that cartItem again (but still returning those that don't match in the else statement), then the amount of that cartItem is increased by the amount being passed in from the addToCart function
  // meanwhile, the amount is checked against the number of items in the stock(the max property), if it exceeds, the number of items in the stock(max) is returned
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    // const mainProduct = state.cart.filter((product) => product.mainId === id);
    // console.log(mainProduct);
    const tempProduct = state.cart.find((product) => product.id === id + color);
    if (tempProduct) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;

          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        mainId: id,
        id: id + color,
        color,
        amount,
        name: product.name,
        max: product.stock,
        price: product.price,
        image: product.images[0].url,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        const newAmount = action.payload.value;
        return { ...item, amount: newAmount };
      } else {
        return item;
      }
    });
    return { ...state, cart: newCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, item) => {
        total.total_items += item.amount;
        const number = item.amount * item.price;
        total.total_amount += number;
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );

    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
