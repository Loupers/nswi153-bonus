import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Nav, NavItem } from 'reactstrap';
import { Navbar } from "reactstrap";
import { NavbarToggler } from "reactstrap";

const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

const Layout = () => {
    const inputProps = useInput();
    return (
        <div className="container" >
            <Navbar color="light"
                expand="md"
                fixed="top"
                style={{backgroundColor: "#071740", position: "sticky"}}>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem><NavLink to="/About">About</NavLink></NavItem>
                        <NavItem><NavLink to="/up">Up</NavLink></NavItem>
                        <NavItem><NavLink to="/down">Down</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <div className="row">
                <div className="col">
                    <StyledInput {...inputProps} placeholder="Type in me"></StyledInput>
                    <span>Value: {inputProps.value} </span>
                </div>
                <div className="col">
                    <Button color="danger" onClick={inputProps.resetInputField}>Clear me</Button>
                </div>
            </div>
        </div>
    );
};

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
        setValue(e.target.value);
    }

    const resetInputField = () => {
        setValue("");
    };

    return {
        value,
        onChange,
        resetInputField
    };
}

export default Layout;
