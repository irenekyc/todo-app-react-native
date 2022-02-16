import React, { FunctionComponent } from "react";
import * as Styled from "./styles";
import { TaskItemType } from "../../typings/Task";
import Checkbox from "../checkbox";
import { TASK_STATUS_COMPLETED, TASK_STATUS_ACTIVE } from "../../constans/task";
import Icon from "react-native-vector-icons/Entypo";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { updateTaskStatus, deleteTask } from "../../reducer/task/actions";

interface TaskItemProps {
  task: TaskItemType;
}

const TaskItem: FunctionComponent<TaskItemProps> = ({
  task,
}: TaskItemProps) => {
  const { content, status, id } = task;
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const onClickCheckBox = () => {
    dispatch(
      updateTaskStatus({
        taskId: id,
        updatedStatus:
          status === TASK_STATUS_ACTIVE
            ? TASK_STATUS_COMPLETED
            : TASK_STATUS_ACTIVE,
      })
    );
  };

  const onClickDeleteButton = () => {
    dispatch(deleteTask(id));
  };

  return (
    <Styled.TaskItem theme={theme}>
      <TouchableOpacity onPress={() => onClickCheckBox()}>
        <Checkbox active={status === TASK_STATUS_COMPLETED} />
      </TouchableOpacity>
      <Styled.TaskItemContent theme={theme}>{content}</Styled.TaskItemContent>
      <Styled.TaskItemDeleteButton onPress={onClickDeleteButton}>
        <Icon name="cross" color="gray" size={24} />
      </Styled.TaskItemDeleteButton>
    </Styled.TaskItem>
  );
};

export default TaskItem;
