import {
  model,
  Schema,
} from 'mongoose';

import {
  IComment,
  INewBook,
  IReview,
} from './newbook.interface'; // Replace with the correct path to your interfaces

const reviewSchema = new Schema<IReview>({
    repliedCommentId: {
        type: Number,
    },
    reviewerName: {
        type: String,
    },
    reviewerComment: {
        type: String,
    },
    reviewTime: {
        type: String,
    }
});

const commentSchema = new Schema<IComment>({
    userId: {
        type: Number,
    },
    commentAndRating: {
        type: Schema.Types.Mixed,
    },
    timeOfComment: {
        type: String,
    },
    reviews: [reviewSchema]
});

const newBookSchema = new Schema<INewBook>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publicationDate: {
        type: String,
        required: true
    },
    bookPicture: [String],
    comments: [commentSchema]
});

const Book = model<INewBook>("BooksCollections", newBookSchema);

export default Book;
