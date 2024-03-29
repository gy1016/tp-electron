import { FC } from "react";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { IPondResult, ITaskResult } from "@/renderer/types/task";
import { EMO_JI_MAP } from "@/renderer/settings/site";
import TaskCard from "../task-card";
import "./index.less";

interface IPondProps {
  pondInfo: IPondResult;
  taskList: Array<ITaskResult>;
  toggleEditModal: (taskId: number) => void;
}

const Pond: FC<IPondProps> = ({ pondInfo, taskList, toggleEditModal }) => {
  const { name_cn: nameCn, info: desc, id } = pondInfo;

  return (
    <div className="tp-pond">
      <div className="tp-pond-header">
        <span className="pond-header-emoji">
          {`${EMO_JI_MAP[id]} `}
          <span className="pond-name">{nameCn + " "}</span>
          <Tooltip placement="rightTop" title={desc}>
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
        <div className="pond-header-count">{`共计:${taskList?.length}条`}</div>
      </div>
      <Droppable droppableId={String(id)}>
        {(provided) => (
          <div
            className="tp-pond-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskList?.map((t, idx) => (
              <Draggable key={t.id} index={idx} draggableId={"drag" + t.id}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <TaskCard
                      toggleEditModal={toggleEditModal}
                      key={t.id}
                      task={t}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided?.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Pond;
