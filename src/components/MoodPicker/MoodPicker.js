import "./MoodPicker.css"

const moods= ["Pick a Mood:", "Happy", "Sad", "Annoyed", "Lonely", "Confident", "Calm", "Anxious", "Blessed", "Loving"]


function MoodPicker({onPick}){


    return(
        <form>
            <select onChange={(e) => onPick(e)} className="moodDropdown" aria-label="Pick a mood">
                {moods.map((mood)=>{return <option key={mood}>{mood}</option>})}
            </select>
    </form>
    )
}

export default MoodPicker