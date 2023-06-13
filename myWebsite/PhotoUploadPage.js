import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import { AppContext } from './App';

const PhotoUploadPage = () => {
    const navigate = useNavigate();

    const { photoInfo, setPhotoInfo, uploadAndSaveImage,firebaseId,submitUserInfo } = useContext(AppContext);
   
    const handleFileChange = (imageKey) => async (e) => {
        const file = e.target.files[0];
        setPhotoInfo((prevPhotoInfo) => ({ ...prevPhotoInfo, [imageKey]: file }));
    };

    const handleNextClick = async () => {
        const imageKeys = Object.keys(photoInfo);
        for (let i = 0; i < imageKeys.length; i++) {
            if (photoInfo[imageKeys[i]]) {
                await uploadAndSaveImage(firebaseId, imageKeys[i], photoInfo[imageKeys[i]]);
                console.log(firebaseId);
            }
        }
        navigate("/demo");
    };

    return (
        <div className="container p-3">
        <h1 className="text-center">Upload your photos</h1>
        <div className="form-group">
            <label>Food Image 1:</label>
            <input type="file" className="form-control-file" onChange={handleFileChange('foodImage1')} />
        </div>
        <div className="form-group">
            <label>Food Image 2:</label>
            <input type="file" className="form-control-file" onChange={handleFileChange('foodImage2')} />
        </div>
        <div className="form-group">
            <label>Brand Image:</label>
            <input type="file" className="form-control-file" onChange={handleFileChange('brandImage')} />
        </div>
        <div className="form-group">
            <label>Restaurant Owner Image 1:</label>
            <input type="file" className="form-control-file" onChange={handleFileChange('restaurantOwnerImage1')} />
        </div>
        <div className="form-group">
            <label>Restaurant Owner Image 2:</label>
            <input type="file" className="form-control-file" onChange={handleFileChange('restaurantOwnerImage2')} />
        </div>
        <button onClick={handleNextClick} className="btn btn-primary btn-lg btn-block">Next</button>
    </div>
      );
}

export default PhotoUploadPage;
