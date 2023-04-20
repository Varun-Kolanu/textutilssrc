import Alert from "./Alert";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState("blueDark");
  
  const toggleMode = (mode, colorBg) => {
    setMode(mode);
    document.body.style.backgroundColor = colorBg;
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
        
        <TextForm
                heading="Try TextUtils- Word Counter, Character Counter, remove extra spaces"
                mode={Mode}
                alert={alert}
                showAlert={showAlert}
              />
              
        </div>
      </>
  );
}

export default App;
