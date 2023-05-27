import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from "./ContactsSlice"
import { FilterReducer } from "./FilterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: FilterReducer
    },
})




 
