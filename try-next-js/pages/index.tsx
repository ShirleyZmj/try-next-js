import router from "next/router";
import { Button, Layout } from "antd";
const { Content } = Layout;
export default function () {
  return (
    <Content style={{ margin: "20px auto" }}>
      <div className="font-bold bg-red-100">Home</div>
      <Button onClick={() => router.push("/user")}>/user</Button>
    </Content>
  );
}
