import React, { useState } from 'react'

function TableBP(props:any) {
    const [ischeck,setIscheck] = useState(false) 
    const check =()=>{setIscheck(!ischeck) }

   
    return (
        <table className="Boarde">
        <thead className="Board-tope">
              <tr>
              {
                 props.header.map((e:any,index:number) => {
                           if (index===0)return(
                               <th key={index}>
                                   <i onClick={check}>
                                  { ischeck === 
                                  true? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0B80EC"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M18.7955 6.7045C19.2348 7.14384 19.2348 7.85616 18.7955 8.2955L10.5455 16.5455C10.1062 16.9848 9.39384 16.9848 8.9545 16.5455L5.2045 12.7955C4.76517 12.3562 4.76517 11.6438 5.2045 11.2045C5.64384 10.7652 6.35616 10.7652 6.7955 11.2045L9.75 14.159L17.2045 6.7045C17.6438 6.26517 18.3562 6.26517 18.7955 6.7045Z" fill="white"/>
                                  <path d="M4 2H20V-2H4V2ZM22 4V20H26V4H22ZM20 22H4V26H20V22ZM2 20V4H-2V20H2ZM4 22C2.89543 22 2 21.1046 2 20H-2C-2 23.3137 0.686292 26 4 26V22ZM22 20C22 21.1046 21.1046 22 20 22V26C23.3137 26 26 23.3137 26 20H22ZM20 2C21.1046 2 22 2.89543 22 4H26C26 0.686291 23.3137 -2 20 -2V2ZM4 -2C0.686291 -2 -2 0.686292 -2 4H2C2 2.89543 2.89543 2 4 2V-2Z" fill="#0B80EC"/>
                                  </svg>
                                  
                                  :<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="white"/>
<path d="M4 2H20V-2H4V2ZM22 4V20H26V4H22ZM20 22H4V26H20V22ZM2 20V4H-2V20H2ZM4 22C2.89543 22 2 21.1046 2 20H-2C-2 23.3137 0.686292 26 4 26V22ZM22 20C22 21.1046 21.1046 22 20 22V26C23.3137 26 26 23.3137 26 20H22ZM20 2C21.1046 2 22 2.89543 22 4H26C26 0.686291 23.3137 -2 20 -2V2ZM4 -2C0.686291 -2 -2 0.686292 -2 4H2C2 2.89543 2.89543 2 4 2V-2Z" fill="#0B80EC"/>
                                    </svg>}
                                   </i>

                               </th>
                           )
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
                if (index===0)return(
                    <th key={index}>
                        <i onClick={check}>
                        { ischeck === 
                                  true? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0B80EC"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M18.7955 6.7045C19.2348 7.14384 19.2348 7.85616 18.7955 8.2955L10.5455 16.5455C10.1062 16.9848 9.39384 16.9848 8.9545 16.5455L5.2045 12.7955C4.76517 12.3562 4.76517 11.6438 5.2045 11.2045C5.64384 10.7652 6.35616 10.7652 6.7955 11.2045L9.75 14.159L17.2045 6.7045C17.6438 6.26517 18.3562 6.26517 18.7955 6.7045Z" fill="white"/>
                                  <path d="M4 2H20V-2H4V2ZM22 4V20H26V4H22ZM20 22H4V26H20V22ZM2 20V4H-2V20H2ZM4 22C2.89543 22 2 21.1046 2 20H-2C-2 23.3137 0.686292 26 4 26V22ZM22 20C22 21.1046 21.1046 22 20 22V26C23.3137 26 26 23.3137 26 20H22ZM20 2C21.1046 2 22 2.89543 22 4H26C26 0.686291 23.3137 -2 20 -2V2ZM4 -2C0.686291 -2 -2 0.686292 -2 4H2C2 2.89543 2.89543 2 4 2V-2Z" fill="#0B80EC"/>
                                  </svg>
                                  
                                  :<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="white"/>
<path d="M4 2H20V-2H4V2ZM22 4V20H26V4H22ZM20 22H4V26H20V22ZM2 20V4H-2V20H2ZM4 22C2.89543 22 2 21.1046 2 20H-2C-2 23.3137 0.686292 26 4 26V22ZM22 20C22 21.1046 21.1046 22 20 22V26C23.3137 26 26 23.3137 26 20H22ZM20 2C21.1046 2 22 2.89543 22 4H26C26 0.686291 23.3137 -2 20 -2V2ZM4 -2C0.686291 -2 -2 0.686292 -2 4H2C2 2.89543 2.89543 2 4 2V-2Z" fill="#0B80EC"/>
                                    </svg>}
                        </i>

                    </th>
                )
                    return(
                       <th key={index}><span>{a.title}</span></th>
                    )
                })
                                         
                 }
               
            </tr>
                    
            )
          })
          
      }      
      </tbody>
  </table>
    )
}

export default TableBP
