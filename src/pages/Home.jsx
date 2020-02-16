import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Form from '../components/Form'

function Home() {
  const [isShowFooter, setIsShowFooter] = useState(true)
  const [title, setTitel] = useState('Application')
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          {title}
        </span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col"><br /></div>
          <div className="col"></div>
          <div className="w-100"></div>
          <div className="col-12">
            <Form setIsShowFooter={setIsShowFooter} />
          </div>
        </div>

        {!isShowFooter ? <br /> : <React.Fragment>
          {[1, 1, 1, 1].map((unused, index) => <br key={index} />)}

          <nav className="footer navbar navbar-default fixed-bottom navbar-light bg-light">
            <span className="navbar-brand" onClick={() => { setTitel('Home Page') }} >Home</span> |
          <span className="navbar-brand" onClick={() => { setTitel('Album') }} >Album</span> |
          <span className="navbar-brand" onClick={() => { setTitel('New Item') }} >New</span> |
          <span className="navbar-brand" onClick={() => { setTitel('Activity') }} >Activity</span> |
          <span className="navbar-brand" onClick={() => { setTitel('Profile') }} >Profile</span>
          </nav>
        </React.Fragment>
        }
      </div>
    </React.Fragment>
  )
}

export default Home

