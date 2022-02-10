import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";
// Redux
import { connect, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// users
import user4 from "../../../assets/images/users/avatar-4.jpg";

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState("");

  
  const sessionInfo =  JSON.parse(localStorage.getItem("authUser"))

  useEffect(() => {
    if (sessionInfo && sessionInfo.status === 200) {

      setusername(sessionInfo.data.user.first_name)

    } else {
      setusername("Guest");
    }
  }, [props.success, sessionInfo]);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user4}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block mx-2 fw-medium font-size-20 text-white">
            {username}
          </span>{" "}
          <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>
            {props.t("View Profile")}{" "}
          </DropdownItem>
          <DropdownItem tag="a" href="/">
            <i className="uil uil-wallet font-size-18 align-middle me-1 text-muted"></i>
            {props.t("My Wallet")}
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <i className="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>
            {props.t("Settings")}
            <span className="badge bg-soft-success rounded-pill mt-1 ms-2">
              03
            </span>
          </DropdownItem>
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"></i>
            {props.t("Lock screen")}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link to="/login" className="dropdown-item">
            <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
);
