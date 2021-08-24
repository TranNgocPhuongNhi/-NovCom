import '../css/Footer.css';
import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer id="footer">
                <div className="footer__category">
                    <div className="container">
                        <ul className="footer__category-list d-flex flex-wrap align-items-center">
                            <li className="footer__category-item d-flex align-items-center">
                                <div className="square"></div>
                                <a className="footer__category-name" href="#">
                                    Đam mỹ
                                    <span className="total-relative-list">(30)</span>
                                </a>
                                <div className="square"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright">
                    <span>Thiết kế bởi Trần Ngọc Phương Nhi - 2021</span>
                </div>
            </footer>
        )
    }
}

export default Footer;