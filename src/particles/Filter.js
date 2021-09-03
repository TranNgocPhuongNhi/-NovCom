import '../css/Filter.css';
import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active_filter : false,
        }
    }

    // activeFilter = () => {
    //     if(this.state.active_filter === false) {
    //         console.log(false)
    //     }
    //     else {
    //         this.setState(state => ({active_filter: !state.active_filter}))
    //         console.log(true)
    //     }
    // }

    render() {
        return (
            <div id="filter">
                <div className="container">
                    <div className="filter-container">
                        <ul className="filter__list d-flex align-items-center">
                            <li className="filter__item">
                                <div className="filter__box d-flex align-items-center justify-content-between" >
                                    <span>Tình trạng</span>
                                    <i className="fal fa-angle-down"></i>
                                </div>
                                <ul className="filter__choose">
                                    <li>Tất cả</li>
                                    <li>Hoàn thành</li>
                                    <li>Đang cập nhật</li>
                                </ul>
                            </li>
                            <li className="filter__item">
                                <div className="filter__box d-flex align-items-center justify-content-between">
                                    <span>Thể loại</span>
                                    <i className="fal fa-angle-down"></i>
                                </div>
                                <ul className="filter__choose filter__choose--category">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3">
                                            <li>Fanfiction</li>
                                            <li>Hành động</li>
                                            <li>Người lớn</li>
                                            <li>Khoa học</li>
                                            <li>Lịch sử</li>
                                            <li>Hài hước</li>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <li>Manga</li>
                                            <li>Doujishin</li>
                                            <li>Harem</li>
                                            <li>Viễn tưởng</li>
                                            <li>Kinh dị</li>
                                            <li>Bách hợp</li>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <li>Manhua</li>
                                            <li>Cổ trang</li>
                                            <li>Xuyên không</li>
                                            <li>Tu tiên</li>
                                            <li>Huyền huyễn</li>
                                            <li>Đam mỹ</li>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <li>Manhwa</li>
                                            <li>Chuyển sinh</li>
                                            <li>Phiêu lưu</li>
                                            <li>Học đường</li>
                                            <li>Trinh thám</li>
                                            <li>Ngôn tình</li>
                                        </div>
                                    </div>

                                </ul>
                            </li>
                            <li className="filter__item">
                                <div className="filter__box d-flex align-items-center justify-content-between">
                                    <span>Bản dịch khác</span>
                                    <i className="fal fa-angle-down"></i>
                                </div>
                                <ul className="filter__choose">
                                    <li>Tiếng Anh</li>
                                    <li>Tiếng Trung</li>
                                    <li>Tiếng Nhật</li>
                                    <li>Tiếng Hàn</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-choosen d-flex align-items-center">
                            <li className="btn-green d-flex align-items-center justify-content-between">
                                <span>Hoàn thành</span>
                                <i className="fal fa-times btn-unchoose"></i>
                            </li>
                            <li className="btn-green d-flex align-items-center justify-content-between">
                                <span>Đam mỹ</span>
                                <i className="fal fa-times btn-unchoose"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;