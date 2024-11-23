import router, { useRouter } from "next/router";
import Link from "next/link";
import { Button, Layout, Menu } from "antd";
const { Content, Sider } = Layout;
export default function (props) {
  const router = useRouter();
  const items = [
    {
      key: "/user/list",
      label: "User List",
    },
    {
      key: "/user/add",
      label: "User Creation",
    },
  ];

  const handleMenuClick = ({ key }) => {
    router.push(key); // Navigate to the path corresponding to the key
  };

  return (
    // <Content style={{ margin: "20px auto" }}>
    //   <div>User</div>
    //   <Button onClick={() => router.push("/profile")}>/profile</Button>
    // </Content>
    <Layout>
      <Sider>
        <Menu
          onClick={handleMenuClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[router.pathname]}
          items={items}
        >
          {/* <Menu.Item key="/user/list">
            <Link href="/user/list">用户列表 </Link>
          </Menu.Item>
          <Menu.Item key="/user/add">
            <Link href="/user/add">添加用户</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Button onClick={() => router.push("/profile")}>/profile</Button>

      <Content style={{ padding: 8 }}>{props.children}</Content>
    </Layout>
  );
}
