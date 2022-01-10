import { ACTIVE_MENU_ICON } from "./Types"
const initactive = {
    active : 'qlhp',
    subactive : 'Danh sách lớp học'
}
export const activereducer = (state = initactive,
    actions:{type:string,active:string,subactive:string})=>{
    switch(actions.type){
        case ACTIVE_MENU_ICON:
            console.log(actions.subactive)
            return{
                ...state,
                active:actions.active,
                subactive:actions.subactive
            }
        default: return state
    }
}