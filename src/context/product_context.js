// create a context
// then provider
// consumer => useContext Hook

import {createContext,useContext, useEffect,useReducer} from "react";

import axios from "axios";
import reducer from "../reducer/product_reducer"
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
// const API = "./api.json"
const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},

}

const AppProvider = ({children})=>{

    //reducer
    const [state,dispatch] = useReducer(reducer,initialState);

    const getProducts =async (url)=>{

        dispatch({type:"SET_LOADING"});

        try{

            const res =await axios.get(url);
            const products = await res.data;

            dispatch({type:"SET_API_DATA",payload:products});

        }catch(error){

            dispatch({type:"SET_ERROR"});
        }
    }
 
// my 2nd api call for single product
    const getSingleProduct = async (url) => {
        dispatch({type:"SET_SINGLE_LOADING"});
        try {
            const res =await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"});
        }
    }


    useEffect(()=>{
        getProducts(API);
    },[])
    return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>

};
// create a custom hook

const useCustomHook =()=>{
    return useContext(AppContext);
};

export {AppProvider,useCustomHook};