import React, { useContext,useEffect     } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './App';
import './App.css';

const UserInfoPage = () => {
    const { userInfo, setUserInfo, submitUserInfo } = useContext(AppContext);
    const navigate = useNavigate();

  




    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveClick = async () => {
      await submitUserInfo();
    };
    
    const handleNextClick = () => {
        navigate("/photoUpload");
    };

    return (
        <div className="container p-3">
            <h1 className="text-center">Enter your information</h1>
            <form className="d-flex flex-column gap-3">
                <div className="form-group">
                    <label>Restaurant Name:</label>
                    <input className="form-control" name="restaurantName" type="text" value={userInfo.restaurantName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Restaurant Description:</label>
                    <input className="form-control" name="restaurantDesc" type="text" value={userInfo.restaurantDesc} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>First Name:</label>
                    <input className="form-control" name="firstName" type="text" value={userInfo.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>First Class Number:</label>
                    <input className="form-control" name="firstClassNumber" type="text" value={userInfo.firstClassNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Second Name:</label>
                    <input className="form-control" name="secondName" type="text" value={userInfo.secondName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Second Class Number:</label>
                    <input className="form-control" name="secondClassNumber" type="text" value={userInfo.secondClassNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Menu 1 Name:</label>
                    <input className="form-control" name="menu1Name" type="text" value={userInfo.menu1Name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Menu 1 Description:</label>
                    <input className="form-control" name="menu1Desc" type="text" value={userInfo.menu1Desc} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Menu 2 Name:</label>
                    <input className="form-control" name="menu2Name" type="text" value={userInfo.menu2Name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Menu 2 Description:</label>
                    <input className="form-control" name="menu2Desc" type="text" value={userInfo.menu2Desc} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input className="form-control" name="phoneNumber" type="text" value={userInfo.phoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Instargram ID:</label>
                    <input className="form-control" name="instargramId" type="text" value={userInfo.instargramId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input className="form-control" name="address" type="text" value={userInfo.address} onChange={handleChange} />
                </div>
            </form>
            <div className="text-center my-3">( *︾▽︾)안에 설정된 값은 기본값으로, 필요에 따라 바꾸세요.( *︾▽︾)</div>
            <button onClick={handleSaveClick} className="btn btn-success btn-lg btn-block">Save</button>
            <button onClick={handleNextClick} className="btn btn-success btn-lg btn-block">Next</button>
        </div>
    );
};

export default UserInfoPage;
