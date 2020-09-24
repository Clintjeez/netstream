import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LandingCards from "../../components/landingCards";
//import Modal from "../shared/Modal";
import "./Profile.css";

import memoji from "../../assets/ClintMemoji.png";
import userIcon from "../../assets/user.svg";
import userGuest from "../../assets/guest-user.svg";
import winnieImg from "../../assets/winnieImg.png";
import ebenImg from "../../assets/ebenImg-unscreen.gif";

const Users = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <React.Fragment>
      {/* <Modal
        show={showModal}
        onCancel={closeModalHandler}
        contentClass="place-item__modal__content"
        footerClass="place-item__modal__actions"
        footer={<p onClick={closeModalHandler}>close</p>}
      >
        <div className="modal-container">
          <h2>The Modal</h2>
        </div>
      </Modal> */}
      <div className="profiles">
        <div className="container">
          <header className="landing__header">
            <p className="brand">Netstream</p>
            <buuton className="header__btn">Manage profile</buuton>
          </header>
          <section className="content-wrapper">
            <h1 className="landing-title">Who's watching ?</h1>

            <div className="box-wrapper">
              <LandingCards
                src={userIcon}
                title="Create user"
                text="Add a new user"
                onclick={openModalHandler}
              />
              {/* <Link to="home">
                <LandingCards
                  className="yellow-bg"
                  src={memoji}
                  title="ClintJeez"
                  text="Last seen 3 hours ago"
                />
              </Link>
              <Link to="home">
                <LandingCards
                  className="purple-bg"
                  src={ebenImg}
                  title="Eben"
                  text="Last seen 600 years ago"
                />
              </Link>

              <Link to="home">
                <LandingCards
                  className="pink-bg"
                  src={winnieImg}
                  title="Winnie Bae"
                  text="Last seen 2 months ago"
                />
              </Link>

              <Link to="home">
                <LandingCards
                  className="yellow-bg"
                  src={memoji}
                  title="ClintJeez"
                  text="Last seen 3 hours ago"
                />
              </Link>

              <Link to="home">
                <LandingCards
                  className="purple-bg"
                  src={ebenImg}
                  title="Eben"
                  text="Last seen 600 years ago"
                />
              </Link>

              <Link to="home">
                <LandingCards
                  className="pink-bg"
                  src={winnieImg}
                  title="Winnie Bae"
                  text="Last seen 2 months ago"
                />
              </Link> */}

              <Link to="/home">
                <LandingCards
                  src={userGuest}
                  title="View as guest"
                  text="Data will not be stored"
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
