import { collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"
import { ACTIVE_MENU_ICON, DATA_FETCH } from "./Types"

export const changeActiveMenuIcon = (data:{active:string,subactive:string})=>{
    
    return{
        type: ACTIVE_MENU_ICON,
        active:data.active,
        subactive:data.subactive
    }
}
export const dataFetch = (data:any)=>{

    return{
        type: DATA_FETCH,
        datas:data
    }
}
export const fetchthatmf=()=>{

    return async(dispatch:any)=>{
        const querySnapshot = await getDocs(collection(db, "DSLH"))
       const ahaha = querySnapshot.docs.map((doc:any)=>{
            return (doc.get('data'))
                  
        })
        console.log(ahaha);
        
         dispatch(dataFetch(ahaha))
      
    }
}