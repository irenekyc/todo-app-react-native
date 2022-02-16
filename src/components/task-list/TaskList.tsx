import React, { FunctionComponent, useState, useEffect } from "react";

import * as Styled from "./styles";
import { TaskItemType } from "../../typings/Task";

import TaskItem from "../task-item";

import {
  FILTER_LIST,
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_ACTIVE,
} from "../../constans/filter";
import { FilterType } from "../../typings/Filter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { TASK_STATUS_ACTIVE, TASK_STATUS_COMPLETED } from "../../constans/task";
import { clearCompletedTasks } from "../../reducer/task/actions";

const TaskList: FunctionComponent = () => {
  const [tasks, setTasks] = useState<TaskItemType[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>(FILTER_ALL);
  const {
    tasks: tasksList,
    number: { active: activeNumber, completed: completedNumber },
  } = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();

  const { theme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (currentFilter === FILTER_ALL) {
      setTasks(tasksList);
    } else if (currentFilter === FILTER_ACTIVE) {
      setTasks(
        tasksList.filter(
          (task: TaskItemType) => task.status === TASK_STATUS_ACTIVE
        )
      );
    } else if (currentFilter === FILTER_COMPLETED) {
      setTasks(
        tasksList.filter(
          (task: TaskItemType) => task.status === TASK_STATUS_COMPLETED
        )
      );
    }
  }, [currentFilter, tasksList]);

  useEffect(() => {
    setTasks(tasksList);
  }, [tasksList]);

  const onClickClearCompleteButton = () => {
    dispatch(clearCompletedTasks());
  };

  return (
    <Styled.TaskList theme={theme}>
      <Styled.TaskListContent>
        <Styled.TaskListWrapper>
          {tasks.map((task: TaskItemType) => (
            <TaskItem task={task} key={task.id} />
          ))}
          <Styled.SettingRow theme={theme}>
            <Styled.SettingRowText theme={theme}>
              {" "}
              {activeNumber} items left
            </Styled.SettingRowText>
            {completedNumber > 0 && (
              <Styled.ClearCompletedButton onPress={onClickClearCompleteButton}>
                <Styled.SettingRowText theme={theme}>
                  {" "}
                  Clear Completed
                </Styled.SettingRowText>
              </Styled.ClearCompletedButton>
            )}
          </Styled.SettingRow>
        </Styled.TaskListWrapper>
      </Styled.TaskListContent>
      {completedNumber !== 0 && activeNumber !== 0 && (
        <Styled.FilterRow theme={theme}>
          {FILTER_LIST.map((filter: FilterType) => (
            <Styled.FilterButton
              key={filter}
              onPress={() => setCurrentFilter(filter)}
            >
              <Styled.FilterButtonText
                active={filter === currentFilter}
                theme={theme}
              >
                {filter}
              </Styled.FilterButtonText>
            </Styled.FilterButton>
          ))}
        </Styled.FilterRow>
      )}
    </Styled.TaskList>
  );
};

export default TaskList;
