import dmn_repositories from "../domin/dmn-repositories";
import mng_upload_page from "./mng-upload-page";

const mng_repositories = {
  async uploadImgHandler(data) {
    dmn_repositories.uploadImg(data);
    mng_upload_page.updatePage("uploading", {});
    setTimeout(
      () =>
        mng_upload_page.updatePage("uploaded", {
          url: "https://via.placeholder.com/600/92c952",
        }),
      3000
    );
  },
};
export default mng_repositories;
