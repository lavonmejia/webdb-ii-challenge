
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN',128).unique().notNullable();
        tbl.string('make',128).notNullable();
        tbl.string('model',128).notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.string('transmission_type',128).nullable();
        tbl.string('status_of_title',128).nullable();
    })
  
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTableIfExists('cars');
  
};
