import { router, useEffect } from "../../lib";

const AdminProjectsAddPage = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const project_name = document.querySelector("#project-name");
    const project_author = document.querySelector("#project-author");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: project_name.value,
        author: project_author.value,
      };
      console.log(formData);
      //call API (fetch....)

      // Giong setTimeOut (router....)
      fetch("http://localhost:3000/projects",{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(formData),
      }).then(() => router.navigate("/admin/projects"));
    });
  });
  return `
        <div class="container pt-5">
            <form action="" id="form-add">
                <div class="form-group">
                    <label for="" class="form-label">Tên dự án</label>
                    <input type="text" class="form-control" id="project-name">
                </div>
                
                <div class="form-group">
                    <label for="" class="form-label">Tên tác giả</label>
                    <input type="text" class="form-control" id="project-author">
                </div>
                <button class="btn btn-primary mt-3">Thêm dự án</button>
            </form>
        </div>`;
};

export default AdminProjectsAddPage;
