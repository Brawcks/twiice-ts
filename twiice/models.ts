const db = require('twiice/db');
const Sequelize = require('sequelize');

// Sequelize objects
const Model = Sequelize.Model;
const sequelize = db.conn;

class dbModel extends Model {
    constructor() {
        this.lastUpdateOn = {
            type: Sequelize.STRING,
            allowNull: false
        },
        this.lastUpdatedBy = {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
}

class tw_view extends dbModel {}
tw_view.init({
    // attributes
    viewName: {
        type: db.DB.STRING,
        allowNull: false
      },
    viewType: {
        type: db.DB.STRING
        // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'tw_view'
    // options
});

class tw_user extends dbModel {}
tw_user.init({
    // attributes
    userName: {
        type: db.DB.STRING,
        allowNull: false
      },
    lastName: {
        type: db.DB.STRING
        // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'user'
    // options
});
