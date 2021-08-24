import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Detail from "../components/Detail";
import DieuHuongURL from '../router/DieuHuongURL';

class NewItemsCol4 extends React.Component {
    constructor(props) {
        super(props);
    }

    chuyenDoiURL = (str) => {
          // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
     
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
     
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
     
        // return
        return str;
    }

    render() {
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="list__item">
                    <a href={`/tieu-thuyet/${this.chuyenDoiURL(this.props.name)}`}>
                        <img src={this.props.image} alt="img novel or comic"></img>
                    </a>
                    <div className="list__description">
                        <a className="list__name" href={`/tieu-thuyet/${this.chuyenDoiURL(this.props.name)}`}>{this.props.name}</a>
                        <div className="list__info d-flex align-items-center justify-content-between">
                            <div className="list__info--left d-flex align-items-center">
                                <a className="list__info--chapter" href={`/tieu-thuyet/${this.chuyenDoiURL(this.props.name)}/chapter-${this.props.chapter}`}>Chapter {this.props.chapter}</a>
                                <span className="list__info--date">{this.props.day} ngày</span>
                            </div>
                            <div className="list__info--right">
                                <i className="fas fa-star"></i>
                                <span className="list__info--rate">{this.props.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NewItemsCol4;