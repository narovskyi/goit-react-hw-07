import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                const normilizedName = action.payload.name.toLowerCase();
                const sameName = state.filter(contact => contact.name.toLowerCase() === normilizedName);
                if (sameName.length > 0) {
                    alert(`${action.payload.name} is already in contacts`);
                    return state;
                }
                const newState = [...state, action.payload ];
                return newState;
            },
            prepare(values) {
                return {
                    payload: {
                        id: nanoid(),
                        ...values
                    }
                }
            }
        },
        deleteContact(state, action) {
            const editedState = state.filter(contact => contact.id !== action.payload); 
            return editedState;
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;