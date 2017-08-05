module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Listing.associate = function(models) {
    // We're saying that a Listing should belong to an Author
    // A Listing can't be created without an Author due to the foreign key constraint
    Listing.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Listing;
};