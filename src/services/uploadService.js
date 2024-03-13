import axios from "axios";

export const UploadImage = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "tl5agz2l");
  data.append("api_key", "386971881557887");
  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dbd0yztdb/image/upload",
    data
  );
  return res;
};
