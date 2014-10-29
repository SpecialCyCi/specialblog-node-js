
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: { 
    type: String,
    trim: true,
    default: '',
    required: 'Title cannot be blank.'
  },
  url:     String,
  content: String
});

ArticleSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Article', ArticleSchema);
