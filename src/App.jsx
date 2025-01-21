import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Layout from './layout/Layout'
import Welcome from './pages/home'
import Tournaments from './pages/torneos'
import Teams from './pages/equipos'
import Series from './pages/series'
import SeriesUpcoming from './pages/torneos/SeriesUpcoming'
import Clubes from './pages/clubes'
import JugadoresProfile from './pages/jugadores/Perfil'

import RankingJugadores from './pages/rankings/Jugadores'
import RankingClubes from './pages/rankings/Clubes'
import RankingChampions from './pages/rankings/Champions'

import Jugadores from './pages/jugadores'
import TorneosAnteriores from './pages/torneos-anteriores'
import Colaboradores from './pages/colaboradores'
import Reglamento from './pages/reglamento'
import Nosotros from './pages/nosotros'

import Presentacion from './pages/presentacion'
import PageNotFound from './pages/PageNotFound'

import Weekend from './pages/weekend'
import WeekendTournament from './pages/weekend/Tournament'

import UsersLogin from './pages/users/Login'
import UsersRegistro from './pages/users/Registro'
import UsersPerfil from './pages/users/Perfil'
import UsersMisDatos from './pages/users/MisDatos'
import UsersRecuperar from './pages/users/RecuperarPassword'
import UsersRestablecer from './pages/users/RestablecerPassword'

const App = () => {
  ReactGA.initialize('G-G1DBH0K86R')

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route
            path='/'
            element={<Presentacion />}
          /> */}
          <Route
            path='/'
            element={<Welcome />}
          />
          <Route
            path='/torneos/:id'
            element={<Tournaments />}
          />

          <Route
            path='/clubes/:id'
            element={<Clubes />}
          />

          <Route
            path='/equipos/:id'
            element={<Teams />}
          />
          <Route
            path='/jugadores/:id'
            element={<JugadoresProfile />}
          />
          <Route
            path='/series/:id'
            element={<Series />}
          />
          <Route
            path='/calendario'
            element={<SeriesUpcoming />}
          />

          <Route
            path='/rankings/jugadores'
            element={<RankingJugadores />}
          />
          <Route
            path='/rankings/clubes'
            element={<RankingClubes />}
          />
          <Route
            path='/rankings/champions'
            element={<RankingChampions />}
          />
          <Route
            path='/torneos-anteriores'
            element={<TorneosAnteriores />}
          />
          <Route
            path='/jugadores'
            element={<Jugadores />}
          />
          <Route
            path='/colaboradores'
            element={<Colaboradores />}
          />
          <Route
            path='/reglamento'
            element={<Reglamento />}
          />

          <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/presentacion'
            element={<Presentacion />}
          />

          <Route
            path='/usuarios/login'
            element={<UsersLogin />}
          />
          <Route
            path='/usuarios/registro'
            element={<UsersRegistro />}
          />
          <Route
            path='/usuarios/perfil'
            element={<UsersPerfil />}
          />
          <Route
            path='/usuarios/misdatos'
            element={<UsersMisDatos />}
          />
          <Route
            path='/usuarios/recuperar-password'
            element={<UsersRecuperar />}
          />
          <Route
            path='/usuarios/restablecer-password'
            element={<UsersRestablecer />}
          />
          <Route
            path='/weekend'
            element={<Weekend />}
          />
          <Route
            path='/weekend/torneos/:id'
            element={<WeekendTournament />}
          />

          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
