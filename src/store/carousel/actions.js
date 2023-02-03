import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiURL } from "../../../configs";

const getCarousel = createAsyncThunk('get-carousel', async () => {
  try {
    const comics = await axios.get(`${apiURL}comics/carousel`)
    return {
      success: true,
      response: comics.data.response
    } 
  } catch (error) {
    return {
      success: false,
      response: {
        error: error.message
      }
    }
  }
})

const carouselActions = { getCarousel }

export default carouselActions