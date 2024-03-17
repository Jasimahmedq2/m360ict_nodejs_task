import { z } from "zod";

const CreateArtist = z.object({
  body: z.object({
    name: z.string({
      required_error: " artist name is required",
    }),
  }),
});

export const artistsValidation = {
  CreateArtist,
};
