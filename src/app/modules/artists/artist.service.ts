import db from "../../db/db";

const createArtist = async (
  name: string
): Promise<IArtists | undefined | void | any> => {
  const artist = await db("artists").insert(name).returning("*");
  return artist;
};
const retrieveArtists = async (): Promise<IArtists[] | any> => {
  const artist = await db("artists").select("*");
  return artist;
};
const removeArtist = async (artistId: string): Promise<{ message: string }> => {
  const artist = await db("artists").where({ id: artistId }).del();
  return {
    message: "successfully removed",
  };
};
const updateArtist = async (
  artistId: string,
  name: string
): Promise<{ message: string }> => {
  const artist = await db("artists").where({ id: artistId }).update({ name });
  return {
    message: "successfully updated artist",
  };
};

export const ArtistsServices = {
  createArtist,
  retrieveArtists,
  removeArtist,
  updateArtist,
};
