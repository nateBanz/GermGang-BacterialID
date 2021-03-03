import * as React from "react";

 const PersonTracker = React.createContext(
    {
        buttonNameArray: ["Homepage"],
        updateArray: () => {}
    }

);

export default PersonTracker;