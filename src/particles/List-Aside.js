import '../css/List-Aside.css';
import React from 'react';
import AsideItems from './AsideItems';
import data from '../components/dulieu.json';

class ListAside extends React.Component {
    render() {
        return (
            <aside id="list-aside">
                <div id="history">
                    <div className="list-aside__header d-flex align-items-center justify-content-between">
                        <div className="list-aside__title">Lịch sử đọc</div>
                        <a className="list-aside__read-more" href="#">Xem thêm</a>
                    </div>
                    <ul className="list-aside__content">
                        {
                            data.map((value, key) => {
                                return(
                                    <AsideItems key={key} id={value.id} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating} ></AsideItems>
                                )
                            })
                        }
                    </ul>
                </div>
                <div id="read-most">
                    <div className="list-aside__header d-flex align-items-center justify-content-between">
                        <div className="list-aside__title">Đọc nhiều nhất</div>
                    </div>
                    <ul className="list-aside__content">
                        {
                            data.map((value, key) => {
                                return(
                                    <AsideItems key={key} id={value.id} image={value.image} name={value.name} chapter={value.chapter} day={value.day} rating={value.rating} ></AsideItems>
                                )
                            })
                        }
                    </ul>
                </div>
                
            </aside>
        )
    }
}

export default ListAside;