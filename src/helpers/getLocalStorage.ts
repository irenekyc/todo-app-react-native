import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskItemType } from "../typings/Task";
import { TASK_STORAGE, THEME_STORAGE } from "../constans/system";
import { ThemeType } from "../typings/Theme";
import { THEME_DEFAULT } from "../constans/theme";

const getLocalStorage = async (): Promise<{
  tasks: TaskItemType[];
  theme: ThemeType;
}> => {
  let tasks: TaskItemType[] = [];
  let theme: ThemeType = THEME_DEFAULT;
  try {
    const taskRes = await AsyncStorage.getItem(TASK_STORAGE);
    if (taskRes) {
      tasks = JSON.parse(taskRes) as TaskItemType[];
    }

    const themeRes = await AsyncStorage.getItem(THEME_STORAGE);
    if (themeRes) {
      theme = themeRes as ThemeType;
    }
  } catch (err) {
    // To somthing
  }
  return {
    tasks,
    theme,
  };
};

export default getLocalStorage;
