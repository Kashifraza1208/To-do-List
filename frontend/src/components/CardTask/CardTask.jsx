// Imports
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import { RiDeleteBinLine } from "react-icons/ri";

import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import formatDate from "../../Utils/formatDate";
import DeleteTaskModal from "../DeleteTaskModal/DeleteTaskModal";
import TaskModal from "../TaskModal/TaskModal";
import {
  CardContainer,
  StatusBtn,
  Footer,
  Settings,
  IconContainer,
  DateContainer,
} from "./CardTask.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask, updateTask } from "../../redux/actions/taskAction";
import { UPDATE_TASK_RESET } from "../../redux/constants/taskConstants";

const CardTask = ({ taskData, viewTask }) => {
  const [state, setState] = useState(taskData.status);
  const [deleteTaskShow, setDeleteTask] = useState(false);
  const [showAddNewTask, setShowAddNewTask] = useState(false);

  const dispatch = useDispatch();

  const { isUpdated } = useSelector((state) => state.updateDelete);

  useEffect(() => {
    if (isUpdated) {
      dispatch({ type: UPDATE_TASK_RESET });
    }
    dispatch(getAllTask());
  }, [dispatch, isUpdated]);

  const handleToggleState = () => {
    if (taskData.status === "Completed") {
      taskData.status = "In-Progress";
    }
    if (taskData.status === "In-Progress") {
      taskData.status = "Pending";
    }

    dispatch(
      updateTask(
        taskData.title,
        taskData.description,
        taskData.duedate,
        taskData.status,
        taskData._id
      )
    );
    setState(taskData.status);
  };

  useEffect(() => {
    setState(taskData.status);
  }, [taskData]);

  console.log(state);

  return (
    <CardContainer viewTask={viewTask}>
      <Card.Body>
        <Card.Title>{taskData.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-dark">
          {taskData.description}
        </Card.Subtitle>
        <Card.Text>
          <DateContainer style={{ color: "white" }}>
            <span>
              <BsFillCalendarDateFill />
            </span>
            <span>{formatDate(taskData.duedate)}</span>
          </DateContainer>
        </Card.Text>
      </Card.Body>
      <hr />
      <Footer viewTask={viewTask}>
        <StatusBtn
          viewTask={viewTask}
          state={state}
          onClick={handleToggleState}
        >
          {state}
        </StatusBtn>
        <Settings viewTask={viewTask}>
          <IconContainer>
            <RiDeleteBinLine onClick={() => setDeleteTask(true)} size={25} />
          </IconContainer>
          <IconContainer>
            <MdEdit onClick={() => setShowAddNewTask(true)} size={25} />
          </IconContainer>
        </Settings>
      </Footer>
      <DeleteTaskModal
        deleteTaskShow={deleteTaskShow}
        setDeleteTask={setDeleteTask}
        singleTask={true}
        id={taskData._id}
        title={taskData.title}
      />
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Edit"}
        taskData={taskData}
      />
    </CardContainer>
  );
};

export default CardTask;
