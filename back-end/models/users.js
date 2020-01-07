module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING(40),
        allowNull: true,
        unique: true
      },
      nick: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      provider: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: "google"
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
