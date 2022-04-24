import {nanoid} from 'nanoid'
export default function RandomExperimentCode(){
    
}

export function newCode(){
//    const short = require('short-uuid')
//    const translator = short();
//    const code = translator.new()
  const code = nanoid(7)
    return code
}
/*
*/

