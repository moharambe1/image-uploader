import mng_repositories from "./mng-repositories";

const mng_upload_page = {
  pageSetIsUploading: null,
  pageSetIsImgUploaded: null,
  pageSetIsImgUploadSuccess: null,

  pageDropImgHandler: mng_repositories.uploadImgHandler,

  updatePage(event, obj) {
    switch (event) {
      case "uploading":
        console.log("uploading");
        this.pageSetIsUploading(true);
        this.pageSetIsImgUploaded("");
        break;
      case "uploaded":
        console.log("uploaded");
        this.pageSetIsUploading(false);
        this.pageSetIsImgUploaded(obj.url);
        break;
      default:
        this.pageSetIsUploading(false);
        this.pageSetIsImgUploaded("");
    }
  },
};

export default mng_upload_page;
