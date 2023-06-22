import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate(); //by default it will push the user to wherever we want.
  const clickHandler = () => {
    navigate('/', { replace: true }); //this way we change the default method of (push) to replace.
    // navigate(-1 or 2 or -3 or 5) <<=== this way the button will send the user (Number) steps back or forward(depending on the Number if it's a negative or positive) in navigation.
  };

  return (
    <div>
      <h1>About Us</h1>
      <button onClick={clickHandler}>Go Home</button>
      <ul>
        <li>
          <Link to="programmers">Programmers</Link>
        </li>
        <li>
          <Link to="drivers">Drivers</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AboutUs;

//with push the user can move backwards in our app, but with replace they can't.
//if you're gonna add a nested route to a component, then you MUST add a (*) after it's route in the app component:
//                                                  <Route path="/aboutus/*" element={<AboutUs />} />
