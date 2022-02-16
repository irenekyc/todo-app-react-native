import React, { FunctionComponent } from "react";
import * as Styled from "./styles";
import { TaskItemType } from "../../typings/Task";
import Checkbox from "../checkbox";
import { TASK_STATUS_COMPLETED } from "../../constans/task";
import Icon from "react-native-vector-icons/Entypo";
import { THEME_DEFAULT } from "../../constans/theme";

interface TaskItemProps {
  task: TaskItemType;
}

const TaskItem: FunctionComponent<TaskItemProps> = ({
  task,
}: TaskItemProps) => {
  const { content, status } = task;
  return (
    <Styled.TaskItem theme={THEME_DEFAULT}>
      <Checkbox active={status === TASK_STATUS_COMPLETED} />
      <Styled.TaskItemContent theme={THEME_DEFAULT}>
        {content}
      </Styled.TaskItemContent>
      <Styled.TaskItemDeleteButton>
        <Icon name="cross" color="gray" size={24} />
      </Styled.TaskItemDeleteButton>
    </Styled.TaskItem>
  );
};

export default TaskItem;
