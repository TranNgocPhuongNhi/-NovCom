import React from 'react';
import Filter from '../particles/Filter';
import Pagination from '../particles/Pagination.js';
import NewItemsCol3 from '../particles/NewItems-col3';
import data from '../components/dulieu.json';

class All extends React.Component {
    render() {
        return(
            <section id="all">
                <Filter/>
                <div className="container">
                    {/* Tất cả truyện */}
                    <div className="all">
                        <div className="list__content">
                            <div className="list__header d-flex align-items-center justify-content-between">
                                <div className="list__title d-flex align-items-center text-primary-color-2">
                                    <i className="fas fa-list"></i>
                                    <h1>tất cả truyện</h1>
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
                            {/* Phân trang */}
                            <Pagination/>
                        </div>
                    </div>

                    {/* Truyện tranh */}
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

export default All;