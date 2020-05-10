import React from "react"; 
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from "react-router-dom"; 
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import Home from './Home'; 
import About from './About'; 
import Users from './Users'; 
import Login from './Login'; 
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => { 

  return ( 
    <Router> 
      <div> 
      <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="2">
                <Link to="/">Home</Link> 
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">About</Link> 
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/users">Users</Link>
              </Menu.Item>
              <Menu.Item key="5">
              <Link to="/login">Login</Link> 
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Switch> 
                  <Route path="/about"> 
                    <About /> 
                  </Route> 
                  <Route path="/users"> 
                    <Users /> 
                  </Route> 
                  <Route path="/login"> 
                    <Login /> 
                  </Route> 
                  <Route path="/"> 
                    <Home /> 
                  </Route> 
                </Switch> 
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div> 
    </Router> 
  ); 
} 

export default App;