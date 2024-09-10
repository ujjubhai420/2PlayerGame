import express from "express";
import {WebSocket, WebSocketServer} from "ws";
import cors from "cors";
import { addUser } from "./Game.js";

const app=express();
app.use(express.json());
app.use(cors);
const server=app.listen(8080,()=>{console.log("listening on port 8080")})

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  addUser(ws)
  
});

