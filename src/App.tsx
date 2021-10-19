
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import rutas from './route-config'
import './App.css'
import NavBar from './Utils/NavBar';
import configurarValidaciones from './validaciones';
import Footer from './Utils/Footer'
function App() {
    configurarValidaciones();

  return (
    <>
    <div className="page-container ">
    <BrowserRouter basename={process.env.PUBLIC_URL}>

    <div className="content-wrap">

        <NavBar />
        <div className="container-fluid">
          <Switch>
            {rutas.map(ruta => <Route
              key={ruta.path}
              path={ruta.path}
              exact={ruta.exact}>
                <ruta.componente /> 
            </Route>)}
          </Switch>
        </div>
     
      </div>
        <Footer />  
        
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
