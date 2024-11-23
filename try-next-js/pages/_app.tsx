import Link from "next/link";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import "../globals.css";
const { Header, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let pathname = router.pathname;
  pathname = "/" + pathname.split("/")[1];

  console.log("3.LayoutApp.render", pageProps);

  const items = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "/user",
      label: "User Management",
    },
    {
      key: "/profile",
      label: "Profile",
    },
    {
      key: "/login",
      label: "Login",
    },
  ];

  const handleMenuClick = ({ key }) => {
    router.push(key); // Navigate to the path corresponding to the key
  };

  return (
    <Layout>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: "64px", display: "inline-block" }}
          selectedKeys={[pathname]}
          defaultSelectedKeys={[pathname]}
          items={items}
          onClick={handleMenuClick}
        >
          {/* <Menu.Item key="/">
            <Link href="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="/user">
            <Link href="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="/profile">
            <Link href="/profile">个人中心</Link>
          </Menu.Item>
          <Menu.Item key="/login">
            <Link href="/login">登录</Link>
          </Menu.Item> */}
        </Menu>
      </Header>
      <Component {...pageProps} />
      <Footer style={{ textAlign: "center" }}>@copyright 珠峰架构</Footer>
    </Layout>
  );
}

MyApp.getInitialProps = async (params) => {
  // fetch global data here
  if (params.ctx.req) params.ctx.req = "req";
  if (params.ctx.res) params.ctx.res = "res";
  console.log("1.LayoutApp.getInitialProps", params);
  let { Component, ctx } = params;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;
