import * as React from "react";

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