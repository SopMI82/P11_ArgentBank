import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import router from './Router'
import './index.css'

// QUAND JE FERAI LA MISE EN PLACE DE REDUX :
// ajouter "import { Provider } from 'react-redux;" et "import store from './redux/store';"" dans les imports
// remplacer le contenu du routeur par "<Provider store = {store}><RouterProvider router={router}/></Provider>" a l'intérieur des balises StrictMode

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
