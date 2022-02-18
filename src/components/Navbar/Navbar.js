import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

export const Navbar = () => {
  const { Header } = Layout;

  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/blog">Posts</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/profile">Profile</Link> </Menu.Item>
      </Menu>
    </Header>
  )
}
