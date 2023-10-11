import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "next/image";
import Logo from "../../public/logo/api_logo.png";
import { BiAlignLeft, BiChevronDown } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import CartOverlys from "./CartOverlay";
import { fetchCategories } from "../../services/CategoryServices";
import { isLoggedIn, logout } from "../../utils/auth";
import { useRouter } from "next/router";
import Overlay from "./Overlay";
import { Col } from "react-bootstrap";

export default function Header() {
  const router = useRouter();
  const { keyword } = router.query;

  const [storedToken, setStoredToken] = useState();
  const [categories, setCategories] = useState([]);
  const [reIsLoggedIn, setReIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      setReIsLoggedIn(isLoggedIn());
    }
  }, []);

  useEffect(() => {
    setStoredToken(localStorage?.getItem("token"));

    fetchCategories({
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setCategories(response.data);
      }
    });
  }, []);

  return (
    <Fragment>
      <header>
        {/*Tobpar*/}
        <section className="theme_bg">
          <Container className="">
            <div>
              <ul className="font-poppins manu-font-one text-white d-flex justify-content-end align-items-center py-1">
                {/*<li className="pe-3">
                                    <Link href="/how-to-buy" className="text-light">
                                        How to buy
                                    </Link>
                                </li>*/}
                <li className="pe-3">
                  <Link href="/b2b" className="text-light">
                    B2B Sales
                  </Link>
                </li>
                {reIsLoggedIn ? (
                  <Fragment>
                    <li className="pe-3 login-modal">
                      <Link href="/my-account" className="text-light">
                        My Account
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/auth/logout"
                        className="text-light"
                        onClick={(e) => {
                          e.preventDefault();
                          logout();
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li className="pe-3 login-modal">
                      <Link href="/auth/login" className="text-light">
                        Login
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/auth/register" className="text-light">
                        Sign Up
                      </Link>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </Container>
        </section>

        {/*Logo & manu*/}
        <Container className="px-0">
          <div className="d-flex justify-content-between align-items-center main-manu-item">
            <div className="">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Picture of the author"
                  className="brand-logo"
                />
              </Link>
            </div>
            <Nav className="mx-auto py-0 font-inter manu-font manu-items">
              <Nav.Link
                as={Link}
                href="/"
                className="d-flex align-items-center all-side-icons font-16 fw-semibold my-2"
              >
                home
              </Nav.Link>

              <NavDropdown
                className="p-0 rounded-0 about-btn"
                title={
                  <span className=" text-inter py-2 font-16 fw-semibold d-flex all-side-icons align-items-center">
                    about us <BiChevronDown className="ms-1" />
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
                  <Link href="/company-profile" className="cate-drop">
                    Who we are
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
                  <Link href="/board-of-directors" className="cate-drop">
                    BOD & Leadership
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                href="/delivery-information"
                className="d-flex align-items-center all-side-icons font-16 fw-semibold my-2"
              >
                DELIVERY INFORMATION
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/contact"
                className="d-flex align-items-center all-side-icons font-16 fw-semibold my-2"
              >
                contacts
              </Nav.Link>
            </Nav>

            <div className="">
              <div className="d-flex justify-content-between align-items-center">
                {/* {storedToken && ( */}
                <Fragment>
                  <DropdownButton
                    id="dropdown-basic-button"
                    className="user-icon border-start"
                    title={
                      <span className="manu-icon border-0 d-flex align-items-center">
                        <FaUserCircle size={"25px"} />
                        <p className="font-12 ps-2">Register or login</p>
                      </span>
                    }
                  >
                    <Dropdown.Item className="logoutBtn">
                      <Link
                        href="/my-account"
                        className="d-flex align-items-center profile-btn text-capitalize"
                      >
                        <CiUser className="font-16 me-1" />
                        <span className="font-16">account</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="logoutBtn">
                      <Link
                        href="/"
                        className="d-flex align-items-center profile-btn text-capitalize"
                      >
                        <MdOutlineLogout className="font-16 me-1" />
                        <span
                          className="font-16"
                          onClick={(e) => {
                            e.preventDefault();
                            logout();
                          }}
                        >
                          logout
                        </span>
                      </Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </Fragment>
                {/* // )} */}
              </div>
            </div>
          </div>
        </Container>

        <section className="btn-hover">
          <Navbar expand="md" className="py-2">
            <Container className="px-0" fluid>
              <Col lg={3} className="">
                <div className="d-flex justify-content-center manu_drop">
                  <NavDropdown
                    title={
                      <div className=" font-poppins font-16 d-flex align-items-center border px-3 py-2 rounded-1">
                        <AiOutlineBars />
                        <span className="ps-2">All Categories</span>
                      </div>
                    }
                    id="custome_dropdown"
                    className="custome_dropdown_btn"
                  >
                    <NavDropdown.Item className="m-0 p-0">
                      <Link
                        href={`/combo`}
                        className="cate-drop text-uppercase all-icons text-dark px-3 py-2 d-block font-inter"
                      >
                        Combo Pack
                      </Link>
                    </NavDropdown.Item>

                    {categories.map((category, key) => {
                      return (
                        <NavDropdown.Item key={key} className="m-0 p-0">
                          <Link
                            href={`/category/${category.id}`}
                            className="cate-drop text-uppercase all-icons text-dark px-3 py-2 d-block font-inter"
                          >
                            {category.name}
                          </Link>
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                </div>
              </Col>
              <div className="col-lg-9" href="#">
                {/* manu form  */}
                <div className="d-flex justify-content-between">
                  <div className="header-form ms-5">
                    <Form
                      action="/search"
                      method="get"
                      className="d-flex align-items-center form-item"
                    >
                      <Form.Control
                        type="search"
                        name="keyword"
                        placeholder="Search..."
                        className="me-2 rounded-1 search-field"
                        aria-label="Search"
                      />

                      <Button
                        type="submit"
                        className=" border-0 font-inter fw-semibold form-item-btn"
                      >
                        Search
                      </Button>
                    </Form>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 pt-2">
                      <Link href="/">
                        <div className="d-flex">
                          <MdOutlineFavoriteBorder className="off-canvas-icon" />
                          <span
                            className="badge text-danger "
                            style={{ marginTop: "-10px", marginLeft: "-10px" }}
                          >
                            10
                          </span>
                        </div>
                      </Link>
                    </div>
                    <CartOverlys />
                  </div>
                </div>
              </div>
            </Container>
          </Navbar>
        </section>

        {/* for responsive screen */}
        <section className="bg-dark btn-hover overlay-div">
          <Navbar bg="dark" expand="lg">
            <Container className="px-0" fluid>
              <div className="col-lg-3 col-md-3 me-0" href="#">
                <NavDropdown
                  className="p-0 me-auto rounded-0 w-100"
                  title={
                    <span className="text-white font-inter px-4 py-3 d-flex align-items-center categories">
                      <BiAlignLeft size={"15px"} className="me-2" />
                      CATEGORIES
                    </span>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
                    <Link href={`/combo`} className="cate-drop">
                      Combo Pack
                    </Link>
                  </NavDropdown.Item>

                  {categories.map((category, key) => {
                    return (
                      <NavDropdown.Item
                        key={key}
                        className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter"
                      >
                        <Link
                          href={`/category/${category.id}`}
                          className="cate-drop"
                        >
                          {category.name}
                        </Link>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              </div>
              <div className="col-lg-9" href="#">
                <Overlay />
              </div>
            </Container>
          </Navbar>
        </section>
      </header>
    </Fragment>
  );
}
