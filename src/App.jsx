import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Scenarios from "./pages/Scenarios.jsx";
import Roles from "./pages/Roles.jsx";
import Metrics from "./pages/Metrics.jsx";
import ScenarioDetails from "./pages/ScenarioDetails.jsx";
import Package from "./pages/Package.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import EventConstructor from "./components/EventConstructor.jsx";
import Checklist from "./components/Checklist.jsx";



function App() {


  return (


    <Routes>


      <Route

        path="/"

        element={<Home />}

      />





      <Route

        path="/constructor"

        element={<EventConstructor />}

      />





      <Route

        path="/scenarios"

        element={<Scenarios />}

      />





      <Route

        path="/scenario/:id"

        element={<ScenarioDetails />}

      />





      <Route

        path="/dashboard"

        element={<Dashboard />}

      />





      <Route

        path="/package"

        element={<Package />}

      />





      <Route

        path="/checklist/:id"

        element={<Checklist />}

      />





      <Route

        path="/roles"

        element={<Roles />}

      />





      <Route

        path="/metrics"

        element={<Metrics />}

      />


    </Routes>


  );


}



export default App;