import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskItemType } from "../typings/Task";
import { TASK_STORAGE, THEME_STORAGE } from "../constans/system";
import { ThemeType } from "../typings/Theme";

type UpdateStorageParams = {
  task?: {
    data: TaskItemType[];
  };
  theme?: {
    data: ThemeType;
  };
};

const updateStorageData = async ({ task, theme }: UpdateStorageParams) => {
  try {
    if (task) {
      await AsyncStorage.setItem(TASK_STORAGE, JSON.stringify(task.data));
    }
    if (theme) {
      await AsyncStorage.setItem(THEME_STORAGE, JSON.stringify(theme.data));
    }
  } catch (err) {
    // To somthing
  }
};

export default updateStorageData;
