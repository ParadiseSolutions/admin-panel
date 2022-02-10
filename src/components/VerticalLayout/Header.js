import PropTypes from 'prop-types';
import React, { useState } from "react";

import { connect } from "react-redux";
import { Input, Button, Row, Col } from "reactstrap";
import { Formik, Form} from 'formik';

import { Link } from "react-router-dom";

// Reactstrap
// import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown

import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

//i18n
import { withTranslation } from "react-i18next";

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";

const Header = props => {
  // const [search, setsearch] = useState(false);
  // const [socialDrp, setsocialDrp] = useState(false);

  // function toggleFullscreen() {
  //   if (
  //     !document.fullscreenElement &&
  //     /* alternative standard method */ !document.mozFullScreenElement &&
  //     !document.webkitFullscreenElement
  //   ) {
  //     // current working methods
  //     if (document.documentElement.requestFullscreen) {
  //       document.documentElement.requestFullscreen();
  //     } else if (document.documentElement.mozRequestFullScreen) {
  //       document.documentElement.mozRequestFullScreen();
  //     } else if (document.documentElement.webkitRequestFullscreen) {
  //       document.documentElement.webkitRequestFullscreen(
  //         Element.ALLOW_KEYBOARD_INPUT
  //       );
  //     }
  //   } else {
  //     if (document.cancelFullScreen) {
  //       document.cancelFullScreen();
  //     } else if (document.mozCancelFullScreen) {
  //       document.mozCancelFullScreen();
  //     } else if (document.webkitCancelFullScreen) {
  //       document.webkitCancelFullScreen();
  //     }
  //   }
  // }

  function tToggle() {
    var body = document.body;
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }

//submit del search
const onSubmitSearch = (values) =>{
  
  console.log(values);
}
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header" style={{backgroundColor: '#3DC7F4'}} >
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoSm} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="20" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoSm} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="20" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle();
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            {/* <Form onSubmit={(e) => onSubmitSearch(e)} className="app-search d-none d-lg-block">
              <div className="position-relative">
                <Input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}

                />
                <span className="uil-search"></span>
              </div>
            </Form> */}

            {/* <Formik
       initialValues={{ searchBox: '' }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.email) {
      //      errors.email = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
       onSubmit={(values, { setSubmitting }) => {
        onSubmitSearch(values)
       }}
     >
       {({ isSubmitting, handleSubmit, values, handleBlur, handleChange }) => (
         <Form onSubmit={handleSubmit} className="app-search d-none d-lg-block">
           <div className="position-relative">
                <Input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                  name='searchBox'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.searchBox}
                />
               

                <span className="uil-search"></span>
                
              </div>
          
         </Form>
       )}
     </Formik> */}

          </div>

          <div className="d-flex">

            {/* <Dropdown
              className="d-inline-block d-lg-none ms-2"
              onClick={() => {
                setsearch(!search);
              }}
              type="button"
            >
              <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                tag="button"
              > <i className="uil-search" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                <Form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <Input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                      <div className="input-group-append">
                        <Button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                      </div>
                    </div>
                  </div>
                </Form>
              </DropdownMenu>
            </Dropdown> */}

            {/* <LanguageDropdown /> */}

            {/* <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp);
              }}
            >
              <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                tag="button"
              >
                <i className="uil-apps"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end" end>
                <div className="px-lg-2">
                  <Row className="g-0">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={github} alt="Github" />
                        <span>GitHub</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={bitbucket} alt="bitbucket" />
                        <span>Bitbucket</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dribbble} alt="dribbble" />
                        <span>Dribbble</span>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="g-0">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dropbox} alt="dropbox" />
                        <span>Dropbox</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={mail_chimp} alt="mail_chimp" />
                        <span>Mail Chimp</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={slack} alt="slack" />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown> */}

            {/* <Dropdown className="d-none d-lg-inline-block ms-1">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="uil-minus-path"></i>
              </button>
            </Dropdown> */}

            {/* <NotificationDropdown /> */}

            <ProfileMenu />
            {/* <div onClick={() => {
              props.showRightSidebarAction(!props.showRightSidebar);
            }}
              className="dropdown d-inline-block">
              <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                <i className="uil-cog"></i>
              </button>
            </div> */}

          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
