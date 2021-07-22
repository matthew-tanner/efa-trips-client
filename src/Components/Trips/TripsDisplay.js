import React, { useState } from "react";
import { Card, Button } from "antd";
import APIURL from "../../Utils/Environment";

const TripsDisplay = (props) => {
  const [trips, setTrips] = useState([]);

  const fetchTrips = () => {
    fetch(`${APIURL}/trip/all`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((tripData) => {
        setTrips(tripData);
        console.log(tripData);
      })
      .catch((err) => console.log(err));
  };

  const deleteTrips = (trip) => {
    fetch(`${APIURL}/trip/${trip.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then(() => fetchTrips())
      .catch((err) => console.log(err));
  };
  
  const editTrips = (trip) => {
    fetch(`${APIURL}/trip/${trip.id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then(() => fetchTrips())
      .catch((err) => console.log(err));
  };

  const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <>
      <div className="view-trips-grid">
        <Card title="Trips">
          {trips.map((trip) => {
            return (
              <Card.Grid style={gridStyle}>
                Trip Name: {trip.name}
                <br />
                <Button
                  onClick={() => {
                    deleteTrips(trip);
                  }}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    editTrips(trip);
                  }}
                >
                  Edit
                </Button>
              </Card.Grid>
            );
          })}
        </Card>
      </div>
    </>
  );
};
export default TripsDisplay;
