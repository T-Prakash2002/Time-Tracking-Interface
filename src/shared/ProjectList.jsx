import React, { useState } from "react";
import Timer from "../shared/Timer";

const ProjectList = ({ project, setProjects, projects, setAddEdit }) => {
  const handleDelete = (id) => {
    const filterObj = projects.filter((item) => item.id != id);

    setProjects(filterObj);
  };
  const handleUpdate = () => {
    setAddEdit({
      id: project.id,
      description: project.project_name,
      text: "Edit",
    });
  };

  return (
    <>
      <div className="p-2" id="projectName">
        {project.project_name}
      </div>
      <div className="">
        <Timer project={project} />
      </div>
      <div className="d-flex justify-content-between ">
        <button
          className="btn btn-outline-warning"
          onClick={() => handleUpdate(project.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => handleDelete(project.id)}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};

export default ProjectList;
//       {/* <div className="form-timer row">
//         <div className="col-12 col-md-4">
//           <input
//             type="text"
//             className="form-control"
//             onChange={handleChange}
//             placeholder="What are you working on?"
//           />
//         </div>
//
//         <div className="col-12 col-md-8 d-flex align-items-center">
//           <Timer ProjectName={ProjectName}/>
//         </div>
//       </div> */}onClick={()=>handleDelete(project.id)}
