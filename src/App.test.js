// import React from "react";

// const gramPositiveClicked = () => {
//   if (condition) {
//   }

//   return (
//     <div className="flex">
//       <div className="pages">
//         <button>Gram (+) rod</button>
//       </div>
//     </div>
//   );
// };

// export default gramPositiveClicked;

// import axios from 'axios';

// const apiBaseUrl = 'https://h69is095ia.execute-api.us-east-1.amazonaws.com/prod';

// it("TEST ", async () => {
//   expect(true);
//   //   const healthApiUrl = apiBaseUrl.concat('/health');
//   //   const response = await axios.get(healthApiUrl);
//   //   expect(response.status).toEqual(200);
//   //   expect(response.statusText).toEqual('OK');
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./Components/header";
import { getName } from "./Components/firebaseUtils";
import RoutingButtons from "./Components/RoutingButtons";
import firebase from "firebase";

it("renders welcome message", () => {
  render(<App />);
  expect(screen.getByText("Homepage")).toBeInTheDocument();
  expect(screen.getByText("Gram Negative")).toBeInTheDocument();
  expect(screen.getByText("Gram Positive")).toBeInTheDocument();
});

it("renders header", () => {
  render(<Header />);
  expect(screen.getByText("Reset")).toBeInTheDocument();
  expect(screen.getByText("Back")).toBeInTheDocument();
  expect(screen.getByText("GermGang")).toBeInTheDocument();
});

// it("renders header", async () => {
//   // render(
//   //   <RoutingButtons button={["Gram Positive 0000", "Gram Negative 0000"]} />
//   // );
//   render(<App />);
//   console.log(screen.getByText("Gram Positive"));
//   // console.log(screen.getAllByText("button"));
//   expect(screen.getByText("Gram Positive")).toBeInTheDocument();
//   // let con = firebase.database().ref("germs");
//   // //takes a slice of this data based upon the parameters (name) and only the first one
//   // let snap = await con
//   //   .orderByChild("name")
//   //   .limitToFirst(1)
//   //   .equalTo("Gram Positive 0000")
//   //   .once("value")
//   //   .catch((err) => console.error(err));
//   // const x = await getName("Gram Positive 0000");
//   // console.log(con);
//   // console.log()
// });
