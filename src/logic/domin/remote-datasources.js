const rmt_datasource = {
  getImg(url) {
    const img = "https://via.placeholder.com/600/92c952";
    return img;
  },
  async uploadImg(data) {
    let formData =new FormData();
   
    formData.append("photo",data[0]);
    
    console.log(formData);
    const res=await fetch("http://localhost:5000/api/upload-img",{
      method:"Post",
      body:formData,
      headers: {"enctype":"multipart/form-data"},
    });
    if(res.status>=200 && res.status<300)
    {
      const link=await res.json().imgLink;
      return link;
    }
    let json=await res.json();
    
    throw Error(json.message);
    
  },
  getLink(hash) {
    const link = "https://via.placeholder.com/600/92c952";
    return link;
  },
};

export default rmt_datasource;
