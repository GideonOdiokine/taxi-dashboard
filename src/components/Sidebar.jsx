import React, { useState,} from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>My Taxi</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <Link to="/" >
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <Link to="/" >
                  <RiDashboard2Fill />
                  <span>Riders</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <Link to="/" >
                  <FaAddressCard />
                  <span>Payment Details</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <Link to="/" >
                  <GiTwirlCenter />
                  <span>Learning Center</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(5)}
                className={currentLink === 5 ? "active" : ""}
              >
                <Link to="/" >
                  <BsFillChatTextFill />
                  <span>FAQ</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(6)}
                className={currentLink === 6 ? "active" : ""}
              >
                <Link to="/" >
                  <IoSettings />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <Link to="/">
            <FiLogOut />
            <span>Logout</span>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Sidebar;

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          a {
            display: flex;
            align-items: center;
            color: #fff;
            span {
              padding-left: 8px;
            }
          }
        }
        .active {
          background-color: #ffc107;
          border-radius: 2px;
          a {
            color: #000;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #fff;
    }
  }
`;
