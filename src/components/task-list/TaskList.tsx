import React, { FunctionComponent } from "react";

import * as Styled from "./styles";
import { TaskItemType } from "../../typings/Task";
import { TASK_STATUS_COMPLETED, TASK_STATUS_ACTIVE } from "../../constans/task";
import TaskItem from "../task-item";

import { Text } from "react-native";
import { FILTER_LIST } from "../../constans/filter";
import { FilterType } from "../../typings/Filter";
import { THEME_DEFAULT } from "../../constans/theme";

const tasks: TaskItemType[] = [
  { id: "1", content: "Todo 1", status: TASK_STATUS_COMPLETED },
  { id: "2", content: "Todo 2", status: TASK_STATUS_ACTIVE },
];

const TaskList: FunctionComponent = () => {
  const activeNumber = tasks.filter(
    (task: TaskItemType) => task.status === TASK_STATUS_ACTIVE
  ).length;
  const completedNumber = tasks.filter(
    (task: TaskItemType) => task.status === TASK_STATUS_COMPLETED
  ).length;
  return (
    <Styled.TaskList>
      <Styled.TaskListContent>
        <Styled.TaskListWrapper>
          {tasks.map((task: TaskItemType) => (
            <TaskItem task={task} key={task.id} />
          ))}

          <Styled.SettingRow theme={THEME_DEFAULT}>
            <Styled.SettingRowText theme={THEME_DEFAULT}>
              {" "}
              {activeNumber} items left
            </Styled.SettingRowText>
            {completedNumber > 0 && (
              <Styled.ClearCompletedButton>
                <Styled.SettingRowText theme={THEME_DEFAULT}>
                  {" "}
                  Clear Completed
                </Styled.SettingRowText>
              </Styled.ClearCompletedButton>
            )}
          </Styled.SettingRow>
        </Styled.TaskListWrapper>
      </Styled.TaskListContent>
      <Styled.FilterRow theme={THEME_DEFAULT}>
        {FILTER_LIST.map((filter: FilterType) => (
          <Styled.FilterButton key={filter}>
            <Styled.FilterButtonText
              active={filter === "All"}
              theme={THEME_DEFAULT}
            >
              {filter}
            </Styled.FilterButtonText>
          </Styled.FilterButton>
        ))}
      </Styled.FilterRow>
    </Styled.TaskList>
  );
};

export default TaskList;
