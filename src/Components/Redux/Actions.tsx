import { ACTIVE_MENU_ICON } from "./Types"

export const changeActiveMenuIcon = (data:string)=>{
    return{
        type: ACTIVE_MENU_ICON,
        active:data
    }
}