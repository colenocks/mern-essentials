import React from "react";

const PlayerSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="soccer.jpg" alt="soccer" />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {props.player.phone}- Email: {props.player.phone}
            </p>
            <p>
              Speed: {props.player.speed}- Strength: {props.player.strength}
            </p>
          </div>
          <div className="card-action">
            <p>Team: {props.player.team}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
