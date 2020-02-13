import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchUser from "../../components/SearchUser/SearchUser";
import FrenmoCategoryNavPage from "../FrenmoCategoryNavPage/FrenmoCategoryNavPage";
import FrenmoListByCat from "../FrenmoListByCat/FrenmoListByCat";
import "./LandingPage.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="coupons-feed">
          <Tabs>
            <TabList>
              <Tab>Received</Tab>
              <Tab>Issued</Tab>
              <Tab>Wishlist</Tab>
            </TabList>
            <TabPanel>
              <FrenmoCategoryNavPage />
              <FrenmoListByCat />
            </TabPanel>
            <TabPanel>
              <FrenmoCategoryNavPage />
            </TabPanel>
            <TabPanel>
              <FrenmoCategoryNavPage />
            </TabPanel>
          </Tabs>
        </div>
        {/* <div className="coupons-feed">
          <Tabs>
            <TabList>
              <Tab> My Feedback </Tab>
              <Tab> Sent Feedback </Tab>
            </TabList>
            <TabPanel>
              <h2> My Feedback</h2>
            </TabPanel>
            <TabPanel>Sent Feedback</TabPanel>
          </Tabs>
        </div> */}
      </>
    );
  }
}
