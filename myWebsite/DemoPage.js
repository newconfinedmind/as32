import React, { useContext, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { renderToStaticMarkup } from 'react-dom/server';
import { useParams } from 'react-router-dom';
import { AppContext } from './App';
import ChefIntroduction from './ChefIntroduction';
import MapExample from './MapExample';
import Review from './Review';
import Menu from './Menu';

import MyComponent from './App';


const DemoPage = () => {
    const { firebaseId, userData } = useContext(AppContext);



    const [navExpanded, setNavExpanded] = useState(false);
    const handleNavToggle = () => {
        setNavExpanded(!navExpanded);
    }





    return (
        <>

            <Website userData={userData}
                navExpanded={navExpanded}
                handleNavToggle={handleNavToggle}
                firebaseId={firebaseId}
                 />
        </>
    );
};





const Website = ({ userData, navExpanded, handleNavToggle,firebaseId }) => {
    const [selectedMenu, setSelectedMenu] = React.useState(null);




    const renderContent = () => {
        switch (selectedMenu) {
            case 'praise':
                return (
                    <div className="text-center">
                        <p className="font-weight-bold h4">여기는 미식가가 극찬한 맛집에 대한 내용입니다.</p>
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/artassign.appspot.com/o/public%2FKakaoTalk_20230607_235316696_09.jpg?alt=media&token=37016633-3fb1-4a19-b8cc-bb90e2849cbc" 
                            alt="Food critic" 
                            className="img-fluid rounded-circle mx-auto d-block"
                        />
                        <p className="mt-4">"이 식당의 음식은 정말 훌륭하다. 맛, 분위기, 서비스, 모든 것이 완벽하다. 이곳을 방문하는 것을 강력히 추천한다." - 미식가 황설환</p>
                    </div>
                );
            
            case 'reviews':
                return <div><Review /></div>
            case 'directions':
                return <>        <div style={{ textAlign: 'center', fontFamily: 'bold, sans-serif' }}>
                    반갑습니다. 대구광역시 달서구 새방로 77(용산동 6번지)입니다.
                </div>

                    <MapExample /></>
            case 'menu':
                return <div><Menu userData={userData} /></div>
            case 'reservation':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'Gothic, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '19px',
                        textAlign: 'center',
                        color: '#333',
                    }}>
                        <p>기다리지 말고 예약하세요. 당신의 소중한 시간을 아끼세요.</p>
                        <div style={{ marginTop: '10px' }}>
                            <p>식당 주인의 Instagram ID:</p>
                            <a
                                href={`instagram://user?username=${userData.instargramId}`}
                                style={{ color: '#0095f6', textDecoration: 'none' }}>
                                모바일에서 {userData.instargramId}
                            </a>
                            <span> | </span>
                            <a
                                href={`https://www.instagram.com/${userData.instargramId}`}
                                style={{ color: '#0095f6', textDecoration: 'none' }}>
                                웹에서 {userData.instargramId}
                            </a>
                            <p style={{ marginTop: '10px', color: 'red' }}>경고: 클릭 시 돌아올 수 없습니다!</p>
   
                        </div>
                    </div>
                );




            case 'team':
                return (
                    <ChefIntroduction userData={userData} />
                );

            case 'contact':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'Gothic, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '19px',
                        textAlign: 'center',
                        color: '#333',
                    }}>
                        <p>식당 전화번호: {userData.phoneNumber}</p>
                        <p>웹사이트 제작자에게 연락: newconfinedmind@gmail.com</p>
                        <p>식당 주인의 Instagram ID: {userData.instargramId}</p>
                        <p>문의 사항은 언제나 환영입니다~ DM주세요</p>
                    </div>
                );

                case 'link':
                    return (
                      <div>
                        <a href={`https://rendermine.web.app/user/${firebaseId}`}>
                          rendermine.web.app/user/{firebaseId}
                        </a>
                        <p>이 주소를 복사해두세요.</p>
                      </div>
                    );
                  default:
                    return null;    
        }
    }



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => setSelectedMenu(null)}>{userData.restaurantName} <img src={userData.brandImage} alt="Restaurant Logo" width="30" height="24" className="d-inline-block align-text-top" />
                       </a>
                    <button className="navbar-toggler" type="button" onClick={handleNavToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${navExpanded ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => setSelectedMenu('praise')}>미식가가 극찬한 맛집!</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setSelectedMenu('reviews')}>진솔한 후기</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setSelectedMenu('directions')}>찾아오는 길</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setSelectedMenu('menu')}>메뉴 소개</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setSelectedMenu('reservation')}>예약</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setSelectedMenu('link')}>링크</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setSelectedMenu('team')}>팀원 소개</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setSelectedMenu('contact')}>Contact Us</a>
                            </li>
                        </ul>
                    </div>




                </div>
            </nav>
            {renderContent()}
            {/* Add more HTML elements here */}
            {/* For images use photoInfo object */}


          
        </>
    );
}

export default DemoPage;

