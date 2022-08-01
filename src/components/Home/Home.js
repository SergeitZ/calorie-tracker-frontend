import React, { useContext } from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import splashImg from "../../assets/castle.jpg"
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
    const [auth] = useContext(AuthContext)

    return (
        <Container>
            <Splash image={splashImg} style={{height: "100vh", color: "#f1f1f1"}}>
                <h1 style={{color: "brown", textShadow: "1px 1px black"}}>Welcome athlete!</h1>
                <h2 style={{color: "brown", textShadow: "1px 1px black"}}>"Fortress of Swolitude"</h2>
                <h2 style={{color: "black"}}>Welcome to your space, lets train</h2>
                {/* <h2>{auth.token}</h2> */}
            </Splash>
        </Container>
    )
}

export default Home;