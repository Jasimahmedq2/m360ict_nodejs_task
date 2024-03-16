import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return  knex.schema.createTable('albums_artists', function(table) {
        table.increments('id').primary();
        table.integer('album_id').unsigned().references('albums.id');
        table.integer('artist_id').unsigned().references('artists.id');
    });
}


export async function down(knex: Knex): Promise<void> {
}

