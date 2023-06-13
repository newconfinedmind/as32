import React, { useState } from 'react';

function ChefIntroduction(props) {
    const { userData } = props;
    const [isDescriptionVisible, setDescriptionVisibility] = useState(false);

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '2rem'}}>
            <div style={{flex: '0.45'}}>
                <img src={userData.restaurantOwnerImage1} alt="restaurantOwnerImage1" style={{width: '100%'}}/>
                <p>{userData.firstClassNumber}{userData.firstName}</p>
                <button onClick={() => setDescriptionVisibility(!isDescriptionVisible)}>
                    {isDescriptionVisible ? '소개글 감추기' : '소개글 보기'}
                </button>
                {isDescriptionVisible && (
                    <p>
                    {userData.firstName} 학생, 경원고등학교의 자랑. 그는 진정한 요리의 거장으로, 그의 지능과 열정이 만나 탄생한 레시피는 완벽한 조화를 이룹니다. 그는 어떤 재료를 가지고도 예술적인 요리로 성숙시킬 수 있는 탁월한 기술을 보유하고 있습니다. 그의 끊임없는 탐구와 실험은 요리의 경계를 무한히 넓혀가고 있으며, 그의 창조적이고 혁신적인 요리 스타일은 많은 이들에게 영감을 줍니다. 그의 요리는 그 자체로 삶의 진실을 표현하는 가치있는 작품입니다.
                    </p>
                )}
            </div>
            <div style={{flex: '0.45'}}>
                <img src={userData.restaurantOwnerImage2} alt="restaurantOwnerImage2" style={{width: '100%'}}/>
                <p>{userData.secondClassNumber}{userData.secondName} </p>
                <button onClick={() => setDescriptionVisibility(!isDescriptionVisible)}>
                    {isDescriptionVisible ? '소개글 감추기' : '소개글 보기'}
                </button>
                {isDescriptionVisible && (
                    <p>
                    {userData.secondName} 학생, 경원고등학교의 또 다른 특급 셰프. 그는 요리의 미학을 통찰하고 이를 통해 완벽한 경험을 제공합니다. 그의 뛰어난 감각은 가게 곳곳에 녹아있으며, 그의 친절한 서비스는 고객들에게 웃음을 선사합니다. 그는 요리에 대한 사랑이 가득하며, 그의 요리는 그의 정성이 그대로 담겨 있습니다. 그는 고객의 만족을 위해 끊임없이 노력하고 그의 노력은 가게의 모든 곳에서 느껴집니다.{userData.secondName}  학생의 요리는 그의 열정과 사랑을 그대로 표현하여 고객의 기억에 오래도록 남습니다.
                    </p>
                )}
            </div>
        </div>
    );
}

export default ChefIntroduction;
