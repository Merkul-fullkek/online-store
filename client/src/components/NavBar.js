import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utilits/consts";
import {Button} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>MyBuy</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Admin Panel</Button>
                        <Button variant={"outline-light"} className="ml-2">Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;