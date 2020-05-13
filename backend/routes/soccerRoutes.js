import {
  addNewPlayer,
  getAllPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerController";

const routes = (app) => {
  app.route("/players").post(addNewPlayer).get(getAllPlayers);

  app
    .route("/player/:playerid")
    .get(getPlayerWithID)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
