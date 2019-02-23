module.exports = function (sequelize, DataTypes) {
    var OrderDetail = sequelize.define("OrderDetail", {
        menuitem: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 1
            }
        },
        specialrequest: {
            type: DataTypes.STRING
        }
    })
    return OrderDetail;
}