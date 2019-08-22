const Models = require('../models/index.js');
describe('Models', () => {
  it('should use table name Revisions', () => {
    Models.Revisions.getTableName().should.eql('Revisions');
  });
});
