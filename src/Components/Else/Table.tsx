import React, { useState } from 'react'
import './Table.scss'
import Tablez from './Tablez'
function Table(props:any) {
    const [toggle,setToggle] = useState(false)
    const list1:Array<any> = [
        {title: "Thời gian" },
        {title: "Nội dung cập nhật" },
        {title: "Trạng thái" },
    ]
    const list2:Array<any>= [
        [   {title: "Thời gian" },
        {title: "Nội dung cập nhật" },
        {title: "Trạng thái" },
        ],
        [  {title: "Thời gian" },
        {title: "Nội dung cập nhật" },
        {title: "Trạng thái" },
        ]
    ]
      
    const icon = (e:any) => {
            setToggle(true)
    }
    return (
        <>
        <table className="Boardz">
        <thead className="Board-topz">
              <tr>
                  {
                      props.header.map((e:any,index:number) => {
                           return(
                            <th key={index}>{e.title}</th>
                           )
                      })
                  }
              </tr>
          </thead>
      <tbody >
      {
        props.body.map((e:any,index:number) => {
          return(
           <tr key={index} >

              {
               e.map((a:any,index:number) =>{
                 
                    return(
                       <th className="ngungapdung"
                        key={index}><span>{a.title}</span>                
                       </th>
                    )
                })
                                         
                 }
                <th>
                <i onClick={(e:any) =>{icon(e)}}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.0001 5.33268C9.97516 5.33268 5.33341 9.97442 5.33341 15.9993C5.33341 22.0243 9.97516 26.666 16.0001 26.666C22.025 26.666 26.6667 22.0243 26.6667 15.9993C26.6667 9.97442 22.025 5.33268 16.0001 5.33268ZM2.66675 15.9993C2.66675 8.63555 8.63628 2.66602 16.0001 2.66602C23.3639 2.66602 29.3334 8.63555 29.3334 15.9993C29.3334 23.3631 23.3639 29.3327 16.0001 29.3327C8.63628 29.3327 2.66675 23.3631 2.66675 15.9993ZM16.0001 12.666C16.7365 12.666 17.3334 13.263 17.3334 13.9993V22.666C17.3334 23.4024 16.7365 23.9993 16.0001 23.9993C15.2637 23.9993 14.6667 23.4024 14.6667 22.666V13.9993C14.6667 13.263 15.2637 12.666 16.0001 12.666ZM16.0001 7.99935C15.2637 7.99935 14.6667 8.5963 14.6667 9.33268C14.6667 10.0691 15.2637 10.666 16.0001 10.666H16.0134C16.7498 10.666 17.3467 10.0691 17.3467 9.33268C17.3467 8.5963 16.7498 7.99935 16.0134 7.99935H16.0001Z" fill="#FF7506"/>
                    </svg>
                </i>
                </th>
            </tr>
                    
            )
          })
          
      }      
      </tbody>
        </table>
       { toggle && <div className="popup">
            <div className="popupcontext">
                <i onClick={()=>{setToggle(false);}} 
                className="Xone">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M18.7869 3.85262C19.5159 3.12364 19.5159 1.94173 18.7869 1.21275C18.0579 0.483771 16.876 0.483771 16.1471 1.21275L10.0003 7.35949L3.85359 1.21275C3.12461 0.483771 1.9427 0.483771 1.21373 1.21275C0.484747 1.94173 0.484747 3.12364 1.21373 3.85262L7.36046 9.99935L1.21373 16.1461C0.484747 16.8751 0.484747 18.057 1.21373 18.7859C1.9427 19.5149 3.12461 19.5149 3.85359 18.7859L10.0003 12.6392L16.1471 18.7859C16.876 19.5149 18.0579 19.5149 18.7869 18.7859C19.5159 18.057 19.5159 16.8751 18.7869 16.1461L12.6402 9.99935L18.7869 3.85262Z" fill="#823B00"/>
                </svg>
                </i>
                <h2>Chi tiết biểu phí</h2>
                <div className="thuhocphi">
                    <h4>Thu học phí</h4>
                    <div className="mbp">
                        <h4>Mã biểu phí: <span>10_BHYT</span></h4>
                        <h4>Niên khóa: <span>2020 - 2023</span></h4>
                    </div>
                
                </div>
                    <ul>
                        <li>Hồ sơ ghi danh</li>
                        <li>Phí ghi danh</li>
                    </ul>
                <h5>Ngày cập nhật:<span>02/07/2021</span></h5>
                <Tablez  header={list1} body={list2}/>
                <p></p>
            </div>
        </div>}
       
        </>
    )
}
export default Table
