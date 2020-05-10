import React from 'react'; 
import { Breadcrumb } from 'antd';
import { Layout } from 'antd';

const { Content } = Layout;

const Home = () => { 
  return ( 
    <div> 
      
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            backgroundColor: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <h1>Home Component</h1>
        </Content>
    </div> 
  ) 
}; 

export default Home; 