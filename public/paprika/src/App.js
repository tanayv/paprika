import React from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  let uploader;
  if (typeof code !== undefined && code !== null) {
    console.log("RECEIVED CODE", code);
    Axios.get("https://berlinwall.herokuapp.com/api/auth?code="+code, (response) => {
      console.log(response);
      uploader = <><form action="https://berlinwall.herokuapp.com/api/upload" method="POST" enctype="multipart/form-
      data">
     <input type="file" name="file" />
     <input type="submit" value="Upload File"/>
     </form></>;
    }, (error) => {
      console.log(error);
    });
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
      {uploader}
    </div>
  );
}

export default App;
