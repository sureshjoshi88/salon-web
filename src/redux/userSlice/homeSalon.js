import {createSlice,asyncThunkCreator} from '@reduxjs/toolkit';


const homeSalonSlice = createSlice({
    name:'homeSalon',
    initialState:{
        homeSalonData :[],
        loading:false,
        error:null
    },
    reducers:{
        setHomeSalonData:(state,action)=>{
            state.homeSalonData = action.payload;
        },
        setLoading:(state,action)=>{
            state.loading = action.payload;
        },
        setError:(state,action)=>{
            state.error = action.payload;
        }
    }
})

export const {setHomeSalonData,setLoading,setError} = homeSalonSlice.actions;

export default homeSalonSlice.reducer;