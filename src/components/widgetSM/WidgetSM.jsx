import "./widgetSM.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSM() {
  return (
    <div className="widgetSM">
      <div className="widgetSMTitle">New Join Members</div>
      <ul className="widgetSMList">
        <li className="widgetSMItem">
          <img
            src="/image/profile.jpeg"
            alt="userProfilePhoto"
            className="widgetSMImg"
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName">Iris Fan</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMBtn">
            <Visibility className="widgetSMIcon" />
            Display
          </button>
        </li>
        <li className="widgetSMItem">
          <img
            src="/image/profile.jpeg"
            alt="userProfilePhoto"
            className="widgetSMImg"
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName">Iris Fan</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMBtn">
            <Visibility className="widgetSMIcon" />
            Display
          </button>
        </li>
        <li className="widgetSMItem">
          <img
            src="/image/profile.jpeg"
            alt="userProfilePhoto"
            className="widgetSMImg"
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName">Iris Fan</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMBtn">
            <Visibility className="widgetSMIcon" />
            Display
          </button>
        </li>
        <li className="widgetSMItem">
          <img
            src="/image/profile.jpeg"
            alt="userProfilePhoto"
            className="widgetSMImg"
          />
          <div className="widgetSMUser">
            <span className="widgetSMUserName">Iris Fan</span>
            <span className="widgetSMUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSMBtn">
            <Visibility className="widgetSMIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
