import {createSlice} from '@reduxjs/toolkit'

type InitialstateProps={
    drawerWidth:number 
    status:boolean
}


const initialState:InitialstateProps = {
    drawerWidth : 240,
    status:true
}

export const dashboardSlice = createSlice({
    name:'dashboard', 
    initialState,
    reducers:{
        open(state){
            state.status = true
        },

        close(state){
            state.status=false
        }
    }
})

export const {open, close } = dashboardSlice.actions

export default dashboardSlice.reducer