
export default function RandomExperimentCode(){
    
}

export function newCode(){
    const short = require('short-uuid')
    const translator = short();
    const code = translator.new()
    return code
}
/*
*/

