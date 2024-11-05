import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // Ajustez le chemin d'importation selon votre structure de projet

const store = configureStore({
    reducer: {
        auth: authReducer  // On ajoute le reducer auth ici
    },
});

export default store