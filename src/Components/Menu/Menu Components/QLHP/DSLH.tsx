import { connect } from 'react-redux';
import { changeActiveMenuIcon, dataFetch } from '../../../Redux/Actions';
import { signOut } from 'firebase/auth'
import { auth  } from '../../../../Firebase/Firebase'
import './DSLH.scss'
import { useNavigate } from 'react-router-dom';
import {fetchthatmf} from '../../../Redux/Actions'
import { useEffect, useState } from 'react';
function DSLH(props:any) {
   
    const navi = useNavigate()
    const logout = async()=>{
        await signOut(auth)
        navi('/login')
    }
    useEffect(()=>{
        console.log(props.boarddata.map((e:any)=>{console.log(e)}));
        
    },[])
    const details = (detail:any)=>{
        console.log(detail)
    }
    return (
        <div className="Context">
            <div className="logout">
                <i>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19.9999 23.334C23.6818 23.334 26.6666 20.3492 26.6666 16.6673C26.6666 12.9854 23.6818 10.0007 19.9999 10.0007C16.318 10.0007 13.3333 12.9854 13.3333 16.6673C13.3333 20.3492 16.318 23.334 19.9999 23.334ZM19.9999 20.0007C21.8409 20.0007 23.3333 18.5083 23.3333 16.6673C23.3333 14.8264 21.8409 13.334 19.9999 13.334C18.159 13.334 16.6666 14.8264 16.6666 16.6673C16.6666 18.5083 18.159 20.0007 19.9999 20.0007Z" fill="#FF7506"/>
<path fillRule="evenodd" clipRule="evenodd" d="M29.8768 33.4268C33.9949 30.3923 36.6666 25.5085 36.6666 20.0007C36.6666 10.7959 29.2047 3.33398 19.9999 3.33398C10.7952 3.33398 3.33325 10.7959 3.33325 20.0007C3.33325 25.5085 6.00494 30.3923 10.1231 33.4268C10.1988 33.4826 10.2751 33.5378 10.3518 33.5924C11.0999 34.1244 11.8938 34.5962 12.7264 35.0007C14.9243 36.0684 17.3922 36.6673 19.9999 36.6673C22.6077 36.6673 25.0755 36.0684 27.2735 35.0007C27.3181 34.979 27.3627 34.9571 27.4072 34.935C28.2761 34.5031 29.102 33.9977 29.8768 33.4268ZM28.7144 30.0923C31.5432 27.6473 33.3333 24.033 33.3333 20.0007C33.3333 12.6369 27.3637 6.66732 19.9999 6.66732C12.6361 6.66732 6.66659 12.6369 6.66659 20.0007C6.66659 24.033 8.45661 27.6473 11.2854 30.0923C13.001 27.0528 16.2608 25.0007 19.9999 25.0007C23.739 25.0007 26.9988 27.0528 28.7144 30.0923ZM25.9277 31.9471C24.8201 29.8012 22.5813 28.334 19.9999 28.334C17.4185 28.334 15.1798 29.8012 14.0721 31.9471C15.8577 32.8348 17.8705 33.334 19.9999 33.334C22.1293 33.334 24.1421 32.8348 25.9277 31.9471Z" fill="#FF7506"/>
                </svg>
                </i> 
                <h3>
                Dũng
                </h3>
                <i>
                <svg width="1" height="36" viewBox="0 0 1 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1" height="36" fill="#823B00"/>
                </svg>
                </i>
                <p onClick={logout}>
                    Đăng xuất
                </p>
            </div>
            <div className="history">
                <p className="root">Quản lí học phí</p>
                <i className="rootar">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.580593 16.9557C1.06875 17.4439 1.8602 17.4439 2.34836 16.9557L9.41943 9.88464C9.90759 9.39649 9.90759 8.60503 9.41943 8.11687L2.34836 1.0458C1.86021 0.557648 1.06875 0.557649 0.580594 1.0458C0.0924397 1.53396 0.0924387 2.32542 0.580594 2.81357L6.23745 8.47043C6.53034 8.76332 6.53034 9.23819 6.23745 9.53109L0.580594 15.1879C0.0924395 15.6761 0.0924384 16.4676 0.580593 16.9557Z" fill="#FF7506"/>
                </svg>
                </i>
                <h1 className="root-sub">{props.subactive}</h1>
            </div>
                <table className="Board">
                      <thead className="Board-top">
                            <tr>
                            <th>STT</th>
                            <th>Mã Lớp<i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.70994 9.7158L11.9999 7.4158L14.2899 9.7158C14.3829 9.80953 14.4935 9.88392 14.6154 9.93469C14.7372 9.98546 14.8679 10.0116 14.9999 10.0116C15.132 10.0116 15.2627 9.98546 15.3845 9.93469C15.5064 9.88392 15.617 9.80953 15.7099 9.7158C15.8037 9.62284 15.8781 9.51223 15.9288 9.39038C15.9796 9.26852 16.0057 9.13781 16.0057 9.0058C16.0057 8.87379 15.9796 8.74308 15.9288 8.62122C15.8781 8.49936 15.8037 8.38876 15.7099 8.2958L12.7099 5.2958C12.617 5.20207 12.5064 5.12768 12.3845 5.07691C12.2627 5.02614 12.132 5 11.9999 5C11.8679 5 11.7372 5.02614 11.6154 5.07691C11.4935 5.12768 11.3829 5.20207 11.2899 5.2958L8.28994 8.2958C8.10164 8.4841 7.99585 8.7395 7.99585 9.0058C7.99585 9.2721 8.10164 9.52749 8.28994 9.7158C8.47825 9.9041 8.73364 10.0099 8.99994 10.0099C9.26624 10.0099 9.52164 9.9041 9.70994 9.7158Z" fill="white"/>
<path d="M11.603 18.9856C11.4811 18.9348 11.3705 18.8604 11.2775 18.7667L8.27753 15.7267C8.1838 15.6337 8.10941 15.5231 8.05864 15.4013C8.00787 15.2794 7.98173 15.1487 7.98173 15.0167C7.98173 14.8847 8.00787 14.754 8.05864 14.6321C8.10941 14.5103 8.1838 14.3997 8.27753 14.3067C8.37049 14.213 8.48109 14.1386 8.60295 14.0878C8.72481 14.037 8.85552 14.0109 8.98753 14.0109C9.11954 14.0109 9.25025 14.037 9.3721 14.0878C9.49396 14.1386 9.60456 14.213 9.69753 14.3067L11.9875 16.6467L14.2775 14.3067C14.4711 14.1184 14.7316 14.0147 15.0017 14.0185C15.2717 14.0222 15.5292 14.1331 15.7175 14.3267C15.9058 14.5203 16.0095 14.7808 16.0058 15.0508C16.002 15.3209 15.8911 15.5784 15.6975 15.7667L12.6975 18.7667C12.6046 18.8604 12.494 18.9348 12.3721 18.9856C12.2502 19.0364 12.1195 19.0625 11.9875 19.0625C11.8555 19.0625 11.7248 19.0364 11.603 18.9856Z" fill="white"/>
</svg>
</i> </th>
                            <th>Tên lớp<i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.70994 9.7158L11.9999 7.4158L14.2899 9.7158C14.3829 9.80953 14.4935 9.88392 14.6154 9.93469C14.7372 9.98546 14.8679 10.0116 14.9999 10.0116C15.132 10.0116 15.2627 9.98546 15.3845 9.93469C15.5064 9.88392 15.617 9.80953 15.7099 9.7158C15.8037 9.62284 15.8781 9.51223 15.9288 9.39038C15.9796 9.26852 16.0057 9.13781 16.0057 9.0058C16.0057 8.87379 15.9796 8.74308 15.9288 8.62122C15.8781 8.49936 15.8037 8.38876 15.7099 8.2958L12.7099 5.2958C12.617 5.20207 12.5064 5.12768 12.3845 5.07691C12.2627 5.02614 12.132 5 11.9999 5C11.8679 5 11.7372 5.02614 11.6154 5.07691C11.4935 5.12768 11.3829 5.20207 11.2899 5.2958L8.28994 8.2958C8.10164 8.4841 7.99585 8.7395 7.99585 9.0058C7.99585 9.2721 8.10164 9.52749 8.28994 9.7158C8.47825 9.9041 8.73364 10.0099 8.99994 10.0099C9.26624 10.0099 9.52164 9.9041 9.70994 9.7158Z" fill="white"/>
<path d="M11.603 18.9856C11.4811 18.9348 11.3705 18.8604 11.2775 18.7667L8.27753 15.7267C8.1838 15.6337 8.10941 15.5231 8.05864 15.4013C8.00787 15.2794 7.98173 15.1487 7.98173 15.0167C7.98173 14.8847 8.00787 14.754 8.05864 14.6321C8.10941 14.5103 8.1838 14.3997 8.27753 14.3067C8.37049 14.213 8.48109 14.1386 8.60295 14.0878C8.72481 14.037 8.85552 14.0109 8.98753 14.0109C9.11954 14.0109 9.25025 14.037 9.3721 14.0878C9.49396 14.1386 9.60456 14.213 9.69753 14.3067L11.9875 16.6467L14.2775 14.3067C14.4711 14.1184 14.7316 14.0147 15.0017 14.0185C15.2717 14.0222 15.5292 14.1331 15.7175 14.3267C15.9058 14.5203 16.0095 14.7808 16.0058 15.0508C16.002 15.3209 15.8911 15.5784 15.6975 15.7667L12.6975 18.7667C12.6046 18.8604 12.494 18.9348 12.3721 18.9856C12.2502 19.0364 12.1195 19.0625 11.9875 19.0625C11.8555 19.0625 11.7248 19.0364 11.603 18.9856Z" fill="white"/>
</svg>
</i></th>
                            <th>Số lượng biểu phí</th>
                            <th>Ngày cập nhật<i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.70994 9.7158L11.9999 7.4158L14.2899 9.7158C14.3829 9.80953 14.4935 9.88392 14.6154 9.93469C14.7372 9.98546 14.8679 10.0116 14.9999 10.0116C15.132 10.0116 15.2627 9.98546 15.3845 9.93469C15.5064 9.88392 15.617 9.80953 15.7099 9.7158C15.8037 9.62284 15.8781 9.51223 15.9288 9.39038C15.9796 9.26852 16.0057 9.13781 16.0057 9.0058C16.0057 8.87379 15.9796 8.74308 15.9288 8.62122C15.8781 8.49936 15.8037 8.38876 15.7099 8.2958L12.7099 5.2958C12.617 5.20207 12.5064 5.12768 12.3845 5.07691C12.2627 5.02614 12.132 5 11.9999 5C11.8679 5 11.7372 5.02614 11.6154 5.07691C11.4935 5.12768 11.3829 5.20207 11.2899 5.2958L8.28994 8.2958C8.10164 8.4841 7.99585 8.7395 7.99585 9.0058C7.99585 9.2721 8.10164 9.52749 8.28994 9.7158C8.47825 9.9041 8.73364 10.0099 8.99994 10.0099C9.26624 10.0099 9.52164 9.9041 9.70994 9.7158Z" fill="white"/>
<path d="M11.603 18.9856C11.4811 18.9348 11.3705 18.8604 11.2775 18.7667L8.27753 15.7267C8.1838 15.6337 8.10941 15.5231 8.05864 15.4013C8.00787 15.2794 7.98173 15.1487 7.98173 15.0167C7.98173 14.8847 8.00787 14.754 8.05864 14.6321C8.10941 14.5103 8.1838 14.3997 8.27753 14.3067C8.37049 14.213 8.48109 14.1386 8.60295 14.0878C8.72481 14.037 8.85552 14.0109 8.98753 14.0109C9.11954 14.0109 9.25025 14.037 9.3721 14.0878C9.49396 14.1386 9.60456 14.213 9.69753 14.3067L11.9875 16.6467L14.2775 14.3067C14.4711 14.1184 14.7316 14.0147 15.0017 14.0185C15.2717 14.0222 15.5292 14.1331 15.7175 14.3267C15.9058 14.5203 16.0095 14.7808 16.0058 15.0508C16.002 15.3209 15.8911 15.5784 15.6975 15.7667L12.6975 18.7667C12.6046 18.8604 12.494 18.9348 12.3721 18.9856C12.2502 19.0364 12.1195 19.0625 11.9875 19.0625C11.8555 19.0625 11.7248 19.0364 11.603 18.9856Z" fill="white"/>
</svg>
</i></th>
                            <th> 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; </th>
                            </tr>
                        </thead>
                    <tbody >
                        <tr>
                            <th>STT</th>
                            <th>Mã Lớp</th>
                            <th>Tên lớp</th>
                            <th>Số lượng biểu phí</th>
                            <th>Ngày cập nhật</th>
                            <th><i>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.0001 5.33268C9.97516 5.33268 5.33341 9.97442 5.33341 15.9993C5.33341 22.0243 9.97516 26.666 16.0001 26.666C22.025 26.666 26.6667 22.0243 26.6667 15.9993C26.6667 9.97442 22.025 5.33268 16.0001 5.33268ZM2.66675 15.9993C2.66675 8.63555 8.63628 2.66602 16.0001 2.66602C23.3639 2.66602 29.3334 8.63555 29.3334 15.9993C29.3334 23.3631 23.3639 29.3327 16.0001 29.3327C8.63628 29.3327 2.66675 23.3631 2.66675 15.9993ZM16.0001 12.666C16.7365 12.666 17.3334 13.263 17.3334 13.9993V22.666C17.3334 23.4024 16.7365 23.9993 16.0001 23.9993C15.2637 23.9993 14.6667 23.4024 14.6667 22.666V13.9993C14.6667 13.263 15.2637 12.666 16.0001 12.666ZM16.0001 7.99935C15.2637 7.99935 14.6667 8.5963 14.6667 9.33268C14.6667 10.0691 15.2637 10.666 16.0001 10.666H16.0134C16.7498 10.666 17.3467 10.0691 17.3467 9.33268C17.3467 8.5963 16.7498 7.99935 16.0134 7.99935H16.0001Z" fill="#FF7506"/>
                            </svg>
                            </i></th>
                        </tr>
                        {
                         props.boarddata.map((e:any) =>{
                             return(
                                 <tr key={e[1]} >

                                     {
                                         e.map((a:any,index:number) =>{

                                             return(
                                                 <th key={index}>{a}</th>
                                             )
                                         })
                                         
                                     }
                                     <th
                                     onClick={()=>{details(e)}}><i>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.0001 5.33268C9.97516 5.33268 5.33341 9.97442 5.33341 15.9993C5.33341 22.0243 9.97516 26.666 16.0001 26.666C22.025 26.666 26.6667 22.0243 26.6667 15.9993C26.6667 9.97442 22.025 5.33268 16.0001 5.33268ZM2.66675 15.9993C2.66675 8.63555 8.63628 2.66602 16.0001 2.66602C23.3639 2.66602 29.3334 8.63555 29.3334 15.9993C29.3334 23.3631 23.3639 29.3327 16.0001 29.3327C8.63628 29.3327 2.66675 23.3631 2.66675 15.9993ZM16.0001 12.666C16.7365 12.666 17.3334 13.263 17.3334 13.9993V22.666C17.3334 23.4024 16.7365 23.9993 16.0001 23.9993C15.2637 23.9993 14.6667 23.4024 14.6667 22.666V13.9993C14.6667 13.263 15.2637 12.666 16.0001 12.666ZM16.0001 7.99935C15.2637 7.99935 14.6667 8.5963 14.6667 9.33268C14.6667 10.0691 15.2637 10.666 16.0001 10.666H16.0134C16.7498 10.666 17.3467 10.0691 17.3467 9.33268C17.3467 8.5963 16.7498 7.99935 16.0134 7.99935H16.0001Z" fill="#FF7506"/>
                            </svg>
                            </i></th>
                                 </tr>

                             )
                         })
                        }
                    </tbody>
                </table>
                
            <div className="footer">
                <p>
                    Hiển thị <input/> hàng trong mỗi trang
                </p>
            </div>
        </div>
    )
}
const mapState = (state:any)=>{
    return{
        active: state.active,
        subactive: state.subactive,
        boarddata: state.data
    }
}
const mapDispatch = (dispatch:any)=>{
    return{
        changeActiveMenuIcon: (e:any)=>{dispatch(changeActiveMenuIcon(e))}    ,
        datahaha: ()=>{dispatch(fetchthatmf())}                   
    }
}
export default connect(mapState,mapDispatch)(DSLH)