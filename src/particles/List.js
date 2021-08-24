import '../css/List.css';
import React from 'react';
import ListAside from './List-Aside.js';
import NewItemsCol3 from './NewItems-col3';
import NewItemsCol4 from './NewItems-col4';
import data from '../components/dulieu.json';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

class List extends React.Component {
    render() {
        return (
            <section id="list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="list-updated">
                                <div className="list__container">
                                    <div className="list__header d-flex align-items-center justify-content-between">
                                        <div className="list__title d-flex align-items-center text-primary-color-2">
                                            <i class="fas fa-stars"></i>
                                            <h1>mới cập nhật</h1>
                                        </div>
                                        <NavLink to="/tat-ca-truyen" className="list__see-more">
                                            <span>Xem thêm</span>
                                            <i className="fal fa-long-arrow-right"></i>
                                        </NavLink>
                                    </div>
                                    <div className="list__content">
                                        <div className="row">
                                                {
                                                    data.map((value, key) => {
                                                        return (
                                                            <NewItemsCol4 key={key} id={value.id} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating}></NewItemsCol4>
                                                        )                                        
                                                    })
                                                }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-hot">
                                <div className="list__container">
                                    <div className="list__header d-flex align-items-center justify-content-between">
                                        <div className="list__title d-flex align-items-center text-primary-color-2">
                                            <i class="fas fa-fire"></i>
                                            <h1>truyện hot</h1>
                                        </div>
                                        <a href="#" className="list__see-more">
                                            <span>Xem thêm</span>
                                            <i className="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="list__content">
                                        <div className="row">
                                            {
                                                data.map((value, key) => {
                                                    return (
                                                        <NewItemsCol4 key={key} id={value.id} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating}></NewItemsCol4>
                                                    )                                        
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-lg-4">
                            <ListAside />
                        </div>
                    </div>

                    <div className="other-list">
                        <div className="list__content">
                            <div className="list__header d-flex align-items-center justify-content-between">
                                <div className="list__title d-flex align-items-center text-primary-color-2">
                                    <i class="fas fa-book-open"></i>
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
                                            <NewItemsCol3 key={key} id={value.id} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating}></NewItemsCol3>
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

export default List;