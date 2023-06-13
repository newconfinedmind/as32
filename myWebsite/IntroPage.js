import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const IntroPage = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/userinfo");
    }




    return (
        <div className="container p-3">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to My Website!</h1>
            <p className="lead">
              이 웹사이트는 미술 시간에 기획한 레스토랑 홈페이지를 만드는 데 사용할 수 있는 간단하고 빠르며 사용하기 쉬운 도구입니다. 이 도구를 사용하면, 당신은 반응형 홈페이지를 쉽고 빠르게 만들 수 있습니다. 
              정보를 입력창에 입력하고, 1분도 안 되는 시간 내에 데이터 업로드부터 호스팅까지 간편하게 완료하세요. 웹사이트를 홍보하고 식당을 성장시키세요.
              웹사이트를 만들어 보았다는 경험은 과목별 세부 능력 및 특기 사항에 긍정적으로 작용할 것입니다.
              본 웹사이트에 대한 궁금증이나 더 많은 정보가 필요하다면 망설이지 말고 문의해 주세요!
            </p>
            <button onClick={handleNextClick} className="btn btn-primary">Next</button>
          </div>
        </div>
      );
      
}

export default IntroPage;
