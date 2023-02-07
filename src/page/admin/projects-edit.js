import { router, useEffect } from "@/lib";

const AdminProjectsEditPage = ({ id }) => {
  const projects = JSON.parse(localStorage.getItem("projects")|| []) ;
  const currentProject = projects.find((project) => project.id == id);
  console.log(projects)
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const projectName = document.querySelector("#project-name");
    const projectAuthor = document.querySelector("#project-author");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newProject = {
        id: currentProject.id,
        name: projectName.value,
        author: projectAuthor.value,
      };
      const newProjects = projects.map((project) => {
        return project.id == newProject.id ? newProject : project;
      });
      localStorage.setItem("projects", JSON.stringify(newProjects));
      router.navigate('/admin/projects')
    });
  });

  return `<div>
    <div class="container pt-5">
    <h1>Sửa dự án</h1>
        <form action="" id="form-edit">
            <div class="form-group">
                <label for="" class="form-label">Ten Dự án</label>
                <input type="text" class="form-control" id="project-name" value="${currentProject.name}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Tác giả</label>
                <input type="text" class="form-control" id="project-author" value="${currentProject.author}" />
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>  
</div>`;
};

export default AdminProjectsEditPage;
