import React, { useEffect, useState } from "react";
import { spotify } from "../../api/spotify";
import useMood from "../../hooks/useMood";



function Finder(){
    const { topSong } = useMood();

    return(
        <div>
            {topSong}
        </div>
    )
}

export default Finder