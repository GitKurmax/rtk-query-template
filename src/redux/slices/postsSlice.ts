import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state

// Define the initial state using that type
const initialState: [] = []

export const postsSlice = createSlice({
    name: 'posts',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
})

export const {} = postsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectPosts = (state: RootState) => state.posts

export default postsSlice.reducer