import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

export default function App() {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </LanguageProvider>
  );
}