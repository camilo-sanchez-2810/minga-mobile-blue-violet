import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getComic= createAsyncThunk(
    "getComic",
    async (idComic) => { 
        try{ 
            let response= await axios.get(`https://minga-backendo.onrender.com/api/comics/${idComic}`)
            return {
                response: {idComic: response.data},
                message: "comic obtain",
            } 
        }catch(error) {
            console.log(error)
            return {
                response: {idComic: error.response.data},
                message: "error obtained comic"
            }
        }
    }
)
const comicActions={getComic}



export default comicActions