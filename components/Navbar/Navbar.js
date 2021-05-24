import React, { useState } from "react";
import { Menu, Dropdown, Drawer } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  StarFilled,
  DollarOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const usedCarsMenu = (
  <Menu>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <SearchOutlined /> Find Used Cars
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <StarFilled /> Featured Used Cars
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <DollarOutlined /> Sell Your Car
      </a>
    </Menu.Item>
  </Menu>
);

const bikesMenu = (
  <Menu>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <SearchOutlined /> Find Used Bikes
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <StarFilled /> Featured Used Bikes
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <DollarOutlined /> Sell Your Bike
      </a>
    </Menu.Item>
  </Menu>
);

const autoStoreMenu = (
  <Menu>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <SearchOutlined /> Find Auto Parts
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <StarFilled /> Featured Auto Parts
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/" className="nav__dropdown-item">
        <DollarOutlined /> Sell Your Car Parts
      </a>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="/">Website Logo</a>
      </div>
      <ul className="nav__links">
        <li>
          <Dropdown overlay={usedCarsMenu}>
            <a href="/used-cars">
              Used Cars <DownOutlined />
            </a>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={bikesMenu}>
            <a href="/">
              Bikes <DownOutlined />
            </a>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={autoStoreMenu}>
            <a href="/">
              Auto Store <DownOutlined />
            </a>
          </Dropdown>
        </li>
        <li>
          <a href="/">Videos</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          {isLoggedIn ? (
            <a href="/profile">Profile</a>
          ) : (
            <a href="/login">Login</a>
          )}
        </li>

        <li className="nav__links__primary">
          <a href="/post-ad">Post an Ad</a>
        </li>
      </ul>
      <div className="nav__menu">
        <MenuOutlined onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <Drawer
        title="Website Logo"
        placement="right"
        closable={true}
        onClose={() => setMenuOpen(false)}
        visible={menuOpen}
      >
        <a href="/used-cars" className="nav__menu__link">
          Used Cars
        </a>
        <a href="/" className="nav__menu__link">
          New Cars
        </a>
        <a href="/" className="nav__menu__link">
          Bikes
        </a>
        <a href="/" className="nav__menu__link">
          Auto Parts
        </a>
        {isLoggedIn ? (
          <a href="/profile" className="nav__menu__link">
            Profile
          </a>
        ) : (
          <a href="/login" className="nav__menu__link">
            Login
          </a>
        )}
      </Drawer>
    </nav>
  );
};

export default Navbar;
