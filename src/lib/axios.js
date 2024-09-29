// write me axios config make it a hook (useAxios)

import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export default instance;
