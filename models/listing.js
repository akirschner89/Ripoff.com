module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
      imageName: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });

  Listing.associate = function(models) {
    // We're saying that a Listing should belong to a User
    // A Listing can't be created without a User due to the foreign key constraint
    Listing.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Listing;
};