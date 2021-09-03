import '../css/Header.css';
import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../img/logo.png';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div className="header__logo d-flex align-items-center justify-content-center">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <form id="search" className="d-flex justify-content-center">
                        <input type="text" id="search__text" placeholder="đam mỹ"></input>
                        <button className="btn-green">Tìm kiếm</button>
                    </form>
                    <ul className="control-bar d-flex">
                        <li className="control-bar__item">
                            <NavLink to="/">
                                <i className="fal fa-home-alt"></i>
                                <span>Trang chủ</span>
                            </NavLink>
                        </li>
                        <li className="control-bar__item">
                            <span className="at">/</span>
                            <NavLink to="/tieu-thuyet">
                                <span>Tiểu thuyết</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Navigation Bar */}
                <nav id="nav" className="d-flex justify-content-between">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav-link">
                                <i className="fal fa-home-alt"></i>
                                <p>Trang chủ</p>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/tieu-thuyet" className="nav-link">
                                <i className="fal fa-book"></i>
                                <p>Tiểu thuyết</p>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/truyen-tranh" className="nav-link">
                                <i className="fal fa-book-open"></i>
                                <p>Truyện tranh</p>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/truyen-theo-doi" className="nav-link">
                                <i className="far fa-eye"></i>
                                <p>Theo dõi</p>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="nav__adjust d-flex flex-column align-items-center justify-content-center">
                        <li className="adjust-theme d-flex align-items-center justify-content-center">
                            <i className="far fa-adjust"></i>
                        </li>
                        <li>
                            <span className="name-language d-flex justify-content-between">
                                <label id="vn">VN</label>
                                <label id="en">EN</label>
                            </span>
                            <label htmlFor="toggle-input" className="toggle">
                                <input type="checkbox" className="toggle__input" id="toggle-input"></input>
                                <div className="toggle__bar">
                                    <div className="toggle__spin"></div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </nav>
            
                <aside className="aside-form">
                    <ul className="btn-sign-up-in-out">
                        <li className="btn-sign-up">
                            <button className="bg-primary-color-2">
                                <i className="fal fa-pen"></i>
                            </button>
                            <span className="text-primary-color-2">Đăng ký</span>
                        </li>
                        <li className="btn-sign-in">
                            <button className="bg-primary-color-1">
                                <i className="fal fa-sign-in-alt"></i>
                            </button>
                            <span className="text-primary-color-1">Đăng nhập</span>
                        </li>
                        {/* Dùng cái này sau đăng nhập */}
                        {/* <li className="btn-sign-out">
                            <button className="bg-primary-color-2">
                                <i className="fal fa-sign-out-alt"></i>
                            </button>
                            <span className="text-primary-color-2">Đăng xuất</span>
                        </li> */}
                    </ul>

                    {/* Form đăng ký */}
                    {/* <form id="form-sign-up">
                        <div className="form-group">
                            <input type="text" placeholder="abc123"></input>
                            <label htmlFor="sign-up">Đăng ký</label>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="123456"></input>
                            <label htmlFor="password">Mật khẩu</label>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="123456"></input>
                            <label htmlFor="re-password">Nhập lại mật khẩu</label>
                        </div>
                        <div className="sign-up-with-others d-flex justify-content-center align-items-center">
                           <button className="facebook">
                                <i className="fab fa-facebook-f"></i>
                                Facebook
                            </button>
                           <button className="google">
                               <i className="fab fa-google"></i>
                               Google
                            </button>
                       </div>
                    </form> */}
                </aside>
                
            </header>
        );
    };
};

export default Header;