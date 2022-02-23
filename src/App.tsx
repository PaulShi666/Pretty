import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Pretty from "./components/Pretty";

function App() {
    const [prettyData,setPrettyData] = useState(
        JSON.stringify(["'/foo'","'/bar'",{"baz":"baz","quz":{"quz":"quz"}},["'/baz'",["/qux"]]])
    );
  return (
    <div className="App">
      <Pretty data={prettyData}/>
    </div>
  );
}

export default App;
