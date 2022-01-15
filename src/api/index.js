import axios from "axios";

const API = axios.create({
  baseURL:
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
});

export const getEmployees = () => API.get();
