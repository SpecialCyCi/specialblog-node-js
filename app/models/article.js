
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
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], 
  created_at: { type: Date }, 
  updated_at: { type: Date }
});

ArticleSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  })
  .pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
      }
    next();
  });

mongoose.model('Article', ArticleSchema);
