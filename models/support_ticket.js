const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');

const supportTicket = sequelize.define('suppoert_ticket',{
    summary :{
        type: DataTypes.TEXT,
        allowNull: false
    },
    ticket_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description :{
        type: DataTypes.TEXT,
        allowNull: false
    },
    dcm_complaint_categories_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    root_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM,
        values: ['complaints','query'],
        defaultValue: 'complaints'
    },
    start_on: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    dcm_statuses_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
    },
    assigned_to: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    from_app: {
        type: DataTypes.STRING,
        allowNull: true
    },
    due_on: {
        type: DataTypes.DATE,
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
        defaultValue: 0

    }
},{
    tableName: 'dcm_support_ticket',
    timestamps: false
})


module.exports = supportTicket;