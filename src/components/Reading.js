import '../css/Reading.css';
import React from 'react';
import Comment from '../particles/Comment.js'

class Reading extends React.Component {
    render() {
        return (
            <section id="reading-and-comment">
                <div className="container">
                    {/* Section reading */}
                    <div id="reading">
                        {/* Reading Navigation Top */}
                        <ul className="reading__navigation d-flex align-items-center justify-content-center">
                            <li className="reading__navigation-item btn-reading-nav">
                                <i className="fal fa-chevron-left"></i>
                            </li>
                            <li className="reading__navigation-item">
                                <select className="reading__navigation-select-chapter">
                                    <option value="Chapter 3">Chapter 3</option>
                                    <option value="Chapter 2">Chapter 2</option>
                                    <option value="Chapter 1">Chapter 1</option>
                                </select>
                            </li>
                            <li className="reading__navigation-item btn-reading-nav">
                                <i className="fal fa-chevron-right"></i>
                            </li>
                        </ul>

                        {/* Section reading novel or comic */}
                        <div className="reading__content">
                            {/* Đọc tiểu thuyết */}
                            <div className="reading__novel">
                                <h1 className="name-novel">Thiên quan tứ phúc</h1>
                                <h3 className="chapter-number">Chapter 1</h3>
                                <div className="novel-content">nội dung tiểu thuyết ở đây!!!</div>
                            </div>

                            {/* Đọc truyện tranh */}
                            {/* <div className="reading__comic">
                                <h1 className="name-comic">Thiên quan tứ phúc</h1>
                                <h3 className="chapter-number">Chapter 1</h3>
                                <div className="comic-content"></div>
                            </div> */}
                        </div>

                        {/* Reading Navigation Bottom */}
                        <ul className="reading__navigation d-flex align-items-center justify-content-center">
                            <li className="reading__navigation-item btn-reading-nav">
                                <i className="fal fa-chevron-left"></i>
                            </li>
                            <li className="reading__navigation-item">
                                <select className="reading__navigation-select-chapter">
                                    <option value="Chapter 3">Chapter 3</option>
                                    <option value="Chapter 2">Chapter 2</option>
                                    <option value="Chapter 1">Chapter 1</option>
                                </select>
                            </li>
                            <li className="reading__navigation-item btn-reading-nav">
                                <i className="fal fa-chevron-right"></i>
                            </li>
                        </ul>
                    </div>
                
                    {/* Section comment */}
                    <Comment />
                </div>
            </section>
        )
    }
}

export default Reading;