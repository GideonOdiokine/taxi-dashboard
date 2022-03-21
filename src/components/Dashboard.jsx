import React from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import Earnings from "./Earnings";
import Transfer from "./Transfer";
import Profile from "./Profile";
import FAQ from "./FAQ";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfer />
          <Profile />
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;

const Section = styled.section`
margin-left:18vw;
`;
