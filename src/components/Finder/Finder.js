import React, { useEffect, useState } from "react";
import { spotify } from "../../api/spotify";
import useMood from "../../hooks/useMood";
import Song from "../Song/Song";


function Finder(){

    const { topSongInfo } = useMood()

    return(
        <div>
            {topSongInfo.name}
        </div>
    )
}

export default Finder