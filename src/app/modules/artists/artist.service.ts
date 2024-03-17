import db from "../../db/db";

const createArtist = async (
  name: string
): Promise<IArtists | undefined | void | any> => {
  const artist = await db("artists").insert(name).returning("*");
  return artist;
};

export const ArtistsServices = {
  createArtist,
};
