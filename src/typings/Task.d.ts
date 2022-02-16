import { TASK_STATUS_ACTIVE, TASK_STATUS_COMPLETED } from "../constans/task";

export type TaskStatusType =
  | typeof TASK_STATUS_ACTIVE
  | typeof TASK_STATUS_COMPLETED;

export type TaskItemType = {
  id: string;
  content: string;
  status: TaskStatusType;
};
