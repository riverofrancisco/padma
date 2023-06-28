import { DataTypes } from 'sequelize';

module.exports = (sequelize: any) => {
    sequelize.define('products', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lateral: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        fabric: {
            type: DataTypes.ENUM("lienzo", "lino", "pana"),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.ENUM("negro", "blanco", "gris"),
            allowNull: false
        },
        mesures: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            defaultValue: []
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            defaultValue: []
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}