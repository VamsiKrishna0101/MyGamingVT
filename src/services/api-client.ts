import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3fdfac6649d745d3ba2ec8da9f9ec565",
  },
});
