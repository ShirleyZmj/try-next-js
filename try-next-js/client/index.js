let Koa = require("koa");
let Router = require("koa-router");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: true });
const handler = app.getRequestHandler();
app.prepare().them(() => {
  const server = new Koa();
  const router = new Router();
  router.get("/user/list", async (ctx, next) => {
    const list = [
      { _id: 1, username: "zhangsan", password: "1" },
      { _id: 2, username: "lisi", password: "2" },
    ];
    ctx.response = list;
  });

  // todo add more api

  server.use(router.routes());
  server.use(async (ctx, next) => {
    await handler(ctx.req, ctx.res);
    ctx.response = false;
  });
  server.listen(3000, () => console.log("server started at port 3000"));
});
