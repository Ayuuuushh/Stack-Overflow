import React from "react";
import "./RightSidebar.css";
import comment from '../../assests/comment-regular.svg'
import pen from "../../assests/pen-solid.svg";
// import logo from '../../../assests/stack-overflow (1).svg'

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="13" />
          <p>Ops teams are pets, not cattle (Ep. 562) sponsored post</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="13" />
          <p>Ops teams are pets, not cattle (Ep. 562) sponsored post</p>
        </div>
      </div>
      <h4>Features on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="13" />
          <p>
            Improving the copy in the close modal and post notices - 2023
            edition
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="13" />
          <p>
            New blog post from our CEO Prashanth: Community is the future of AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
