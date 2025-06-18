import React from 'react'
import axios from 'axios'
import { COINGECKO_API_URL } from '../../helpers/constant'
import axiosInstance from '../../helpers/axiosinstance'

 export async function fetchCoindata() {
 
 try{
    const response =await axiosInstance.get('./coins/markets?vs_currency=usd');
    console.log(response.data);
    return response.data;
 } catch (error) {
    console.error( error);
    return  error;
 }
}

export default fetchCoindata
