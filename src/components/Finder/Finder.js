import React, { useEffect, useState } from "react";
import { spotify } from "../../api/spotify";
import useMood from "../../hooks/useMood";



function Finder(){
    const { playlists, songs } = useMood();

    return(
        <div>
            {songs?.join()}
            {playlists?.length && playlists.map((i)=>{
                return <div>{i}</div>}
            )}
        </div>
    )
}

export default Finder