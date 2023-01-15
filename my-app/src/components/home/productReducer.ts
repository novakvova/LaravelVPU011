import { IProductState, ProductActions } from './types';

const initState : IProductState = {
    list: [],
    count_page: 0,
    current_page: 0,
    total: 0
}
export const productReducer = (state=initState, action: ProductActions) : IProductState => {
    return state;
};

