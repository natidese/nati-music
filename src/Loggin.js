import React from 'react'
import {Container} from 'react-bootstrap'


const AUTO_URL = "http://accounts.spotify.com/authorize?client_id=66c171264aa94e1ca71ff2d7abc22303&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Loggin() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
            <a className="btn btn-success btn-lg" href={AUTO_URL}>Nati-Music Loggin</a>
        </Container>
    )
}
