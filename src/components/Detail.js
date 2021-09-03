import '../css/Detail.css';
import React from 'react';
import NewItemsCol3 from '../particles/NewItems-col3';
import data from '../components/dulieu.json';

class Detail extends React.Component {
    render() {
        // const tab_content = document.querySelectorAll('.tab-content div');
        // const tab_items = document.querySelectorAll('.tab-item');
    
        // tab_items.forEach((tab, index) => {
        //     tab.addEventListener('click', () => {
        //         hideAllContents()
        //         hideAllItems()
    
        //         tab.classList.add('active-panel')
        //         tab_content[index].classList.add('show')
    
        //     })
        // })
    
        // function hideAllContents() {
        //     tab_content.forEach(content => content.classList.remove('show'))
        // }
    
        // function hideAllItems() {
        //     tab_items.forEach(item => {
        //         item.classList.remove('active-panel')
        //     })
        // }    


        data.forEach((value, key) => {
            console.log(value.name)
        })


        return (
            <section id="detail">
                <div className="detail__info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="detail__img">
                                    <img src="https://i.pinimg.com/564x/91/82/af/9182afe9b904ec14285cd96e2fd422c5.jpg" alt="img novel or comic"/>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="detail__description">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="detail__description--left">
                                                <h1 className="detail__name">Thiên quan tứ phúc</h1>
                                                <h4 className="detail__author-name">Mặc Hương Đồng Khứu</h4>
                                                <div className="detail__description-item">
                                                    <h5>Thể loại</h5>
                                                    <ul className="detail__description-list d-flex align-items-center">
                                                        <li className="detail__description-list-item">Đam mỹ</li>
                                                        <li className="detail__description-list-item">Cổ trang</li>
                                                        <li className="detail__description-list-item">HE</li>
                                                    </ul>
                                                </div>
                                                <div className="detail__description-item">
                                                    <h5>Các bản dịch</h5>
                                                    <ul className="detail__description-list d-flex align-items-center">
                                                        <li className="detail__description-list-item">Tiếng Việt</li>
                                                        <li className="detail__description-list-item">Tiếng Anh</li>
                                                        <li className="detail__description-list-item">Tiếng Trung</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="detail__description--right">
                                                <div className="detail__rating-bookmark d-flex justify-content-between">
                                                    <div className="detail__rating d-flex flex-column align-items-center justify-content-between">
                                                        <ul className="detail__star-list d-flex align-items-center">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="far fa-star"></i></li>
                                                        </ul>
                                                        <h1 className="detail__rating--total">4.8</h1>
                                                    </div>
                                                    <div className="detail__bookmark">
                                                        <i className="fas fa-bookmark"></i>
                                                    </div>
                                                </div>
                                                <div className="detail__status">
                                                    <h5>Trạng thái</h5>
                                                    <p className="detail__status--detail status-completed">Đã hoàn thành</p>
                                                    {/* status-updating: Đang tiến hành */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* Tab detail of novel or comic */}
                    <div className="tab-container">
                        <ul className="tab d-flex align-items-center">
                            <li className="tab-item active-panel">Giới thiệu truyện</li>
                            <li className="tab-item">
                                Danh sách truyện
                                {/* <i className="fal fa-sort-amount-up"></i> */}
                                <i className="fal fa-sort-amount-down"></i>
                            </li>
                            <li className="tab-item">Cùng tác giả</li>
                            <li className="tab-item">Bản dịch khác</li>
                        </ul>
                        
                        {
                            // Chuyển tạm thành forEach để khỏi hiện dữ liệu
                            data.forEach((value, key) => {
                                return(
                                    <div className="tab-content">
                                        <div id="tab-introduction" className="content show">
                                            <p className="introduction-content">
                                                {value.brief}
                                            </p>
                                            <button className="show-more">Đọc thêm</button>
                                        </div>
                                        {/* Danh sách truyện */}
                                        <div id="tab-list" className="content">
                                            <ul className="list-chapter d-flex flex-wrap">
                                                <li className="chapter-item d-flex align-items-center">
                                                    <a className="chapter" href="#">Chapter {value.chapter}</a>
                                                    <div className="chapter-info">
                                                        <p className="date-updated-chapter">{value.updatedDate}</p>
                                                        <p className="total-read-chapter">
                                                            <i className="far fa-eye"></i>
                                                            <span>{value.seen}</span>
                                                        </p>
                                                    </div>
                                                </li>       
                                            </ul>
                                            
                                        </div>
                                        {/* Cùng tác giả */}
                                        <div id="tab-author" className="content">
                                            <ul className="same-author d-flex flex-wrap align-items-center">
                                                {/* Kiểm tra nếu cùng tác giả thì lấy ra - CHƯA LÀM */}
                                                <li className="same-author-item">
                                                    <a href="#" className=" d-flex flex-column align-items-center">
                                                        <img src={value.image} alt="img novel or comic" />
                                                        <h5>{value.name}</h5>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Bản dịch khác */}
                                        <div id="tab-others-translate" className="content">
                                            <ul className="same-author d-flex flex-wrap">
                                                <li className="same-author-item">
                                                    <a href="#" className=" d-flex flex-column align-items-center">
                                                        <img src="https://i.pinimg.com/564x/91/82/af/9182afe9b904ec14285cd96e2fd422c5.jpg" alt="img novel or comic" />
                                                        <h5>Tian guan ci fu</h5>
                                                    </a>
                                                </li>
                                                <li className="same-author-item">
                                                    <a href="#" className=" d-flex flex-column align-items-center">
                                                        <img src="https://i.pinimg.com/564x/91/82/af/9182afe9b904ec14285cd96e2fd422c5.jpg" alt="img novel or comic" />
                                                        <h5>Heaven Official's Blessing</h5>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                    </div>
                
                    {/* Có thể bạn thích */}
                    <div className="may-be-you-like">
                        <div className="list__content">
                            <div className="list__header d-flex align-items-center justify-content-between">
                                <div className="list__title d-flex align-items-center text-primary-color-2">
                                    <i className="fas fa-heart"></i>
                                    <h1>có thể bạn thích</h1>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    data.map((value, key) => {
                                        return (
                                            <NewItemsCol3 key={key} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating}></NewItemsCol3>
                                        )                                        
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    {/* Truyện tranh của tiểu thuyết và ngược lại*/}
                    <div className="other-list">
                        <div className="list__content">
                            <div className="list__header d-flex align-items-center justify-content-between">
                                <div className="list__title d-flex align-items-center text-primary-color-2">
                                    <i className="fas fa-book-open"></i>
                                    <h1>truyện tranh</h1>
                                </div>
                                <a href="#" className="list__see-more">
                                    <span>Xem thêm</span>
                                    <i className="fal fa-long-arrow-right"></i>
                                </a>
                            </div>
                            <div className="row">
                                {
                                    data.map((value, key) => {
                                        return (
                                            <NewItemsCol3 key={key} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating}></NewItemsCol3>
                                        )                                        
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Detail;