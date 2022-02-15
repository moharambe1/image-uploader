import mng_repositories from "./mng-repositories";

const mng_upload_page = {
  pageSetIsUploading: null,
  pageSetIsImgUploaded: null,
  pageSetIsPopUp: null,

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
        this.pageSetIsImgUploaded(obj);
        break;
      case "error":
        this.pageSetIsPopUp({ title: obj.title, message: obj.message });
        setTimeout(() => mng_upload_page.pageSetIsPopUp(null), obj.timeOut || 2000);
        break;
      default:
        this.pageSetIsUploading(false);
        this.pageSetIsImgUploaded("");
    }
  },
};

export default mng_upload_page;
