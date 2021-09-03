import '../css/Home.css';
import React from 'react';
// import logo from '../img/logo.png';
// import vnFLag from '../img/vn flag.png';
// import englandFLag from '../img/england flag.png';
import Filter from '../particles/Filter';
import NewItemsCol3 from '../particles/NewItems-col3';
import data from '../components/dulieu.json';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Filter />
        <div className="container">
          <div id="novel">
            <div className="list__content">
              <div className="list__header d-flex align-items-center justify-content-between">
                  <div className="list__title d-flex align-items-center text-primary-color-2">
                      <i className="fal fa-book"></i>
                      <h1>tiểu thuyết</h1>
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
          <div id="comic">
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





        {/* <div className="home__choose-type d-flex">
          <a id="home__left" href="#">
            <span className="left-top">tiểu thuyết</span>
            <span className="left-bottom">tiểu thuyết</span>
            <h1 className="left-center">tiểu thuyết</h1>
          </a>
          <div href="#" id="home__right">
            <span className="right-top">truyện tranh</span>
            <span className="right-bottom">truyện tranh</span>
            <h1 className="right-center">truyện tranh</h1>
          </div>
        </div>

        <div className="home__choose-language">
            <div className="session-choose-language d-flex">
              <div className="home__choose-language--left">
                <div className="home__logo d-flex justify-content-center">
                  <img src={logo} alt="logo"></img>
                </div>
              </div>
              <div className="home__choose-language--right d-flex flex-column align-items-center">
                <h6 className="title-choose-language text-center">Chọn ngôn ngữ</h6>
                <div className="choose-language">
                  <img src={vnFLag} alt="cờ Việt Nam" className="flag"></img>
                  <img src={englandFLag} alt="cờ Anh" className="flag"></img>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    );
  };
};

export default Home;
