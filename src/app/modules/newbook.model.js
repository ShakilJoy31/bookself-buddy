"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
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
const commentSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
    },
    commentAndRating: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    timeOfComment: {
        type: String,
    },
    reviews: [reviewSchema]
});
const newBookSchema = new mongoose_1.Schema({
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
const Book = (0, mongoose_1.model)("BooksCollections", newBookSchema);
exports.default = Book;
