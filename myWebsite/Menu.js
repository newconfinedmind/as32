import React, { useState } from 'react';

function Menu(props) {
    const { userData } = props;
    const [isDescriptionVisible, setDescriptionVisibility] = useState(false);

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '2rem'}}>
            <div style={{flex: '0.45'}}>
                <img src={userData.foodImage1} alt="foodImage1" style={{width: '100%'}}/>
                <p>{userData.menu1Name}</p>
                <button onClick={() => setDescriptionVisibility(!isDescriptionVisible)}>
                    {isDescriptionVisible ? '소개글 감추기' : '소개글 보기'}
                </button>
                {isDescriptionVisible && (
                    <p>진정한 맛의 향연을 즐기고 싶다면 이 {userData.firstName} 학생이 만든 음식을 놓치지 마세요. 
                    촉촉한 육즙이 입 안 가득 퍼지면서 독특하고 구수한 향기가 느껴지는 순간, 맛의 환상이 시작됩니다. 
                    아직도 이 맛을 상상하지 못한다구요? 그럼 실제로 한 번 먹어보세요. 
                    그래야 진짜 맛의 세계를 깨닫게 될 것입니다. 그리고 솔직히 말해서, 이 맛을 한 번만 먹어본다면 
                    생각보다 더욱 중독성 있을지도 모릅니다. 아! 그리고 이런, 재미있는 사실이 있어요. 
                    이 메뉴를 먹으면서 웃음이 나오지 않는 사람을 본 적이 없답니다. 진짜로요!
                  
                     </p>
                )}
            </div>
            <div style={{flex: '0.45'}}>
                <img src={userData.foodImage2} alt="foodImage2" style={{width: '100%'}}/>
                <p>{userData. menu2Name} </p>
                <button onClick={() => setDescriptionVisibility(!isDescriptionVisible)}>
                    {isDescriptionVisible ? '소개글 감추기' : '소개글 보기'}
                </button>
                {isDescriptionVisible && (
                    <p>
이 세상에서 가장 맛있는 음식을 만들었다면, 그 주인공은 바로 {userData.secondName} 학생일 것입니다. 
  이 음식의 놀라운 맛은 그저 그렇게 간단히 설명할 수 있는 것이 아니라, 실제로 먹어봐야만 이해할 수 있습니다. 
  그런데 한 가지 경고하자면, 이 메뉴를 먹은 후에는 다른 음식을 먹을 수 없을지도 모른다는 거예요. 
  그만큼 이 음식의 맛은 강렬하고 독특하니까요. 그래서 이 메뉴를 먹은 사람들은 대부분 
  "{userData.secondName} 학생의 메뉴만큼 맛있는 음식을 먹어본 적이 없다"라고 말하죠. 그리고 알려드리는데, 
  이 음식을 먹다 보면 감탄사와 함께 웃음이 나온다고 합니다. 그만큼 행복한 맛이랍니다!



                     </p>
                )}
            </div>
        </div>
    );
}

export default Menu;
