import {createSlice} from '@reduxjs/toolkit'

type InitialstateProps = {
    status:boolean,
}

const initialState:InitialstateProps = {
    status:false,
}

export const drawerSlice = createSlice({
    name:'drawer',
    initialState, 
    reducers:{
        toggleDrawer:(state)=>{
            state.status = !state.status
        }
    }
})

export const {toggleDrawer} = drawerSlice.actions

export default drawerSlice.reducer