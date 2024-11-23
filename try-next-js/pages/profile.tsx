import router from "next/router";
import { Button, Layout } from "antd";
const { Content } = Layout;
export default function () {
  return (
    <Content style={{ margin: "20px auto" }}>
      <div>Profile</div>
      <Button onClick={() => router.back()}>返回</Button>
    </Content>
  );
}
