import axios from "axios"

export const searchYoutube = (text) => {
  // const youtubeKey = process.env.REACT_APP_GITHUB_KEY
  // console.log(youtubeKey);
  return axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=${text}&key=AIzaSyAr5BAZ6EIJ4QCgThp9jh2Xkkygb8eeHx0`
    )
}
export const searchGithub = (text) => {
  return axios.get(`https://api.github.com/users/${text}`)
}