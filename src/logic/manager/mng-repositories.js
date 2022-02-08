import dmn_repositories from "../domin/dmn-repositories";
import mng_upload_page from "./mng-upload-page";

const mng_repositories = {
  async uploadImgHandler(data) {
    mng_upload_page.updatePage("uploading", {});
    try {
      const link = await dmn_repositories.uploadImg(data);
      const img = await dmn_repositories.getImg(link);
    } catch (err) {
      mng_upload_page.updatePage("error", {
        title: "Error",
        message: err.message,
      });
    }
  },
};
export default mng_repositories;
