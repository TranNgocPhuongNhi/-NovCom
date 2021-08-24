import React from 'react';
import ListAside from '../particles/List-Aside';
import Pagination from '../particles/Pagination';
import Filter from '../particles/Filter';
import NewItemsCol4 from '../particles/NewItems-col4';
import data from '../components/dulieu.json';

class Followed extends React.Component {
    render() {
        return(
            <section id="followed">
                <Filter />
                <div className="container">
                    <div className="list-followed">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="list-novel-followed">
                                    <div className="list__container">
                                        <div className="list__header d-flex align-items-center justify-content-between">
                                            <div className="list__title d-flex align-items-center text-primary-color-2">
                                                <i className="far fa-eye"></i>
                                                <h1>tiểu thuyết theo dõi</h1>
                                            </div>
                                        </div>
                                        <div className="list__content">
                                            <div className="row">
                                                    {
                                                        data.map((value, key) => {
                                                            return (
                                                                <NewItemsCol4 key={key} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating}></NewItemsCol4>
                                                            )                                        
                                                        })
                                                    }
                                            </div>
                                        </div>
                                        <Pagination />
                                    </div>
                                </div>
                                <div className="list-comic-followed">
                                    <div className="list__container">
                                        <div className="list__header d-flex align-items-center justify-content-between">
                                            <div className="list__title d-flex align-items-center text-primary-color-2">
                                                <i className="far fa-eye"></i>
                                                <h1>truyện tranh theo dõi</h1>
                                            </div>
                                        </div>
                                        <div className="list__content">
                                            <div className="row">
                                                    {
                                                        data.map((value, key) => {
                                                            return (
                                                                <NewItemsCol4 key={key} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating}></NewItemsCol4>
                                                            )                                        
                                                        })
                                                    }
                                            </div>
                                        </div>
                                        <Pagination />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col-lg-4">
                                <ListAside />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Followed;