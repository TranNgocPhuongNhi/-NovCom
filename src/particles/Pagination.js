import '../css/Pagination.css';
import React from 'react';

class Pagination extends React.Component {
    render() {
        return (
            <section id="pagination">
                <ul className="list__pagination d-flex align-items-center justify-content-center">
                    <li className="list__pagination-item btn-prev btn-disable">
                        <i className="fal fa-chevron-left"></i>
                    </li>
                    <li className="list__pagination-item">
                        <ul className="list__pagination--number-page d-flex align-items-center">
                            <li className="active-page">1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </li>
                    <li className="list__pagination-item btn-next">
                        <i className="fal fa-chevron-right"></i>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Pagination;