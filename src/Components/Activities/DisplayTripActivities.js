import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';

import { EditOutlined } from '@ant-design/icons';

import EditActivity from './EditActivity'


const DisplayTripActivities = (props) => {

    const { Meta } = Card;

    console.log(props.tripActivityList)

    const deleteActivity = (tripActivity) => {

        fetch(`http://localhost:3000/activity/${tripActivity.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
// ToDo:  Display a confirmation message?
        .then(() => props.fetchTripActivities())
    }

    return (
        <div className="site-card-wrapper" >
            <div >
                <Row >

                    {props.tripActivityList.map(tripActivity => {
                        return (
                            <Col>
{/* ToDo: Ant recommends having a max of 4 rows of cards.  Do we need to allow for an unlimited number of activities for a trip? */}
                                <Card
                                    className="activityCard"
                                    size="small"
                                    style={{ width: 300, margin: 10 }}
                                    cover={
                                        <img
                                            alt="Park Planner Logo"
                                            src="../../../assets/logo.png"
                                        />
                                    }
                                >
                                    <Meta
// ToDo: Add notes to the card.
                                        title={tripActivity.name}
                                        bordered={true}
                                        description={tripActivity.description}
                                    />
                                    <p>{tripActivity.notes}</p>

                                    <Button
                                        icon={<EditOutlined />}
                                        // onClick={() => { setVisible(true) }}
                                        onClick={() => {props.editUpdateActivity(tripActivity); props.setVisible(true); props.updateOn()}}
                                    />

                                    <Button
                                        shape="circle"
                                        style={{ color: 'black', zIndex: 10 }}
                                        onClick={() => {deleteActivity(tripActivity)}}
                                    >
                                        X
                                    </Button>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </div>
        </div>
    )
}

export default DisplayTripActivities
