import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import CeoList from "./components/CeoList";
import AddCeo from "./components/AddCeo";

function App() {
  const [reload, setReload] = useState(false);
  
  const handleReload = (status) => {
    setReload(status);
  }

  return (
    <div className="App">
      <h1>Apple CEOs</h1>  
      <AddCeo handleReload={handleReload}/>
      <Router>
        <CeoList reload={reload} />
      </Router>
    </div>
  );
}

export default App;
