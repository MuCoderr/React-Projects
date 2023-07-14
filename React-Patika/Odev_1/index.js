import axios from "axios";

export async function getData(userId) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const { data: post1 } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  console.log("users", user);
  console.log("post1", post1);
}
