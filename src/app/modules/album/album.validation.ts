import { z } from "zod";

const CreateAlbum = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is required",
    }),
    release_year: z.string({
      required_error: "release_year is required",
    }),
    genre: z.string({
      required_error: "genre is required",
    }),
    artist_id: z.number().optional(),
  }),
});
const addArtistToAlbum = z.object({
  body: z.object({
    album_id: z.number({
      required_error: "album id is required",
    }),
    artist_id: z.number({
      required_error: "artist  id is required",
    }),
  }),
});

export const AlmubValidation = {
  CreateAlbum,
  addArtistToAlbum,
};
