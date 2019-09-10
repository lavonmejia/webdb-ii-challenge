
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 745123789, make: 'chevy', model: 'malibu', mileage: 100000 },
          { VIN: 123456789, make: 'tesla', model: 'model x', mileage: 100000 },
          { VIN: 987654321, make: 'ford', model: 'mustang', mileage: 100000 },
      ]);
    });
};
