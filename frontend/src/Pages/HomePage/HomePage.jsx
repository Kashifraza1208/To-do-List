// Imports
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiList } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";

// Import styles
import {
  Container,
  CenterContainer,
  Section,
  CurrentItem,
  ShapeView,
  ChildView,
  HomeContainer,
} from "./HomePage.styled";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import ShowTasks from "../../Layouts/ShowTasks/ShowTasks";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask, getSingleTask } from "../../redux/actions/taskAction";
import Header from "../../Layouts/Header/Header";

// Import Components

const HomePage = () => {
  const [viewTask, setViewTask] = useState(true);

  const location = useLocation();
  const url = location.pathname;
  const navStateTasks = url.split("/")[1];

  const dispatch = useDispatch();

  const { allTask } = useSelector((state) => state.allTask);

  useEffect(() => {
    dispatch(getSingleTask());
    dispatch(getAllTask());
  }, [dispatch]);

  const handleViewList = () => {
    setViewTask(!viewTask);
  };
  const handleViewGrid = () => {
    setViewTask(!viewTask);
  };

  // Get the filtered tasks based on the current URL
  const getFilteredTasks = () => {
    switch (navStateTasks) {
      case "pending-tasks":
        return allTask.filter((task) => task.status === "Pending");
      case "completed-tasks":
        return allTask.filter((task) => task.status === "Completed");
      case "in-progress-tasks":
        return allTask.filter((task) => task.status === "In-Progress");
      default:
        return allTask;
    }
  };

  const checkUrl = (url) => {
    if (
      !(
        url === "pending-tasks" ||
        url === "completed-tasks" ||
        url === "in-progress-tasks" ||
        url === "all-tasks"
      )
    ) {
      return "all-tasks";
    }
    return navStateTasks;
  };

  // Set the current tasks to be the active link
  const currentTasksInPageView = getFilteredTasks();

  useEffect(() => {}, [allTask, currentTasksInPageView]);
  return (
    <HomeContainer>
      <Container>
        <Section>
          <LeftSideBar allTask={allTask} />
        </Section>
        <CenterContainer>
          <Header />
          <CurrentItem>
            {checkUrl(navStateTasks)} (
            {allTask && currentTasksInPageView.length} tasks)
          </CurrentItem>
          <ShapeView>
            <ChildView viewTask={viewTask} onClick={handleViewList}>
              <FiList size={25} />
            </ChildView>
            <ChildView viewTask={viewTask} onClick={handleViewGrid}>
              <CiGrid41 size={25} />
            </ChildView>
          </ShapeView>
          <Routes>
            <Route
              path="all-tasks"
              element={
                <ShowTasks
                  currentTasksInPageView={currentTasksInPageView}
                  viewTask={viewTask}
                />
              }
            />

            <Route
              path="pending-tasks"
              element={
                <ShowTasks
                  currentTasksInPageView={currentTasksInPageView}
                  viewTask={viewTask}
                />
              }
            />
            <Route
              path="completed-tasks"
              element={
                <ShowTasks
                  currentTasksInPageView={currentTasksInPageView}
                  viewTask={viewTask}
                />
              }
            />
            <Route
              path="in-progress-tasks"
              element={
                <ShowTasks
                  currentTasksInPageView={currentTasksInPageView}
                  viewTask={viewTask}
                />
              }
            />
            <Route
              path="/*"
              element={
                <ShowTasks
                  currentTasksInPageView={currentTasksInPageView}
                  viewTask={viewTask}
                />
              }
            />
          </Routes>
        </CenterContainer>
      </Container>
    </HomeContainer>
  );
};

export default HomePage;
