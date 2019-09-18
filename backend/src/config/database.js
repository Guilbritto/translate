module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'pzmtranslate',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
