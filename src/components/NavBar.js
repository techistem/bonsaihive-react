import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const [exploreOpen, setExploreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      setExpanded(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleExplore = () => {
    setExploreOpen(!exploreOpen);
    setProfileOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setExploreOpen(false);
  };

  const closeMenus = () => {
    setExpanded(false);
    setExploreOpen(false);
    setProfileOpen(false);
  };

  const addPostIcon = (
    <NavLink
      className={`${styles.NavLink} ${styles.AddPostButton}`}
      activeClassName={styles.Active}
      to="/posts/create"
      exact
      onClick={closeMenus}
    >
      <i className="far fa-plus-square"></i> Add post
    </NavLink>
  );

  const loggedInIcons = (
    <>

      <NavDropdown
        title={
          <span
            className={`${styles.NavLink} ${styles.ProfileTitle}`}
            onClick={(e) => {
              e.preventDefault();
              toggleExplore();
            }}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-compass"></i> Explore
          </span>
        }
        id="explore-nav-dropdown"
        className={styles.NavLink}
        show={exploreOpen}
        onToggle={() => {}}
      >
        <NavDropdown.Item
          as={NavLink}
          to="/"
          exact
          activeClassName={styles.Active}
          className={styles.NavLink}
          onClick={closeMenus}
        >
          <i className="fas fa-seedling"></i> Posts
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/feed"
          exact
          activeClassName={styles.Active}
          className={styles.NavLink}
          onClick={closeMenus}
        >
          <i className="fas fa-stream"></i> Feed
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/liked"
          exact
          activeClassName={styles.Active}
          className={styles.NavLink}
          onClick={closeMenus}
        >
          <i className="fas fa-heart"></i> Liked
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/events"
          exact
          activeClassName={styles.Active}
          className={styles.NavLink}
          onClick={closeMenus}
        >
          <i className="fas fa-calendar-alt"></i> Events
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        title={
          <span
  className={`${styles.NavLink} ${styles.ProfileTitle}`}
  onClick={(e) => {
    e.preventDefault();
    toggleProfile();
  }}
  style={{ cursor: "pointer" }}
>
  <i className="fas fa-user-circle"></i> My Bonsai Hive
</span>
        }
        id="profile-nav-dropdown"
        className={styles.NavLink}
        show={profileOpen}
        onToggle={() => {}}
      >
        <NavDropdown.Item
          as={NavLink}
          to={`/profiles/${currentUser?.profile_id}`}
          exact
          activeClassName={styles.Active}
          className={styles.NavLink}
          onClick={closeMenus}
        >
          <i className="fas fa-user"></i> My Profile
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/reviews"
          exact
          activeClassName={styles.Active}
          className={styles.NavLink}
          onClick={closeMenus}
        >
          <i className="fas fa-star"></i> Reviews
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/contact/create"
          exact
          activeClassName={styles.Active}
          className={styles.NavLink}
          onClick={closeMenus}
        >
          <i className="fas fa-envelope"></i> Contact
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          as="button"
          onClick={() => {
            handleSignOut();
            closeMenus();
          }}
          className={styles.NavLink}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-sign-out-alt"></i> Sign out
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
        exact
        onClick={closeMenus}
      >
        <i className="fas fa-sign-in-alt"></i> Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
        exact
        onClick={closeMenus}
      >
        <i className="fas fa-user-plus"></i> Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
      ref={ref}
    >
      <Container>
        <NavLink to="/" exact onClick={closeMenus}>
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        {currentUser && addPostIcon}

        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {!currentUser && (
              <>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/reviews"
                  exact
                  onClick={closeMenus}
                >
                  <i className="fas fa-star"></i> Reviews
                </NavLink>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/contact/create"
                  exact
                  onClick={closeMenus}
                >
                  <i className="fas fa-envelope"></i> Contact
                </NavLink>
              </>
            )}
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
