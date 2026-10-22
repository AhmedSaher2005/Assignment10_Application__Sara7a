import { createClient } from "redis";

export const redisClient = createClient({
  url: "rediss://default:gQAAAAAAA4hTAAIgcDI3MzU4NDEyNTk5Y2Q0YTllYWIzM2MxMjRlZDY2NGFmZg@current-spaniel-231507.upstash.io:6379",
});


export default async function connectionRedis() {
  try {
    await redisClient.connect()
    console.log("redis connected successfully...😍");
  } catch (error) {
    console.log(error, "redis connected faild...😢");
  }
}
