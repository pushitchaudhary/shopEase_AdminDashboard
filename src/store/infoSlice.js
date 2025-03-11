import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATED_ADMIN_API } from "../http/AXIOSAPI";


const infoSlice = createSlice({
    name : 'infoSlice',
    initialState : {
        totalProduct : null,
        totalSell : null,
        totalSellAmount : null,
        todaySell : null,
        todaySellAmount : null,
        topSellProduct : null

    },
    reducers : {
        setTotalProduct(state, action){
            state.totalProduct = action.payload
        },
        setTotalSell(state, action){
            state.totalSell = action.payload
        },
        setTotalSellAmount(state, action){
            state.totalSellAmount = action.payload
        },
        setTodaySell(state, action){
            state.todaySell = action.payload
        },
        setTodaySellAmount(state, action){
            state.todaySellAmount = action.payload
        },
        setTopSellProduct(state, action){
            state.topSellProduct = action.payload
        }
    }
})

export const {setTotalProduct, setTotalSell, setTotalSellAmount, setTodaySell, setTodaySellAmount, setTopSellProduct} = infoSlice.actions
export default infoSlice.reducer


export function fetchTotalProductInfo(){
    return async function fetchTotalProductInfoThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/total-product-info')
            if(response.status == 200){
                dispatch(setTotalProduct(response.data.message))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function fetchTotalSellInfo(){
    return async function fetchTotalSellInfoThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/total-sell-info')
            if(response.status == 200){
                dispatch(setTotalSell(response.data.message))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function fetchTotalSellAmountInfo(){
    return async function fetchTotalSellAmountInfoThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/total-sell-amount-info')
            if(response.status == 200){
                dispatch(setTotalSellAmount(response.data.message))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function fetchTodaySellInfo(){
    return async function fetchTodaySellInfoThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/today-sell-info')
            if(response.status == 200){
                dispatch(setTodaySell(response.data.message))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function fetchTodaySellAmountInfo(){
    return async function fetchTodaySellAmountInfoThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/today-sell-amount-info')
            if(response.status == 200){
                dispatch(setTodaySellAmount(response.data.message))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function fetchTopSellProduct(){
    return async function fetchTopSellProductThunk(dispatch){
        try {
            const response = await AUTHENTICATED_ADMIN_API.get('/top-sell-product')
            console.log(response)
            if(response.status == 200){
                dispatch(setTopSellProduct(response.data.message))
            }
        } catch (error) {
            console.log(error)
        }
    }
}