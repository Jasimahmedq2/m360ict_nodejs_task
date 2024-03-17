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

const retriveAlbums = async (
  albumId: number
): Promise<{ album: IAlbum; artists: IArtists[] } | null> => {
  const album: IAlbum | undefined = await db<IAlbum>("albums")
    .where({ id: albumId })
    .first();

  if (!album) {
    throw new ApiError(401, "album not found");
  }

  const artists: IArtists[] = await db<IArtists>("artists")
    .join("albums_artists", "artists.id", "=", "albums_artists.artist_id")
    .where("albums_artists.album_id", "=", albumId)
    .select("artists.*");

  const albumWithArtists: { album: IAlbum; artists: IArtists[] } = {
    album,
    artists,
  };
  return albumWithArtists;
};

const removeAlbum = async (album_id: number): Promise<{ message: string }> => {
  const remove = await db("albums").where({ id: album_id }).del();
  return {
    message: "deleted",
  };
};

const removeArtistFromAlbum = async (
  album_id: number,
  artist_id: number
): Promise<{ message: string }> => {
  const reomveArtist = await db("albums_artists")
    .where({ album_id: album_id, artist_id: artist_id })
    .del();
  return {
    message: "removed artist from album",
  };
};

export const AlbumServices = {
  CreateAlbum,
  retriveAlbums,
  addArtistsToAlbum,
  removeAlbum,
  removeArtistFromAlbum,
};
