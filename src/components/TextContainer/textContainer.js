import React from 'react';

//import onlineIcon from '../../icons/onlineIcon.png';

import './textContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({userName}, i) => (
                  <div key={i} className="activeItem">
                    {userName}
                    <i className="fas fa-globe-africa"></i>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;