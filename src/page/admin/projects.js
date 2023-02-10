// import { projectFake } from "../../data";
import { useEffect, useState } from "../../lib";

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        // console.log(this.dataset.id)
        const id = this.dataset.id;
        console.log(id)
        fetch(`http://localhost:3000/projects/{$id}`,{
            method: "DELETE",
        }).then(()=>{
            // nếu xóa thành công thì render lại màn hình
            const newprojects = projects.filter((project) => project.id != id);
            setProjects(newprojects);
        })
        
      });
    }
  });

  return `
        <div class="container pt-5">
            <h1>Quản lí dự án</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên dự án</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                    ${projects
                      .map((project, index) => {
                        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td>
                            <button data-id="${
                              project.id
                            }" class="btn btn-danger btn-remove">Remove</button>
                            <a href="/admin/projects/${project.id}/edit">Edit</a>
                            </td>
                        </tr>
                        `;
                      })
                      .join("")}
                        
                    </tbody>
            </table>
        </div>`;
};

export default AdminProjectsPage;
