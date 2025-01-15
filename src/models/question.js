const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Question = sequelize.define(
  'Question',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quizId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'quiz_id',
      references: {
        model: 'quizzes',
        key: 'id',
      },
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    options: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    explanation: {
      type: DataTypes.TEXT,  // Assuming 'mdx-content' is stored as TEXT
      allowNull: false,
    },
    marks: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
  },
  {
    tableName: 'questions',  // Note the lowercase table name
    underscored: true,
  }
)

module.exports = Question