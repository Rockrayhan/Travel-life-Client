import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Addservice from './Components/Addservice/Addservice';
import DashBoard from './Components/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageBlogs from './Components/ManageBlogs/ManageBlogs';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';
import Login from './Components/Signin/Login';
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

        <Route path="/login">
          <Login></Login>
        </Route>

        <PrivateRoute path="/booknow/:_id"> 
          <ServicesDetails></ServicesDetails>
          </PrivateRoute>

          <PrivateRoute path="/addservice">
          <Addservice></Addservice>
          </PrivateRoute>
         
          <PrivateRoute path="/manageblogs">
            <ManageBlogs></ManageBlogs>
            </PrivateRoute>

          <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
            </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
            </PrivateRoute>

      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
