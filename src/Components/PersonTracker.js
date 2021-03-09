import * as React from "react";

//this class is the global class tracking the array of nodes.

 const PersonTracker = React.createContext(
    {
        buttonNameArray: [{
            name: "Homepage",
            image: "nothing here for now",
            buttonList: ["Gram Positive", "Gram Negative"]
        }],
        updateArray: () => {}
    }

);

export default PersonTracker;