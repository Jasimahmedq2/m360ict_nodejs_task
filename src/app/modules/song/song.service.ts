import db from "../../db/db";
import { ISong } from "./song.interface";

const createSong = async (payload: ISong): Promise<ISong | any> => {
  const song = await db("songs").insert(payload).returning("*");
  return song;
};
const retrieveSongs = async (): Promise<ISong[] | any> => {
  const song = await db("songs").select("*");
  return song;
};
const updateSong = async (songId: string, payload: Partial<ISong>) => {
  const song = await db("songs").where({ id: songId }).update(payload);
  return song;
};
const deleteSong = async (songId: string) => {
  const song = await db("songs").where({ id: songId }).del();
  return song;
};

export const SongServices = {
  createSong,
  retrieveSongs,
  updateSong,
  deleteSong,
};
