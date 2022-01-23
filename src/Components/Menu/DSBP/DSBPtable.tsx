import React from 'react';

function DSBPtable(props:any) {
  return (
    <table className="Board">
    <thead className="Board-top">
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
  );
}

export default DSBPtable;
