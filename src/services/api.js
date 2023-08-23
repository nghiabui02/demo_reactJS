import axios from "axios";
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
})
export default customAxios;
