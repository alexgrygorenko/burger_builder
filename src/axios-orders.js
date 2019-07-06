import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-dbf46.firebaseio.com/"
});

export default instance;
