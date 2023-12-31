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
    commentId: {
        type: Number,
    },
    name: {
        type: Schema.Types.Mixed,
    },
    comment: {
        type: String,
    },
    commentTime: {
        type: String
    }
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
