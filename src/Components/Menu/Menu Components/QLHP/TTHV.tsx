import React from 'react'
import { useNavigate } from 'react-router-dom'
import Detailboard from '../../../Else/Detailboard'
import Logout from '../../../Else/Logout'
import TrueTable from '../../../Else/TrueTable'

function TTHV() {
    const list3:Array<any> = [
        {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" },{title: "Chi tiết" },
    ]
    const list4:Array<any> = [
        [    {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" }],
        [    {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" }],
        [    {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" }],
        [    {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" }],
        [    {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" }],
        [    {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" }],
        [    {title: "STT" },
        {title: "Số phiếu" },
        {title: "Mã hóa đơn" },
        {title: "Ngày thu" },
        {title: "Số tiền" },
        {title: "Hình thức thu" },
        {title: "Đơn vị thu" }],
        
        
   
    ]
    const navi = useNavigate()
    return (
        <div className="Context">
            <Logout/>
            <div className="history">
                    <p className="root">Quản lí học phí</p>
                    <i className="rootar">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.580593 16.9557C1.06875 17.4439 1.8602 17.4439 2.34836 16.9557L9.41943 9.88464C9.90759 9.39649 9.90759 8.60503 9.41943 8.11687L2.34836 1.0458C1.86021 0.557648 1.06875 0.557649 0.580594 1.0458C0.0924397 1.53396 0.0924387 2.32542 0.580594 2.81357L6.23745 8.47043C6.53034 8.76332 6.53034 9.23819 6.23745 9.53109L0.580594 15.1879C0.0924395 15.6761 0.0924384 16.4676 0.580593 16.9557Z" fill="#FF7506"/>
                    </svg>
                    </i>
                    <p style={{"cursor":"pointer"}}
                    onClick={()=>{
                        navi('/QLHP-Danh%20s%C3%A1ch%20l%E1%BB%9Bp%20h%E1%BB%8Dc')
                    }}
                     className="root-subsub">...</p>
                    <i className="rootar">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.580593 16.9557C1.06875 17.4439 1.8602 17.4439 2.34836 16.9557L9.41943 9.88464C9.90759 9.39649 9.90759 8.60503 9.41943 8.11687L2.34836 1.0458C1.86021 0.557648 1.06875 0.557649 0.580594 1.0458C0.0924397 1.53396 0.0924387 2.32542 0.580594 2.81357L6.23745 8.47043C6.53034 8.76332 6.53034 9.23819 6.23745 9.53109L0.580594 15.1879C0.0924395 15.6761 0.0924384 16.4676 0.580593 16.9557Z" fill="#FF7506"/>
                    </svg>
                    </i>
                    <p style={{"cursor":"pointer"}}
                    onClick={()=>{
                        navi('/QLHP-Danh%20s%C3%A1ch%20l%E1%BB%9Bp%20h%E1%BB%8Dc')
                    }}
                     className="root-subsub">Chi tiết lớp học</p>
                    <i className="rootar">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.580593 16.9557C1.06875 17.4439 1.8602 17.4439 2.34836 16.9557L9.41943 9.88464C9.90759 9.39649 9.90759 8.60503 9.41943 8.11687L2.34836 1.0458C1.86021 0.557648 1.06875 0.557649 0.580594 1.0458C0.0924397 1.53396 0.0924387 2.32542 0.580594 2.81357L6.23745 8.47043C6.53034 8.76332 6.53034 9.23819 6.23745 9.53109L0.580594 15.1879C0.0924395 15.6761 0.0924384 16.4676 0.580593 16.9557Z" fill="#FF7506"/>
                    </svg>
                    </i>
                    <h1 className="root-sub">Chi tiết học viên</h1>
            </div>
            <Detailboard/>
            <h2 className="dshv color">
            Thông tin học viên
            </h2>
            <TrueTable header={list3} body={list4}/>
        </div>
    )
}

export default TTHV
