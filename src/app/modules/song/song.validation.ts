import { z } from "zod";

const createSong = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is required",
    }),
    duration: z.number({
      required_error: "song duration is required",
    }),
    album_id: z.number({
      required_error: "album_id is required",
    }),
  }),
});

export const SongValidation = {
  createSong,
};
