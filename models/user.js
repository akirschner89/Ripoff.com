module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name:  {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });

  User.associate = function(db) {
    // Associating User with Listing
    // When an User is deleted, also delete any associated Listing(s)
    User.hasMany(db.Listing, {
      onDelete: "cascade"
    });
  };

  return User;
};
