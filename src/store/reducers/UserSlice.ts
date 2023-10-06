import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        // usersFetching(state: UserState) {
        //     state.isLoading = true;
        // },
        // usersFetchingSuccess(state: UserState, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload;
        // },
        // usersFetchingError(state: UserState, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // }
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state: UserState) => {
            state.isLoading = true;
            state.error = '';
        },
        [fetchUsers.fulfilled.type]: (state: UserState, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: (state: UserState, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default userSlice.reducer;

