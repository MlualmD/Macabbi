import React from "react";
import "../style/Header.css";
import image from "../image/mac.png";

import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

const Header = () => {
  return (
    <div className="flex-container">
      <div className="img">
        <img src={image} alt="maccabi" />
      </div>
      <div>
        <WifiCalling3OutlinedIcon className="icons"></WifiCalling3OutlinedIcon>
        <span className="size_text">6300*</span>
      </div>
      <div>
        <KeyboardAltOutlinedIcon className="icons"></KeyboardAltOutlinedIcon>
        <span className="size_text">תיאום/ביטול תור</span>
      </div>
      <div>
        <PersonOutlinedIcon className="icons"></PersonOutlinedIcon>
        <span className="size_text">אזור אישי</span>
      </div>
      <div>
        <EmailOutlinedIcon className="icons"></EmailOutlinedIcon>
        <span className="size_text">צור קשר</span>
      </div>
      <div>
        <AccessibleOutlinedIcon
          className="icons"
          style={{ color: "black", backgroundColor: "white" }}
        ></AccessibleOutlinedIcon>
        <span className="size_text">נגישות</span>
      </div>
    </div>
  );
};

export default Header;
