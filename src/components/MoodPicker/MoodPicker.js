import { useState } from "react/cjs/react.development"

const moods= ["Happy", "Sad", "Angry"]


function MoodPicker({onPick}){


    return(
        <form>
            <label>Pick a mood</label>
            <select onChange={(e) => onPick(e)}>
                {moods.map((mood)=>{return <option>{mood}</option>})}
            </select>
    </form>
    )
}

export default MoodPicker