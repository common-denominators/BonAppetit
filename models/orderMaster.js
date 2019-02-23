module.exports = function (sequelize, DataTypes) {
    var OrderMaster = sequelize.define("OrderMaster", {
        ordername: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 1
            }
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        restaurant: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 1
            }
        },
        runner: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 1
            }
        },
        reason: {
            type: DataTypes.STRING
        }
    })
    return OrderMaster;
}