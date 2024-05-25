// Imports
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useLocation } from "react-router-dom";

// import styles

import TaskModal from "../TaskModal/TaskModal";
import {
  OffcanvasContainer,
  Header,
  TaskBtn,
  NavBtn,
} from "./LeftSideBar.styled";

const LeftSideBar = () => {
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  const location = useLocation();
  const url = location.pathname;
  const allTasks = url.split("/")[1];
  return (
    <>
      <OffcanvasContainer
        show={true}
        backdrop={false}
        enforceFocus={false}
        scroll={true}
      >
        <Header>
          <Offcanvas.Title>to-do list</Offcanvas.Title>
          <TaskBtn
            onClick={() => {
              setShowAddNewTask(true);
            }}
          >
            Add New Task
          </TaskBtn>{" "}
        </Header>
        <Offcanvas.Body>
          <NavBtn
            exact
            to="all-tasks"
            className={
              allTasks === "pending-tasks" ||
              allTasks === "completed-tasks" ||
              allTasks === "in-progress-tasks"
                ? ""
                : "active"
            }
          >
            All Tasks
          </NavBtn>
          <NavBtn to="pending-tasks">Pending Tasks</NavBtn>
          <NavBtn to="completed-tasks">Completed Tasks</NavBtn>
          <NavBtn to="in-progress-tasks">In-Progress Tasks</NavBtn>
        </Offcanvas.Body>
      </OffcanvasContainer>
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Add"}
      />
    </>
  );
};

export default LeftSideBar;
