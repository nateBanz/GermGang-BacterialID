import * as React from "react";

//this class is the global class tracking the array of nodes.

 const PersonTracker = React.createContext(
    {
        buttonNameArray: [{
            name: "Homepage 0000",
            image: "https://images-ext-1.discordapp.net/external/i9Sm7SJlP_Cud2bLMpml0JfaX7QfZi86JvG43TC6hU8/https/www.verywellhealth.com/thmb/-jD_krAWs3AEusH0FN_Mpm3pB3I%3D/2823x2117/smart/filters%3Ano_upscale%28%29/microphotograph-of-example-of-staining-bacteria-using-gram-method--at-x1250-magnification-173288072-ab648ac296f846faaa075a7101f06024.jpg?width=1248&height=936",
            buttonList: ["Gram Positive 0000", "Gram Negative 0000"]
        }],
        updateArray: () => {}
    }

);

export default PersonTracker;
