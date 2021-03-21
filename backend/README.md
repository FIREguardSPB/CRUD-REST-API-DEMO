#SIMPLE DEMO CRUD REST API

endpoint: api/posts

Requests:
GET - get all posts and get one post by id (for request by id use endpoint with params api/posts/:id)
POST - create post
PUT - edit post
DELETE - delete post

Model:
author: {type: String, required: true}
title: {type: String, required: true}
content: {type: String, required: true}

