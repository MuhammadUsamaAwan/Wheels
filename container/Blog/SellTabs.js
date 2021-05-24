import React, { useState } from "react";
import { Card, Button } from "antd";
import TabItemBlog from "../../components/Blog/TabItemBlog";

const tabListNoTitle = [
  {
    key: "Cars",
    tab: "Cars",
  },
  {
    key: "Bikes",
    tab: "Bikes",
  },
  {
    key: "Accessories",
    tab: "Accessories",
  },
];

const contentListNoTitle = {
  Cars: (
    <div className="tab-container-blog">
      <TabItemBlog />
      <TabItemBlog />
      <TabItemBlog />
      <TabItemBlog />
      <Button type="primary" block>
        Primary
      </Button>
    </div>
  ),
  Bikes: (
    <div className="car-tabs">
      <TabItemBlog />
      <TabItemBlog />
      <TabItemBlog />
      <TabItemBlog />
      <Button type="primary" block>
        Primary
      </Button>
    </div>
  ),
  Accessories: (
    <div className="car-tabs">
      <TabItemBlog />
      <TabItemBlog />
      <TabItemBlog />
      <TabItemBlog />
      <Button type="primary" block>
        Primary
      </Button>
    </div>
  ),
};

const SellTabs = () => {
  const [state, setState] = useState("Cars");

  return (
    <Card
      style={{ width: "100%" }}
      tabList={tabListNoTitle}
      activeTabKey={state}
      onTabChange={key => setState(key)}
    >
      {contentListNoTitle[state]}
    </Card>
  );
};

export default SellTabs;
