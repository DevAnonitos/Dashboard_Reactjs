import React from 'react';
import './new.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar'

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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New