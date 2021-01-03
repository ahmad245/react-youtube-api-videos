import axios from 'axios';
const KEY="AIzaSyD-LrA3hViV7Bs32LIgg_CDOsdAit0ipBM";
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY

    }
})