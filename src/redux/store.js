import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import filterSlice from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Используем localStorage

// Настройка persist для редьюсеров
const persistConfig = {
  key: 'root', // ключ для хранения состояния в хранилище
  storage, // хранилище будет в localStorage
  whitelist: ['people', 'filters'], // сохраняем как people (контакты), так и filters (фильтры)
};

// Оборачиваем редьюсеры с persistReducer
const persistedContactsReducer = persistReducer(persistConfig, contactsSlice);
const persistedFilterReducer = persistReducer(persistConfig, filterSlice);

// Создаём store с persisted редьюсерами
const store = configureStore({
  reducer: {
    people: persistedContactsReducer, // сохраняем контакты
    filters: persistedFilterReducer,  // сохраняем фильтры
  },
});

// Создаём объект для персистенции
const persistor = persistStore(store);
export default store
export {persistor };
