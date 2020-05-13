import mongoose from "mongoose";
import { playerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", playerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const getAllPlayers = (req, res) => {
  Player.find({}, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const getPlayerWithID = (req, res) => {
  let id = req.params.playerid;
  console.log(id);
  Player.findById(id, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const updatePlayer = (req, res) => {
  let id = req.params.playerid;
  Player.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    (err, Player) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "player with id has been updated" });
    }
  );
};

export const deletePlayer = (req, res) => {
  let id = req.params.playerid;
  Player.findOneAndDelete({ _id: id }, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Player successfully deleted" });
  });
};
