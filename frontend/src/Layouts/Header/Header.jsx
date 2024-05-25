// Imports
import React, { useState } from "react";
import { Container, TaskBtn } from "./Header.styled";
import TaskModal from "../../components/TaskModal/TaskModal";

// import TaskModal from "Components/TaskModal/TaskModal";

const Header = () => {
  const [showAddNewTask, setShowAddNewTask] = useState(false);

  const handleNewTaskClick = () => {
    setShowAddNewTask(true);
  };

  return (
    <Container>
      <TaskBtn onClick={handleNewTaskClick} variant="primary">
        Add New Task
      </TaskBtn>{" "}
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Add"}
      />
    </Container>
  );
};

export default Header;
