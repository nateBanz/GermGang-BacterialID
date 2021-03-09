import logo from './logo.svg';
import './App.css';
import QuestionPage from "./Components/QuestionPage";
import {useState} from "react";
import firebase from './firebase';

function App() {
  //const [specificGerm, updateGerm] = useState();

  //test the firebase attachment
  const firebaser = firebase.apps[0]
  console.log(firebaser)


  return (
      <div>

   <QuestionPage></QuestionPage>

        <code>
          <pre>{JSON.stringify(firebaser.options, null, 2)}</pre>
        </code>

</div>
  );
}

export default App;
