module.exports = function (sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
        groupname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Group;
}