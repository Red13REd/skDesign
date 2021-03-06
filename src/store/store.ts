import {applyMiddleware,combineReducers, legacy_createStore as createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionsType, formReducer} from "./formReducer";
import thunk,{ThunkAction, ThunkDispatch} from "redux-thunk";

let rootReducer = combineReducers({
    form: formReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateRootType = ReturnType<typeof rootReducer>

export const useCustomSelector: TypedUseSelectorHook<AppStateRootType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateRootType, unknown, ActionsType>>()
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateRootType, unknown, ActionsType>


//@ts-ignore
window.store = store