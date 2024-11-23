import UserLayout from "./index";
import router from "next/router";
import { Form, Input, Button, message } from "antd";
import axios from "@/utils/axios";
function UserAdd() {
  const [form] = Form.useForm();

  async function handleSubmit(event) {
    // event.preventDefault();
    let values = form.getFieldsValue();
    try {
      let response = await axios.post("/api/register", values);
      if (response.data.code === 0) {
        router.push("/user/list");
      } else {
        message.error("add failed");
      }
    } catch (e) {
      message.error("add failed");
    }
  }

  return (
    <UserLayout>
      <Form
        onFinish={handleSubmit}
        form={form}
        name="UserAdd"
        className="login-form"
        style={{ maxWidth: "300px" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input a username!" }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input a username!" }]}
        >
          <Input type="password" placeholder="Enter Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            添加用户
          </Button>
        </Form.Item>
      </Form>
    </UserLayout>
  );
}
export default UserAdd;
