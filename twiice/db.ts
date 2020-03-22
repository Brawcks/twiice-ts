// In this file, we should handle database connection (SQL in case)

// Config file which store every needed data
const Config = require('config');
const dbSettings = Config.postgresql

// Option 1: Passing parameters separately
const sequelize = new Sequelize(dbSettings.database, dbSettings.user, dbSettings.password, {
    host: dbSettings.host,
    dialect: 'postgres',
    logging: msg => logger.info(msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = {
    DB: Sequelize,
    conn: sequelize,
    model: Sequelize.Model
}
