
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: { 
    type: String,
    trim: true,
    default: '',
    required: 'Title cannot be blank.'
  },
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

ArticleSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Article', ArticleSchema);
