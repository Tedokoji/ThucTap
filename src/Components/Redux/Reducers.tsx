import { ACTIVE_MENU_ICON } from "./Types"
const initactive = {
    active : 'qlhp'
}
export const activereducer = (state = initactive,actions:{type:string,active:string})=>{
    switch(actions.type){
        case ACTIVE_MENU_ICON:
            return{
                ...state,
                active:actions.active
            }
        default: return state
    }
}