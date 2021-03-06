import { useState } from "react";
import { Menu, Dropdown, Drawer, Collapse } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const usedVehiclesMenu = (
  <Menu>
    <Menu.Item>
      <a href="/cars" className="nav__dropdown-item">
        <img src="/images/car.svg" className="nav__icon" alt="car" /> Browse
        Cars
      </a>
      <a href="/bikes" className="nav__dropdown-item">
        <img src="/images/bike.svg" className="nav__icon" alt="bike" /> Browse
        Bikes
      </a>
      <a href="/vans" className="nav__dropdown-item">
        <img src="/images/van.svg" className="nav__icon" alt="van" /> Browse
        Vans
      </a>
      <a href="/buses" className="nav__dropdown-item">
        <img src="/images/bus.svg" className="nav__icon" alt="bus" /> Browse
        Buses
      </a>
      <a href="/trucks" className="nav__dropdown-item">
        <img
          src="/images/truck.svg"
          className="nav__icon"
          style={{ transform: "rotateY(180deg)" }}
          alt="truck"
        />
        Browse Trucks
      </a>
      <a href="/rickshaws" className="nav__dropdown-item">
        <img
          src="/images/rickshaw.svg"
          className="nav__icon"
          style={{ transform: "rotateY(180deg)" }}
          alt="rickshaw"
        />
        Browse Ricksaws
      </a>
      <a href="/tractors" className="nav__dropdown-item">
        <img
          src="/images/tractor.svg"
          className="nav__icon"
          style={{ transform: "rotateY(180deg)" }}
          alt="tractors"
        />
        Browse Tractors
      </a>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav container">
      <div className="nav__logo">
        <a href="/">
          <img src="/images/logo.png" alt="logo" />
        </a>
      </div>
      <ul className="nav__links">
        <li>
          <Dropdown overlay={usedVehiclesMenu} placement="bottomCenter">
            <a href="#">
              Vehicles <DownOutlined />
            </a>
          </Dropdown>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/videos">Videos</a>
        </li>
        <li>
            <a href={isLoggedIn ? "/profile" : "/login"}>{isLoggedIn ? "Profile" : "Login"}</a>
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
        <Collapse expandIconPosition="right" ghost>
          <Collapse.Panel header="Vehicles">
            <a href="/cars" className="nav__menu__link">
              <img src="/images/car.svg" className="nav__icon" alt="car" />
              Browse Cars
            </a>
            <a href="/bikes" className="nav__menu__link">
              <img src="/images/bike.svg" className="nav__icon" alt="bike" />
              Browse Bikes
            </a>
            <a href="/vans" className="nav__menu__link">
              <img src="/images/van.svg" className="nav__icon" alt="van" />
              Browse Vans
            </a>
            <a href="/buses" className="nav__menu__link">
              <img src="/images/bus.svg" className="nav__icon" alt="bus" />
              Browse Buses
            </a>
            <a href="/trucks" className="nav__menu__link">
              <img
                src="/images/truck.svg"
                className="nav__icon"
                style={{ transform: "rotateY(180deg)" }}
                alt="truck"
              />
              Browse Trucks
            </a>
            <a href="/rickshaws" className="nav__menu__link">
              <img
                src="/images/rickshaw.svg"
                className="nav__icon"
                style={{ transform: "rotateY(180deg)" }}
                alt="rickshaw"
              />
              Browse Ricksaws
            </a>
            <a href="/tractors" className="nav__menu__link">
              <img
                src="/images/tractor.svg"
                className="nav__icon"
                style={{ transform: "rotateY(180deg)" }}
                alt="tractor"
              />
              Browse Tractors
            </a>
          </Collapse.Panel>
        </Collapse>
        <a href="/Blog" className="nav__menu__link">
          Blog
        </a>
        <a href="/videos" className="nav__menu__link">
          Videos
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
