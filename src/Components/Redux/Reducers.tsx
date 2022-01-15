import { combineReducers } from "redux"
import { ACTIVE_DETAILS, ACTIVE_MENU_ICON, DATA_FETCH } from "./Types"
const initactive = {
    active : 'qlhp',
    subactive : 'Danh sách lớp học',
    data:[],
    details: []
}
export const activereducer = (state = initactive,
    actions:{type:string,active:string,subactive:string,datas:any,detail:any})=>{
        console.log(actions.detail);       
    switch(actions.type){
        case ACTIVE_MENU_ICON:
            return{
                ...state,
                active:actions.active,
                subactive:actions.subactive
            }
            case DATA_FETCH:

                return{...state,
                    data:actions.datas
                }
            case ACTIVE_DETAILS:
                return{
                    ...state,
                    details: actions.detail
                }
        default: return state
    }
}

// export const tabledatareducer = (state = inittabledata,)