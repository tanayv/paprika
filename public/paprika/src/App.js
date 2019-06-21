import React from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  let uploader;
  if (typeof code !== undefined && code !== null) {
    console.log("RECEIVED CODE", code);
    Axios.get("https://berlinwall.herokuapp.com/api/auth?code="+code)
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/login/oauth/authorize?client_id=Iv1.ab929d25982c75d7"
        >
          Sign In Using GitHub
        </a>
      </header>
      <><form action="https://berlinwall.herokuapp.com/api/upload" method="POST" enctype="multipart/form-data">
     <input type="file" name="example"/>
     <input type="submit" value="Upload File"/>
     </form></>;
    </div>
  );
}

export default App;
