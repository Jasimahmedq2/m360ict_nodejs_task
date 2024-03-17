import ApiError from "../../../errors/apiError";
import db from "../../db/db";
import { IAlbum } from "./album.interface";

const CreateAlbum = async (
  artist_id: number,
  payload: IAlbum,
  user_id: number
) => {
  // add user id to the album
  payload.user_id = user_id;
  try {
    const [albumId] = await db("albums").insert(payload).returning("id");

    if (albumId && artist_id) {
      await db("albums_artists").insert({
        album_id: albumId?.id,
        artist_id: artist_id,
      });
    }

    return {
      message: "success",
    };
  } catch (error) {
    throw new ApiError(400, `something went wrong: ${error}`);
  }
};

const addArtistsToAlbum = async (artist_id: number, album_id: number) => {
  const isArtistExist = await db("albums_artists")
    .where({
      album_id: album_id,
      artist_id: artist_id,
    })
    .first();
  console.log({ album_id, isArtistExist, artist_id });
  // throw an error if artist exist
  if (isArtistExist) {
    throw new ApiError(401, "the artist already exist in the album");
  }

  const addArtist = await db("albums_artists")
    .insert({
      album_id: album_id,
      artist_id: artist_id,
    })
    .returning("*");
  return addArtist;
};

const retriveAlbums = async () => {
  const Albums = await db("albums")
    .join("albums_artists", "albums.id", "albums_artists.album_id")
    .distinct()
    .select("albums.*");
  return Albums;
};

export const AlbumServices = {
  CreateAlbum,
  retriveAlbums,
  addArtistsToAlbum,
};
