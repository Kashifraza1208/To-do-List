// Imports
import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { ConfirmBtn } from "./DeleteTaskModal.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  deleteTask,
  getAllTask,
} from "../../redux/actions/taskAction";
import { DELETE_TASK_RESET } from "../../redux/constants/taskConstants";
import toast from "react-hot-toast";

const DeleteTaskModal = ({
  deleteTaskShow,
  setDeleteTask,
  singleTask,
  id,
  title,
}) => {
  const dispatch = useDispatch();

  const { isDeleted, error } = useSelector((state) => state.updateDelete);

  const closeDeleteTaskModal = () => {
    setDeleteTask(false);
  };

  const handleTaskDelete = () => {
    // delete a certain task
    if (singleTask) {
      dispatch(deleteTask(id));
    }

    closeDeleteTaskModal();
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      dispatch({ type: DELETE_TASK_RESET });
    }
    dispatch(getAllTask());
  }, [dispatch, isDeleted, error]);

  return (
    <Modal
      show={deleteTaskShow}
      onHide={closeDeleteTaskModal}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
        {singleTask && (
          <Modal.Title>Are you sure to delete {title}?</Modal.Title>
        )}
      </Modal.Header>
      {singleTask && (
        <Modal.Body>This task will be deleted permanently.</Modal.Body>
      )}

      <Modal.Footer>
        <Button variant="transparent" onClick={closeDeleteTaskModal}>
          Cancel
        </Button>
        <ConfirmBtn onClick={handleTaskDelete}>Confirm</ConfirmBtn>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;
