import dmn_repositories from "../domin/dmn-repositories";
import mng_upload_page from "./mng-upload-page";

const mng_repositories = {
  async uploadImgHandler(data) {
   
    try {
      if(process.env.PRODUCTION){
        mng_upload_page.updatePage("uploading", {});
        const link = await dmn_repositories.uploadImg(data);
        const img = await dmn_repositories.getImg(link);
      }else{
        console.log("dev server")
        mng_upload_page.updatePage("uploaded", {url:"https://via.placeholder.com/150/56a8c2",data:"https://via.placeholder.com/150/56a8c2"});
      }
      
    } catch (err) {
      mng_upload_page.updatePage("error", {
        title: "Error",
        message: err.message,
      });
    }
  },
};
export default mng_repositories;
