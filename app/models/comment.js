
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
  _article : {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  }
});

CommentSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Comment', CommentSchema);
