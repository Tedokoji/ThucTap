import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeActiveMenuIcon } from './../Redux/Actions';
import './Sub.scss'
function Submenuitems(props:any) {
    const navi = useNavigate()
    useEffect(()=>{
        navi(`/QLHP-${props.subactive}`)
        console.log('hello')

    },[props.subactive])
    return (
            <ul className="subreee">
             {
                 props.list.map((e:{title:string},index:number)=>{
                     return (
<li  onClick={
    ()=>{props.changeActiveMenuIcon(
    {active:props.active,subactive:e.title}) 

} 
                                
            }
                         className={props.subactive === e.title ? 
                        'bolder':''} key={index}>{e.title}</li>
                     )
                 })
             }
            </ul>
    )
}
const mapState = (state:any)=>{
    return{
        active: state.active,
        subactive: state.subactive
    }
}
const mapDispatch = (dispatch:any)=>{
    return{
        changeActiveMenuIcon: (e:any)=>{
            
            dispatch(changeActiveMenuIcon(e))}
    }
}
export default connect(mapState,mapDispatch)(Submenuitems)
