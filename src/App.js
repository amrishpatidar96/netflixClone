import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { Routes,Route, withRouter,Outlet } from "react-router-dom" ;
import { store } from "./services/ReduxStore";
import DashboardPage from './pages/DashboardPage'
import NewandPopular from './pages/NewandPopularPage'
import Mypage from './pages/MyPage'
import Movies  from './pages/MoviesPage';
import Tvshows from './pages/TvShowsPage';


function App() {
  return (
    <div className="App">
     <Provider store={store}>
     
      <Routes>
         
          <Route
            
            path="/"
            element={<DashboardPage/>}
          >
            
              
            <Route path='browse' index element={<Mypage message="Default Dashboard Page" />} exact />
            <Route path="genre/83" element={<Tvshows />} />
            <Route path="genre/34399" element={<Movies message="Movies Page" />} />
            <Route path="latest" element={<NewandPopular />} />
            <Route path="my-list" element={<Mypage message="My List Page" />} />
              
            


          </Route>

      </Routes>
     
     </Provider>
    </div>
  );
}

export default App;
