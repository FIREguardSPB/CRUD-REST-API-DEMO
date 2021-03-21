import {createdPost, deletedPost, editedPost, getOnePost, getPosts, getUserPosts} from "../service/PostService.js"


export async function createPost(req, res) {
    try {
        console.log(req.files)
        console.log(req.body)
        const post = await createdPost(req.body)
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json({e})
    }

}

export async function getAllPosts(req, res) {
    try {
        const posts = await getPosts()
        return res.json(posts)
    } catch (e) {
        res.status(500).json({e})
    }

}
export async function getUniqueUserPosts(req, res){
    try{

const userPosts = await getUserPosts(req.params.username)
        return res.json(userPosts)

    }catch (e) {
        res.status(500).json(e.message)
    }
}

export async function getUniquePost(req, res) {
    try {
        const postUnique = await getOnePost(req.params.id)
        return res.json(postUnique)
    } catch (e) {
        res.status(500).json(e.message)
    }

}

export async function editPost(req, res) {
    try {
        const post = await editedPost(req.body)
        return res.json(post)

    } catch (e) {
        res.status(500).json(e.message)
    }

}

export async function deletePost(req, res) {
    try {
        await deletedPost(req.params.id)
        return res.status(200).json({message: "DELETED"})
    } catch (e) {
        res.status(500).json({e})
    }

}