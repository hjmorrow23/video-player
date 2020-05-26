const comment = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      video_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      comment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
   
    return Comment;
  };
   
  export default comment;