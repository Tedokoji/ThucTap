import { ACTIVE_MENU_ICON } from "./Types"

export const changeActiveMenuIcon = (data:{active:string,subactive:string})=>{
    console.log(data);
    
    return{
        type: ACTIVE_MENU_ICON,
        active:data.active,
        subactive:data.subactive
    }
}