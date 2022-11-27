import React from 'react';
import './new.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new Users</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="Logo" className='img-add' />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor='file'>
                  Image: <DriveFolderUploadIcon className='icon' />
                </label>
                <input type="file" id='file' style={{display: 'none'}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder='Mongosee' />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder='Db monge' />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='Mongge2212@gmail.com' />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="email" placeholder='+84 910341353' />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder='St.419 Forallnight Yd.VietNam' />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder='VietNam' />
              </div>
              <button className='btn-send'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New