import axios from "axios";

const URL = "https://streamly-v5o7.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artistspj`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
//console.log(responseArtists.data);
