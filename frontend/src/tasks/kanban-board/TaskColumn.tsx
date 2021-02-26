import { useState } from "react";
import TaskElement from "./TaskElement";
import { ColumnContainer } from "./task-column.styles";

export type Task = {
  text: string;
  status: string;
  _id: string;
  time: number;
  cost: number;
};

type ColumnProps = {
  tasks: Task[];
  title: string;
  sendTask: (task: { text: string; status: string }) => Promise<void>;
  updateStatus: (status: string, id: string, time: number) => Promise<void>;
};

const TaskColumn: React.FC<ColumnProps> = ({
  tasks,
  title,
  sendTask,
  updateStatus,
}) => {
  const [showAddArea, setShowAddArea] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState("");

  const submitTask = async () => {
    setShowAddArea(false);
    if (newTaskContent) {
      sendTask({ text: newTaskContent, status: title.toLowerCase() });
    }
  };

  return (
    <ColumnContainer props={title}>
      <span className="header">
        <h1>{title}</h1>
      </span>
      <div className="custom-scroll">
        <ul className="item-list">
          {tasks.map((task) => (
            <TaskElement
              updateStatus={updateStatus}
              key={task._id}
              text={task.text}
              _id={task._id}
              status={task.status}
              time={task.time}
              cost={task.cost}
            />
          ))}
        </ul>
      </div>
      <div className="add-btn-group">
        {!showAddArea && (
          <div className="add-btn" onClick={() => setShowAddArea(true)}>
            <span className="plus-sign">+</span>
            <span>Add item</span>
          </div>
        )}
        {showAddArea && (
          <div className="add-btn">
            <span onClick={submitTask}>Save Item</span>
          </div>
        )}
      </div>
      {showAddArea && (
        <div className="add-container">
          <textarea
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
            className="add-item"
          />
        </div>
      )}
    </ColumnContainer>
  );
};

export default TaskColumn;
