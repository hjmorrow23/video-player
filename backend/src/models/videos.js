const video = (sequelize, DataTypes) => {
    const Video = sequelize.define('video', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });

    Video.associate = models => {
        Video.hasMany(models.Comment, { onDelete: 'CASCADE' });
    };
   
    return Video;
  };
   
  export default video;