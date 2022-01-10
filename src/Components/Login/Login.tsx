import {useEffect, useState} from 'react'
import './Login.scss'
import edu from '../static file/EduIcon.jpg'
import loginicon1 from '../static file/loginicon1.jpg'
import loginicon2 from '../static file/loginicon2.png'
import Blankshit from '../static file/Blankshit.png'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
interface Loginprops{
    title:string
    Password:string
    btn:string
    underpass:string
}
function Login({title,Password,btn,underpass}:Loginprops) {
    const [forget,setForget] = useState(true)
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [user,setUser] = useState()
    onAuthStateChanged(auth,(currentuser:any)=>{
        setUser(currentuser)
    })
    const navi = useNavigate()
    const Forget = ()=>{
        if(underpass === "< Quay lại trang chủ"){ navi('/'); return}
        navi('/login-forget')
        setForget(false)
    }
   
    // const register = async()=>{
    //     try
    //     {const users = await createUserWithEmailAndPassword(auth,name,pass)}
    //     catch(err){console.log(err)}
    // }
    const login = async()=>{
        try
        {const users = await signInWithEmailAndPassword(auth,name,pass)
        console.log(users);
        navi('/menu')
        }
        catch(err){console.log('what?')
        navi('/login')}
        
        
    }
    // const logout = async()=>{
    //     await signOut(auth)
    // }
    
    console.log('re')
    return (
        <div className="LoginCover">
            <img className="edu" src={edu} alt="edu"/>
            <div className="LoginPage">
                <h1>{title}</h1>
                <div className="LoginInput">
                    <p>Tên đăng nhập</p>
                   <div >
                        <img className="loginicon1" src={loginicon1} alt="login"/>
                        <input
                        value={name}
                        onChange={e=>{setName(e.target.value)}}
                        />
                   </div>
                </div>
                <div className="LoginInput">
                    <p>{Password}</p>
                    <div >
                       {forget === true ? <img 
                        className="loginicon2" src={loginicon2} alt="login"/> :
                        <img 
                        className="loginicon2" src={Blankshit} alt="login"/> }
                        <input   
                        value={pass}
                        onChange={e=>{setPass(e.target.value)}}
                         type={forget ===true ? "password": ''} />
                   </div>
                </div>
                <p onClick={Forget}
                 className="forget">{underpass}</p>
                <button  onClick={login}
                className={pass === '' ? 'activebtn' : 'loginbtn'}>
                    {btn}
                </button>
            </div>
        </div>
    )
}

export default Login
