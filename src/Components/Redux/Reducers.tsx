import { combineReducers } from "redux"
import { ACTIVE_MENU_ICON, DATA_FETCH } from "./Types"
const initactive = {
    active : 'qlhp',
    subactive : 'Danh sách lớp học',
    data:[]
}
export const activereducer = (state = initactive,
    actions:{type:string,active:string,subactive:string,datas:any})=>{
        console.log(actions.datas);       
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
        default: return state
    }
}

