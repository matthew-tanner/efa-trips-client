import React from 'react'
import styled from 'styled-components'
import { Route, Link, Switch } from "react-router-dom";
import { bool } from 'prop-types'

import Home from '../Home/Home';
import Portal from '../Auth/Portal';
import TripsIndex from '../Trips/TripsIndex';
import TripActivityIndex from "../Activities/TripActivityIndex"


const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
`

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%
`

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: white;
    font-family: 'Varela Round', sans-serif;
    font-weight: 500;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 300ms ease-in-out;

    &:hover {
        border-top: 2px solid #FB743E;
    }
`

const Link1 = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;

    &:hover {
        color: #FB743E;
    }
`

const NavLinks = (props) => {
    return(
        <>
        <NavLinksContainer>
            <LinksWrapper>
                {/* <LinkItem to="/Home"><Link href='#'>Home</Link></LinkItem>
                <LinkItem to="/Home"><Link href='#'>Activity Search</Link></LinkItem>
                <LinkItem to="/Home"><Link href='#'>Trip Planner</Link></LinkItem> */}
                   


                <LinkItem ><Link to="/Home" className='link1'><Link1>Home</Link1></Link></LinkItem>
                <LinkItem ><Link to="/Trips" className='link1'><Link1>Trip Planner</Link1></Link></LinkItem>
                <LinkItem ><Link to="/tripActivityIndex" className='link1'><Link1>Activities</Link1></Link></LinkItem>

            </LinksWrapper>
        </NavLinksContainer>
                <div className="nav-route">
                    <Switch>
                        <Route exact path="/home">
                        <Home token={props.token} newToken={props.newToken} logout={props.logout} />
                        </Route>
                        <Route exact path="/portal">
                        <Portal token={props.token} newToken={props.newToken} logout={props.logout} />
                        </Route>
                        <Route exact path="/trips">
                        <TripsIndex token={props.token} open={props.open} setOpen={props.setOpen} newToken={props.newToken} logout={props.logout} />
                        </Route>
                        <Route exact path="/tripActivityIndex">
                        <TripActivityIndex token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjI2Nzk5MzI0LCJleHAiOjE2MjY4ODU3MjR9.Dl68Fm7oe-6Uz0Awbn2vM7Di9OOEyspQOAOGoex7DFQ'} 
                        tripId={2} />
                        </Route>
                        {/* <Route exact path="/activities">
                        <DisplayTripActivities token={props.token} newToken={props.newToken} logout={props.logout} />
                        </Route> */}
                    </Switch>
                </div>
                </>
    )
}

export default NavLinks