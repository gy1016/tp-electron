import { DragDropContext } from "react-beautiful-dnd";
import useAuth from "@/renderer/hooks/useAuth";
import { usePonds, useTasks } from "@/renderer/hooks/useTaskPonds";
import Pond from "./components/pond";
import { IPondResult, ITaskResult } from "@/renderer/types/task";
import "./index.less";

const TaskPanel = () => {
  const { user } = useAuth();
  const ponds: Array<IPondResult> = usePonds();
  const tasks: Array<ITaskResult> = useTasks(user?.id);
  const toggleEditModal = () => {
    console.log("SPZ");
  };

  const onDragEnd = () => {
    console.log("SPZ");
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-panel">
        {ponds?.map((p) => (
          <Pond
            key={p.id}
            pondInfo={p}
            taskList={tasks?.filter((t) => t.belong === p.id)}
            toggleEditModal={toggleEditModal}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskPanel;
