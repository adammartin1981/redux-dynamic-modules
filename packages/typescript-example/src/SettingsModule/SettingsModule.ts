import { ISettingsModuleState } from "./SettingsContracts";
import { ISagaModule } from "redux-dynamic-modules-saga";
import { settingsReducer } from "./SettingsReducer";
import { settingsRootSaga } from "./SettingsSaga";
import { SettingActions } from "./SettingsActions";

export const SettingsModule: ISagaModule<ISettingsModuleState> = {
    id: "settings",
    reducerMap: {
        settingsState: settingsReducer,
    },
    initialActions: [SettingActions.loadPreferences()],
    sagas: [settingsRootSaga],
};
