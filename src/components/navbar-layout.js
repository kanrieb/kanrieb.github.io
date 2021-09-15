import React from "react";
import '../App.css';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";
import avatar from "../images/avatar.jpg";
import { useHistory, useLocation } from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';


export function Nav({ children }) {
  return (
    <div style={{ margin: 0, width: 400, height: "100%", textAlign: 'center', 
     backgroundColor: "white"}}>
      {children}
    </div>
  )
}

const NavBar = () => {
  let history = useHistory();

  return (
    <div className="App">
      <Nav>
      <div className="nav-heading ">
      <img src={avatar} alt="Avatar" className="Avatar"/>
      <br />
          <span className="nav-name">
            Kathryn Rieb
          </span>
          <br />
          <span className="nav-sub">
            Software Engineering Student 
          </span>
    </div>
    
    <Navigation
            onSelect={({itemId}) => {
              history.push(itemId);
            }}
            items={[
              {
                title: 'About',
                itemId: '/',
                elemBefore: () => <Icon name="user" />,                
              },
              {
                title: 'Education',
                itemId: '/education',
                elemBefore: () => <Icon name="book" />,

              },
              {
                title: 'Experience',
                itemId: '/experience',
                elemBefore: () => <Icon name="briefcase" />,

              },
              {
                title: 'Projects',
                itemId: '/projects',
                elemBefore: () => <Icon name="search" />,

              },
            ]}
          />
        </Nav>
    </div>
  );
}

export default NavBar;