import {LoadingStatusType} from "./enums";
import {AppThunk} from "./store";

let initialState: StateType = {
    userName: '',
    email: '',
    linkProfile: '',
    phoneNumber: '',
    city: '',
    organizationName: '',
    recipient: '',
    howDidYouKnow: '',
    isLoad: LoadingStatusType.disabled
}


export const formReducer = (state: StateType = initialState, actions: ActionsType): StateType => {
    switch (actions.type) {
        case "FORM-REDUCER/SET-DATA":
            return {...state, ...actions.data}
        default:
            return state
    }
};


export const setData = (data: StateType) => ({type: 'FORM-REDUCER/SET-DATA', data})


export const JsonTC = (): AppThunk => (dispatch, getState) => {
    dispatch(setData({
        isLoad: LoadingStatusType.active
    }))
    const {form} = getState()

    new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    }).then(r => {
        console.log(JSON.stringify(form))
        dispatch(setData({
            isLoad: LoadingStatusType.disabled
        }))
    })
}


type StateType = {
    userName?: string
    email?: string
    linkProfile?: string
    phoneNumber?: string
    city?: string
    organizationName?: string
    recipient?: string
    howDidYouKnow?: string
    isLoad?: LoadingStatusType
}

export type ActionsType = ReturnType<typeof setData>


