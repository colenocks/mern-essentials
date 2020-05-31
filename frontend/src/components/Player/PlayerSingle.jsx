import React from "react";

const PlayerSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12 m8">
        <div className="card">
          <div className="card-image">
            <img src="soccer.jpg" alt="soccer" />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              <strong>Phone:</strong>{" "}
              {props.player.phone ? props.player.phone : "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {props.player.email}
            </p>
            <p>
              <strong>Speed:</strong>{" "}
              {props.player.speed ? props.player.speed : "N/A"}
            </p>
            <p>
              <strong>Strength:</strong>{" "}
              {props.player.strength ? props.player.strength : "N/A"}
            </p>
            <strong>Stamina:</strong>{" "}
            {props.player.stamina ? props.player.stamina : "N/A"}
            <p></p>
            <p>
              <strong>Technique: </strong>
              {props.player.technique ? props.player.technique : "N/A"}
            </p>
            <p>
              <strong>Team:</strong>{" "}
              {props.player.team ? props.player.team : "N/A"}
            </p>
          </div>
          <form>
            <input type="hidden" name="id" value={props.player._id || ""} />
            <div className="card-action">
              <div className="row">
                <div className="col s3">
                  <button
                    type="submit"
                    className="btn waves-effect waves-dark"
                    name="action"
                  >
                    Edit
                  </button>
                </div>
                <div className="col s3">
                  <button
                    type="button"
                    className="btn waves-effect waves-dark"
                    name="action"
                    onClick={() =>
                      props.canDelete
                        ? props.deletePlayer(props.player._id)
                        : window.M.toast({ html: "Select a player first" })
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
