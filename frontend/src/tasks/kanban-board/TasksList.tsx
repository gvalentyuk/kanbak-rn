import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/httpHook";

import TaskColumn from "./TaskColumn";
import { Task } from "./TaskColumn";
import { ListContainer } from "./task-list.styles";

const TasksList: React.FC = () => {
  const auth = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const { sendRequest } = useHttp();

  const updateStatus = async (status: string, id: string, time: number = 0) => {
    try {
      const responseData = await sendRequest(
        `${process.env.BACKEND_URI}/tasks`,
        "PUT",
        {
          Authorization: `Bearer ${auth.user.token}`,
          "Content-Type": "application/json",
        },
        JSON.stringify({ status, id, time })
      );
      setTasks(responseData.list);
    } catch (e) {}
  };

  const sendTask = async (task: { status: string; text: string }) => {
    try {
      const responseData = await sendRequest(
        `${process.env.BACKEND_URI}/tasks`,
        "POST",
        {
          Authorization: `Bearer ${auth.user.token}`,
          "Content-Type": "application/json",
        },
        JSON.stringify(task)
      );
      setTasks(responseData.list);
    } catch (e) {}
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.BACKEND_URI}/tasks`,
          "GET",
          { Authorization: `Bearer ${auth.user.token}` }
        );
        setTasks(responseData.list);
      } catch (e) {}
    };

    fetchTasks();
  }, [sendRequest, auth.user.token]);

  return (
    <ListContainer>
      <TaskColumn
        updateStatus={updateStatus}
        sendTask={sendTask}
        title={"ToDo"}
        tasks={tasks.filter((task: Task) => task.status === "todo")}
      />
      <TaskColumn
        updateStatus={updateStatus}
        sendTask={sendTask}
        title={"Progress"}
        tasks={tasks.filter((task: Task) => task.status === "progress")}
      />
      <TaskColumn
        updateStatus={updateStatus}
        sendTask={sendTask}
        title={"Done"}
        tasks={tasks.filter((task: Task) => task.status === "done")}
      />
    </ListContainer>
  );
};

export default TasksList;
