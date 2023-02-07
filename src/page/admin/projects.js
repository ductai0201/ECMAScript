// import { projectFake } from "../../data";
import { useEffect, useState } from "../../lib";

const AdminProjectsPage = () => {
    const [data,setData] = useState([]);
    // console.log(data)

    useEffect(()=>{
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        setData(projects)
    },[])
    useEffect(function(){
        const btns = document.querySelectorAll('.btn')
        for(let btn of btns){
            btn.addEventListener('click',function(){
                // console.log(this.dataset.id)
                const id = this.dataset.id;
                // console.log(id)
                const newprojects = data.filter((project)=> project.id != id) 
               console.log(localStorage.setItem("projects", JSON.stringify(newprojects))) 
                setData(newprojects);
            })
        } 
    })
    
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
                    ${data.map((project,index)=>{
                        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td>
                            <button data-id="${project.id}" class="btn btn-danger btn-remove">Remove</button>
                            <a href="/project/:id/:action">Edit</a>
                            </td>
                        </tr>
                        `
                    }).join('')}
                        
                    </tbody>
            </table>
        </div>`;
};

export default AdminProjectsPage;
