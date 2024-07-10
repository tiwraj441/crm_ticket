import React from "react";

import './App.css';
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./page/dashboard/Dashboard.page";

function App() {
  return (
    <div className="App">
      {/*<Entry/>*/}
     <DefaultLayout>


      <Dashboard/>
          
        


     </DefaultLayout>
   
    </div>
  );
}

export default App; 
