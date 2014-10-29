
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommentSchema = new Schema({
  email: { 
    type: String,
    trim: true,
    default: '',
    required: 'Email cannot be blank.'
  },
  content: {
    type: String,
    trim: true,
    default: '',
    required: 'Content cannot be blank.'
  },
});

CommentSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Comment', ArticleSchema);
