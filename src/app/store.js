import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/user/userSlice";
import projectReducer from "../features/project/projectSlice"
import singleProjectSlice from "../features/project/singleprojectSlice"
import loginUserSlice from "../features/user/loginuserSlice"
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

// Redux Persist configuration
const persistConfig = {
    key: "user",
    storage,
};
const projectPersistConfig = {
    key: "project",
    storage,
};
const singleprojectPersistConfig = {
    key: "singleproject",
    storage,
};
const loginuserPersistConfig = {
    key: "loginuser",
    storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedProjectReducer = persistReducer(projectPersistConfig, projectReducer);
const persistedSingleProjectReducer = persistReducer(singleprojectPersistConfig, singleProjectSlice);
const persistedLoginUserReducer=persistReducer(loginuserPersistConfig,loginUserSlice)

export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        project: persistedProjectReducer,
        singleproject: persistedSingleProjectReducer,
        loginuser: persistedLoginUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
