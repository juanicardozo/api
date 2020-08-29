module.exports = function(sequelize, datatypes){
    let alias = "Genre";
    let cols = {
        id: {
            type: datatypes.INTEGER(10).UNSIGNED,
            primaryKey : true,
            autoIncrement : true
        },
        name: {
            type: datatypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: datatypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        active: {
            type: datatypes.INTEGER(1).UNSIGNED,
            allowNull: false
        },
    }
    let config = {
        tableName: 'genres',
        timestamps: true,
        underscored: true,
    }
    let genre = sequelize.define(alias, cols, config);
    return genre; 
}