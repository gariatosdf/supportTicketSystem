const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');

const Contacts = sequelize.define('contacts',{
    first_name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    dcm_organization_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dcm_hierarchies_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_extern01: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_active: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0

    }
},{
    tableName: 'dcm_contacts',
    timestamps: true,
    createdAt : 'created_at',
    updatedAt: 'updated_at'
})


module.exports = Contacts;