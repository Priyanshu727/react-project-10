import { createSlice } from "@reduxjs/toolkit";
import productData from "../../assets/productData";

const initialState = {
	cart: [],
	items: productData,
	totalQuantity: 0,
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state,action) => {
			const findIndex = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (findIndex >= 0)
			{
				state.cart[ findIndex ].quantity += 1;
			} else
			{
				state.cart.push(action.payload);
			}
		},

		removeItem: (state,action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},

		increment: (state,action) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload)
				{
					return { ...item,quantity: item.quantity + 1 };
				}
				return item;
			});
		},

		decrement: (state,action) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload && item.quantity > 0)
				{
					return { ...item,quantity: item.quantity - 1 };
				}
				return item;
			});
		},

		getCartTotal: (state) => {
			let { totalQuantity,totalPrice } = state.cart.reduce(
				(cartTotal,cartItem) => {
					console.log("carttotal",cartTotal);
					console.log("cartitem",cartItem);
					const { price,quantity } = cartItem;
					console.log(price,quantity);
					const itemTotal = price * quantity;
					cartTotal.totalPrice += itemTotal;
					cartTotal.totalQuantity += quantity;
					return cartTotal;
				},
				{
					totalPrice: 0,
					totalQuantity: 0,
				}
			);
			state.totalPrice = parseInt(totalPrice.toFixed(2));
			state.totalQuantity = totalQuantity;
		},
	},
});

export const { addToCart,removeItem,increment,decrement,getCartTotal } =
	cartSlice.actions;

export default cartSlice.reducer;
