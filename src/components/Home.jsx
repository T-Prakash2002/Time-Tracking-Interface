import React, { useState, useContext } from "react";
import "../Style/home.css";
import ProjectList from "../shared/ProjectList";
import { ContextApi } from "../Context/UserCotext";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [AddEdit, setAddEdit] = useState({
    id: 0,
    description: "",
    text: "Add",
  });
  const { user,addProject } = useContext(ContextApi);


  // new Project
  const handleSubmit = async() => {
    const newProject = {
      id: uuidv4(),
      userEmail: user.email,
      project_name: AddEdit.description,
      time: 0,
      createDate: new Date(),
      endDate:''
    };

    setProjects([...projects, newProject]);

    await addProject(newProject);
    setAddEdit({ ...AddEdit, description: "" });
  };

  //Edit Project
  const handleSubmitUpdate = () => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === AddEdit.id ? { ...project, project_name: AddEdit.description } : project
      )
    );
    setAddEdit({ id: 0, description: "", text: "Add" });
  };

  return (
    <div className="home container-fluid">
      <div className="AddProject row">
        <div className="row g-3">
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="What are you working on?"
              onChange={(e) =>
                setAddEdit({ ...AddEdit, description: e.target.value })
              }
              value={AddEdit.description}
              required
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              onClick={() => {
                if (AddEdit.text == "Add") {
                  handleSubmit();
                } else {
                  handleSubmitUpdate();
                }
              }}
              className="btn btn-primary mb-3"
            >
              {AddEdit.text} Project
            </button>
          </div>
        </div>
      </div>

      <div className="projectListGroup row p-2">
        {projects.map((project, index) => {
          return (
            <div key={index} className="projectlist">
              <ProjectList
                project={project}
                setProjects={setProjects}
                projects={projects}
                setAddEdit={setAddEdit}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
