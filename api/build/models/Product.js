"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('products', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        model: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        lateral: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        fabric: {
            type: sequelize_1.DataTypes.ENUM("lienzo", "lino", "pana"),
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: sequelize_1.DataTypes.ENUM("negro", "blanco", "gris"),
            allowNull: false
        },
        mesures: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
            defaultValue: []
        },
        price: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
            defaultValue: []
        },
        deleted: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};
