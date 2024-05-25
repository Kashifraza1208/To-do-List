// Imports
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  ModalContainer,
  Label,
  Footer,
  AddTaskBtn,
  AlertTitle,
} from "./TaskModal.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  getAllTask,
  updateTask,
} from "../../redux/actions/taskAction";
import { UPDATE_TASK_RESET } from "../../redux/constants/taskConstants";

const TaskModal = ({
  showAddNewTask,
  setShowAddNewTask,
  taskMode,
  taskData,
}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(
    taskMode === "Edit" ? taskData?.title : ""
  );

  const [duedate, setDueDate] = useState(
    taskMode === "Edit" ? taskData?.duedate : new Date()
  );

  const [description, setDescription] = useState(
    taskMode === "Edit" ? taskData?.description : ""
  );

  const [status, setStatus] = useState(
    taskMode === "Edit" ? taskData?.status : "Pending"
  );

  const [titleIsUsed, setTitleIsUsed] = useState(false);

  const { isUpdated } = useSelector((state) => state.updateDelete);
  const { isAdded } = useSelector((state) => state.createTask);

  // handle submition of add task
  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "" && duedate !== "") {
      setTitleIsUsed(false);
      dispatch(addTask(title, description, duedate, status));
      clearAllData();
      setShowAddNewTask(false);
    } else setTitleIsUsed(true);
  };

  // Submit editing task
  const handleEditTask = (e) => {
    e.preventDefault();
    dispatch(updateTask(title, description, duedate, status, taskData._id));
    setShowAddNewTask(false);
  };

  useEffect(() => {
    if (isAdded) {
      dispatch(getAllTask());
    }

    if (isUpdated) {
      dispatch({ type: UPDATE_TASK_RESET });
    }
    dispatch(getAllTask());
  }, [dispatch, isUpdated, isAdded]);

  // clear all data
  const clearAllData = () => {
    setTitle("");
    setDescription("");
    setStatus(false);
    setTitleIsUsed(false);
  };

  return (
    <ModalContainer
      show={showAddNewTask}
      onHide={() => setShowAddNewTask(false)}
    >
      <Modal.Header closeButton>
        {taskMode === "Add" && <Modal.Title>Add a task</Modal.Title>}
        {taskMode === "Edit" && <Modal.Title>Edit a task</Modal.Title>}
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title (required)</Form.Label>
            <Form.Control
              placeholder="Enter Tast Title"
              autoFocus
              value={title}
              maxLength="100"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            {titleIsUsed && <AlertTitle>Task's Name Used Before</AlertTitle>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Label>Date (required)</Label>
            <DatePicker
              selected={duedate}
              onChange={(date) => setDueDate(date)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Label>Description (required)</Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
              maxLength="500"
              value={description}
            />
          </Form.Group>
        </Form>

        <Form.Select
          aria-label="Default select example"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Task Status</option>
          <option value="Pending">Pending</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Completed">Completed</option>
        </Form.Select>
      </Modal.Body>
      <Footer>
        {taskMode === "Add" && (
          <AddTaskBtn onClick={handleSubmitTask}>Add Task</AddTaskBtn>
        )}
        {taskMode === "Edit" && (
          <AddTaskBtn onClick={handleEditTask}>Edit Task</AddTaskBtn>
        )}
      </Footer>
    </ModalContainer>
  );
};

export default TaskModal;
