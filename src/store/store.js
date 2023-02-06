import { configureStore } from "@reduxjs/toolkit";
import comicsReducers from "./comics/reducers";
import chapterReducer from "./chapter/reducers";
import alertReducer from "./minga-alert/reducers";
import comicReducer from "./comic/reducers";
import chaptersReducer from "./chapters/reducers";
import filterCategoryReducer from "./comicCategories/reducers"
import reactionsReducers from "./myReactions/reducers";
import authReducer from "./auth/reducers";
<<<<<<< HEAD
//import donationReducers from "./donations/reducers";
=======
>>>>>>> 30fae1c95e544f50ae4160ec063b56f999cfed92

export const store = configureStore({
  reducer: {
    comic: comicReducer,
    alert: alertReducer,
    comics: comicsReducers,
    filterCategoryComic: filterCategoryReducer,
    chapter: chapterReducer,
    chapters: chaptersReducer,
    reactions:reactionsReducers,
    auth: authReducer,
<<<<<<< HEAD
    //mercadopago: donationReducers

=======
>>>>>>> 30fae1c95e544f50ae4160ec063b56f999cfed92
  }
})
