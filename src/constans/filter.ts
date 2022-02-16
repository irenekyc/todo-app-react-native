import { TASK_STATUS_ACTIVE, TASK_STATUS_COMPLETED } from "./task";
import { FilterType } from "../typings/Filter";

export const FILTER_ALL = "All";
export const FILTER_ACTIVE = TASK_STATUS_ACTIVE;
export const FILTER_COMPLETED = TASK_STATUS_COMPLETED;

export const FILTER_LIST: FilterType[] = [
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
];
