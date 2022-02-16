import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
} from "../constans/filter";

export type FilterType =
  | typeof FILTER_ALL
  | typeof FILTER_ACTIVE
  | typeof FILTER_COMPLETED;
