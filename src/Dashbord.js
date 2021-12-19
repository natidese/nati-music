import {useState , useEffect} from 'react'
import useAuth from './useAuth';
import { Container, Form } from "react-bootstrap"
import SpotifWebyApi from "spotify-web-api-node"

const spotifyApi = new SpotifWebyApi ({
    clientId: '66c171264aa94e1ca71ff2d7abc22303',


})

export default function Dashbord({ code }) {
    const accessToken = useAuth(code);
    const [search , setSearch]= useState("");
    const [searchRes , setSearchRes] =useState([])
    console.log(searchRes);

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken);
    },[accessToken])

    useEffect(() => {
        if(!search) return setSearch([])
        if (!accessToken) return

        spotifyApi.searchTracks(search)
        .then(res=>{
         setSearchRes(res.body.tracks.items.map(track =>{
               const smallestAlbumImage = track.album.images.reduce((smallest,image)=>
               {if (image.height <smallest.height)
                   return image
                   return smallest
            },track.album.images[0])
               return {
                   artist: track.artists[0].name,
                   title: track.name,
                   uri: track.uri,
                   albumUrl: smallestAlbumImage.url
               }
           }))
        })
    },[search , accessToken])

    return (
        <Container className="d-flex flex-column py-2" style={{height:'100vh'}}>
            <Form.Control
            type="search"
            placeholder="Search Songs/Artist"
            value={search}
            onChange={e => setSearch(e.target.value)} 
            />
            <div className="flex-grow-1 my-2" style={{overflowY:"auto"}}>
                Songs

            </div>
        </Container>
    )
}
