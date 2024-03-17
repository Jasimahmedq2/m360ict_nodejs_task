import db from "../../db/db";
import { ISong } from "./song.interface";

const createSong = async (payload: ISong): Promise<ISong | any> => {
  const song = await db("songs").insert(payload).returning("*");
  return song;
};

export const SongServices = {
    createSong
}
