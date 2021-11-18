import useMood from "../../hooks/useMood";
import { spotify } from "../../api/spotify";
import { useEffect, useState } from "react/cjs/react.development";


function Song() {

    const { topSongId } = useMood();

    console.log("songid1", topSongId)
   

    return (
        <div>{topSongId}</div>
    )
}

export default Song