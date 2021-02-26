import { useEffect } from "react";
import { ElementContainer } from "./task-element.styles";
import useTimer, { formatTime } from "../../hooks/useTimer";

const spanValue = (status: string): string | null => {
  return status === "todo" ? "Start" : status === "progress" ? "Resolve" : null;
};

const evalStatus = (status: string): string => {
  return status === "todo"
    ? "progress"
    : status === "progress"
    ? "done"
    : "done";
};

type ElementProps = {
  text: string;
  _id: string;
  status: string;
  time: number;
  cost: number;
  updateStatus: (status: string, id: string, time: number) => Promise<void>;
};

const TaskElement: React.FC<ElementProps> = ({
  text,
  _id,
  status,
  cost,
  updateStatus,
  time,
}) => {
  const { timer, handleStart, handlePause } = useTimer(
    status === "progress" ? time : 0
  );
  const updateHandler = () => {
    updateStatus(evalStatus(status), _id, timer);
  };
  useEffect(() => {
    handleStart();
    return () => {
      handlePause();
    };
  }, [handleStart, handlePause]);
  return (
    <ElementContainer>
      {text}
      <div className="options">
        {status === "done" && cost && (
          <span onClick={handleStart}> ${cost.toFixed(2)}</span>
        )}
        {status === "progress" && (
          <>
            <span onClick={handleStart}>{formatTime(timer)}</span>
            <span onClick={updateHandler}>{spanValue(status)}</span>
          </>
        )}
        {status === "todo" && (
          <span onClick={updateHandler}>{spanValue(status)}</span>
        )}
      </div>
    </ElementContainer>
  );
};

export default TaskElement;
