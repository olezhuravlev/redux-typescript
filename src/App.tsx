import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {useDispatch} from "react-redux";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {

    const {error, isLoading, users, count} = useAppSelector(state => state.userReducer);
    const {increment} = userSlice.actions;
    //const dispatch = useDispatch();
    const dispatch = useAppDispatch();

    const incrementHandler = () => {
        dispatch(increment(1))
    }

    const decrementHandler = () => {
        dispatch(increment(-1))
    }

    useEffect(() => {
        //fetchUsers()(dispatch)
        dispatch(fetchUsers())
    }, [])


    return (
        <div className='App'>
            <div>
                <h1>{count}</h1>
                <button onClick={incrementHandler}>+</button>
                <button onClick={decrementHandler}>-</button>
            </div>
            {isLoading && <h1>Is loading users...</h1>}
            {error && <h1>Error: {error}</h1>}
            <div>
                {JSON.stringify(users, null, 2)}
            </div>
        </div>
    );
}

export default App;
