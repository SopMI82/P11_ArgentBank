import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    token: null,        // pour stocker le token d'authentification
    userId: null,    // Ajout de l'ID utilisateur
    isLoading: false,   // pour gérer l'état de chargement
    error: null,         // pour stocker les messages d'erreur
    userProfile: null,  // Nouveau champ pour stocker les infos du profil
};

// Action asynchrone pour la connexion
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            console.log("Données reçues complètes:", data); // Pour déboguer

            if (!response.ok) {
                return rejectWithValue(data.message || 'Échec de la connexion');
            }

            return data; // On retourne la réponse complète
        } catch (error) {
            return rejectWithValue('Erreur réseau: ' + error.message);
        }
    }
);

// Ajout d'une nouvelle action asynchrone pour récupérer le profil
export const getUserProfile = createAsyncThunk(
    'auth/getUserProfile',
    async (_, { getState, rejectWithValue }) => {
        try {
            // Récupération du token depuis le state
            const token = getState().auth.token;

            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue(data.message || 'Échec de la récupération du profil');
            }

            return data;
        } catch (error) {
            return rejectWithValue('Erreur réseau: ' + error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Nous définirons les reducers ici
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.body.token;            
                state.error = null;
                console.log("Token stocké:", action.payload.body.token); // Pour déboguer
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            // ajout des cas pour la deuxieme fonction chargée de récupérer les infos utilisateur
        .addCase(getUserProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userProfile = action.payload.body;
            state.userId = action.payload.body.id;
            state.error = null;
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default authSlice.reducer;