import UserLayout from "./index";
import { List } from "antd";
import Link from "next/link";
import axios from "@/utils/axios";

function UseList(props) {
  console.log("4.UseList.render", props);
  return (
    <UserLayout>
      <List
        header={<div>用户列表</div>}
        footer={<div>共计{props.list.length}个用户</div>}
        bordered
        dataSource={props.list}
        renderItem={(item: any) => (
          <List.Item key={item._id}>
            <Link
              as={`/user/detail/${item._id}`}
              href={{ pathname: `/user/detail`, query: { id: item._id } }}
            >
              {item.username}
            </Link>
          </List.Item>
        )}
      />
    </UserLayout>
  );
}

UseList.getInitialProps = async (ctx) => {
  if (ctx.req) {
    ctx.req = "req";
  }
  if (ctx.res) {
    ctx.res = "res";
  }
  console.log("2.UseList.getInitialProps ctx", ctx);
  let response = [];
  try {
    response = await axios({ url: "/user/list", method: "GET" });
  } catch (e) {
    console.error("fetch list", e);
  }
  // let list = [
  //   { _id: 1, username: "zhangsan", password: "1" },
  //   { _id: 2, username: "lisi", password: "2" },
  // ];
  return { list: response };
};

export default UseList;
