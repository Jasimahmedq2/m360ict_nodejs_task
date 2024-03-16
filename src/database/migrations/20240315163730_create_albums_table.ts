import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return  knex.schema.createTable('albums', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.integer('release_year').notNullable();
        table.string('genre').notNullable();
    });
    
}

export async function down(knex: Knex): Promise<void> {}
