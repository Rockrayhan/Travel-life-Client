import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Addservice from './Components/Addservice/Addservice';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageBlogs from './Components/ManageBlogs/ManageBlogs';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';
import Signin from './Components/Signin/Signin';
import AuthProvider from './Contex/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider> 
      <BrowserRouter>
      <Header> </Header>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/signin">
          <Signin></Signin>
        </Route>
        <PrivateRoute path="/booknow/:_id"> 
          <ServicesDetails></ServicesDetails>
          </PrivateRoute>
          <Route path="/addservice">
          <Addservice></Addservice>
          </Route>
         
          <Route path="/manageblogs">
            <ManageBlogs></ManageBlogs>
            </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
