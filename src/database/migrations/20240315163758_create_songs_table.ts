import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("songs", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.integer("duration").notNullable();
    table.integer("album_id").unsigned().references("albums.id");
  });
}

export async function down(knex: Knex): Promise<void> {}
