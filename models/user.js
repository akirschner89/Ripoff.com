module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  User.associate = function(models) {
    // Associating User with Listing
    // When an User is deleted, also delete any associated Listing(s)
    User.hasMany(models.Listing, {
      onDelete: "cascade"
    });
  };

  return User;
};
