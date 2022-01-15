import { collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"
import { ACTIVE_DETAILS, ACTIVE_MENU_ICON, DATA_FETCH } from "./Types"

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
export const changeActivedetail = (data:any)=>{
    return{
        type: ACTIVE_DETAILS,
        detail: data
    }
}
export const fetchthatmf=()=>{

    return async(dispatch:any)=>{
        const querySnapshot = await getDocs(collection(db, "DSLH"))
        console.log(querySnapshot.docs.map((doc:any)=>{
            return (doc.id)
                  
        }));
        
       const ahaha = querySnapshot.docs.map((doc:any)=>{
            return ([...doc.get('data'),doc.id])
                  
        })
        console.log(ahaha);
        
         dispatch(dataFetch(ahaha))
      
    }
}