/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Revisions', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    model: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    document: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    document_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    revision: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operation: {
      type: DataTypes.STRING(7),
    },
  }, {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
};
