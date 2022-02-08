import mng_upload_page from "../manager/mng-upload-page";

const rmt_datasource = {
  server: `http:localhost:${process.env.Port || 5000}`,
  getLink(url) {
    const img = "https://via.placeholder.com/600/92c952";
    return img;
  },
  async uploadImg(data) {
    let formData = new FormData();

    formData.append("photo", data[0]);

    const res = await fetch("/api/upload-img", {
      method: "Post",
      body: formData,

      headers: { enctype: "multipart/form-data" },
    });
    if (res.status >= 200 && res.status < 300) {
      const link = await res.json();

      return link.imgLink;
    }
    let json = await res.json();

    throw Error(json.message);
  },
  async getImg(link) {
    const reader = new FileReader();
    let result;
    reader.onload = () => {
      result = reader.result;
      mng_upload_page.updatePage("uploaded", {
        url: result,
      });
    };

    await (async () => {
      const response = await fetch(link);
      const imageBlob = await response.blob();
      reader.readAsDataURL(imageBlob);
    })();

    return result;
  },
};

export default rmt_datasource;
