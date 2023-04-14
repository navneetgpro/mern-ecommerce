import { CART_ADDITEM,CART_DELITEM } from '../actions/types';

const initialState = {
    items:[],
    itemcount:0,
    subtotal:0
};

export default function(state = initialState, action) {
    const { type,payload } = action;

    switch(type){
        case CART_ADDITEM:
            let existed_item = state.items.find(item => payload._id === item._id);
            if(!existed_item){
                payload.quantity = 1
                return {
                    ...state,
                    items: [...state.items, payload],
                    itemcount: state.itemcount + 1,
                    subtotal: state.subtotal + payload.price
                };
            }else{
                existed_item.quantity += 1 
                return {
                    ...state,
                    subtotal: state.subtotal + payload.price
                };
            }
        case CART_DELITEM:
            console.log(payload.price*payload.quantity);
            return {
                ...state,
                items: state.items.filter(item => payload._id !== item._id),
                itemcount: state.itemcount - 1,
                subtotal: state.subtotal - (payload.price*payload.quantity)
            };
        default:
            return state;
    }
}