// Imports
import React from "react";

import CardTask from "../../components/CardTask/CardTask";
import { ContainerTasks } from "../../Pages/HomePage/HomePage.styled";

const ShowTasks = ({ currentTasksInPageView, viewTask }) => {
  return (
    <>
      <ContainerTasks>
        {currentTasksInPageView.map((task, index) => {
          return <CardTask key={index} taskData={task} viewTask={viewTask} />;
        })}
      </ContainerTasks>
    </>
  );
};

export default ShowTasks;
