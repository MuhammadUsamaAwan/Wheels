import axios from "axios";
import { baseURL } from "../config/config";
import { toast } from "react-toastify";

export const postImg = async userFile => {
  let formData = new FormData();
  formData.append("userFile", userFile);
  const res = await axios({
    method: "post",
    url: `${baseURL}/upload-file`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

// post favorite
export const addFavorite = async (token, advertisementId) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const body = JSON.stringify({ advertisementId });
  try {
    const res = await axios.post(`${baseURL}/api/favourite`, body, config);
    toast.success(res.data.message);
  } catch (err) {
    console.error("Internal Server Error");
  }
};

// post ad
export const postAd = async (token, values) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    await axios.post(`${baseURL}/api/create-advertisement`, values, config);
    toast.success("Ad Successfully Posted!");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// update profile
export const updateProfile = async (token, values) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const body = JSON.stringify({ values });
  toast.success("Profile Updated!")
  try {
    await axios.post(`${baseURL}/api/user/update`, body, config);
    toast.success("Updated Successfully!");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};