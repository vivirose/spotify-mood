import React, { useEffect, useState } from "react";
import { spotify } from "../../api/spotify";
import useMood from "../../hooks/useMood";



function Finder(){

    const playlists = useMood()
    console.log("finderplay", playlists)

    return(
        <div>
            {playlists.map((i)=>{
                return <div>{i}</div>}
            )}
        </div>
    )
}

export default Finder