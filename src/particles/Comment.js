import '../css/Comment.css';
import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div id="comment">
                <div className="list__header d-flex align-items-center justify-content-between">
                    <div className="list__title d-flex align-items-center text-primary-color-2">
                        <i class="fas fa-comments-alt"></i>
                        <h1>bình luận</h1>
                    </div>
                </div>
                <div className="comment__content">
                    <div className="comment__of-user d-flex justify-content-between">
                        <img className="comment__img-user" src="https://i.pinimg.com/564x/78/16/b3/7816b31384098d1f06a0d8697b77e642.jpg" alt="img user" />
                        <textarea className="comment__textarea" type="text" placeholder="Bình luận của bạn"></textarea>
                    </div>
                    <div className="comment__others">
                        <ul className="comment__others-list">
                            <li className="comment__others-item d-flex">
                                <img className="comment__img-other-user" src="https://i.pinimg.com/564x/e4/73/19/e473190bc94ce446e9dc637cb242bca8.jpg" alt="img user" />
                                <div className="comment__others--content">
                                    <h5 className="comment__others--name">Tiêu Sách An</h5>
                                    <p className="comment__others--comment">Đây là nội dung bình luận</p>
                                    <div className="comment__others--interact d-flex align-items-center">
                                        <div className="comment__others--interact-left comment__others--like">
                                            <i class="fas fa-heart"></i>
                                            <span className="total-like">520</span>
                                        </div>
                                        <div className="comment__others--interact-right d-flex">
                                            <span className="comment__time">1 phút</span>
                                            <div className="comment__others--reply">
                                                <i class="fas fa-reply"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                        {/* Read more comments */}
                        <button className="show-more">Đọc thêm bình luận</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;