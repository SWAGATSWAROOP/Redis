import "./client.js";
import client from "./client.js";

async function init() {
  await client.expire("msg:6", 10);
  const result = await client.get("msg:6");
  console.log("Result -> ", result);
}

init();
