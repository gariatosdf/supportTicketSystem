const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');

const Complaint_categories = sequelize.define('complaint_categories',{
    name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dcm_organization_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_active: {
        type: DataTypes.TINYINT,
        allowNull: true,

    }
},{
    tableName: 'dcm_complaint_categories',
    timestamps: false
})

module.exports = Complaint_categories;