import { router, useEffect } from "../../lib";

const AdminProjectsAddPage = () => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const project_name = document.querySelector("#project-name");
    const project_author = document.querySelector("#project-author");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const project = {
        id: projects.length + 1,
        name: project_name.value,
        author: project_author.value,
      };
      console.log(project)
      projects.push(project);
      localStorage.setItem("projects", JSON.stringify(projects));
    //    console.log(projects)
      router.navigate("/admin/projects");
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
