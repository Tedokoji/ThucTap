import React from 'react'
import './Detailboard.scss'
function Detailboard(props:any) {
    return (
        <div className="detailboard-container">
            <h3 className="literallystudentname">
            Thông tin học viên
            </h3>
               <div className="detailboard-containerz">
               <div className="detail-board-infozz">
                    <h4>Họ và tên:<span>Bùi Thế Anh</span> </h4>
                    <h4>MSSV: <span>171 002 1234</span></h4>
                    <h4>Giới tính: <span>Nam</span></h4>
                    <h4>Ngày sinh: <span>25/08/1999</span></h4>
                </div>
                <div className="detail-board-infozz">
                    <h4>CMND: <span>123 1234 556</span> </h4>
                    <h4>Trạng thái: <span>Đang học</span></h4>
                    <h4>Chế độ miễn giảm: <span>Không</span></h4>
                    <h4>Mã hồ sơ: <span>DHCQ_171002</span></h4>
                </div>
                <div className="detail-board-infozz">
                    <h4>Loại hình đào tạo: <span>Chính quy</span> </h4>
                    <h4>Chương trình đào tạo: <span>Đại trà</span></h4>
                    <h4>Bậc đào tạo: <span>Đại học</span></h4>
                    <h4>Hệ đào tạo: <span>Tín chỉ</span></h4>
                </div>
                <div className="detail-board-infozz">
                    <h4>Khoa: <span>Kế toán - Kiểm toán</span> </h4>
                    <h4>Ngành: <span>Kế toán</span></h4>
                    <h4>Lớp: <span>KT_19A</span></h4>
                    <h4>Niên khóa: <span>2017-2021</span></h4>
                </div>
                </div>
            </div>
    )
}

export default Detailboard


