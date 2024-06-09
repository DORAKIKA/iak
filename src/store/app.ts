/** app state */

import { reactive } from "vue";

interface AppState {
  header: {
    cover: string;
  };
}

const appState = reactive<AppState>({
  header: {
    cover: "",
  },
});
