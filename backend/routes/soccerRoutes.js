import {
  addNewPlayer,
  getAllPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerController";

const routes = (app) => {
  app.route("/").post(addNewPlayer).get(getAllPlayers);

  app
    .route("/:playerid")
    .get(getPlayerWithID)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
