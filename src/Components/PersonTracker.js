import * as React from "react";

//this class is the global class tracking the array of nodes.

 const PersonTracker = React.createContext(
    {
        buttonNameArray: [{
            name: "Homepage 0000",
            image: "nothing here for now",
            buttonList: ["Gram Positive 0000", "Gram Negative 0000"]
        }],
        updateArray: () => {}
    }

);

export default PersonTracker;