import Post from "../model/Post.js";

export async function createdPost(post) {
    return await Post.create(post)
}

export async function getPosts() {
    // await Post.find()
    return await Post.find()
}

export async function getOnePost(id) {
    if (!id) {
        throw new Error('Invalid ID')
    }
    return await Post.findById(id)
}

export async function editedPost(post) {
    if (!post._id) {
        throw new Error('Invalid ID')
    }
    return await Post.findByIdAndUpdate(post._id, post, {new: true})
}

export async function deletedPost(id) {
    if (!id) {
        throw new Error('Invalid ID')
    }
    await Post.findByIdAndDelete(id)
}

export async function getUserPosts(username) {
    if (!username) {
        throw new Error('Invalid ID')
    }
    return await Post.find({author: username});
}