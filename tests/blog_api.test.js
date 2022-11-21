import mongoose from 'mongoose'
import supertest from 'supertest'

import app from '../app'

const api = supertest( app )
import Blog from '../models/blog.js'

const initialBlogs = [
    {
        title: 'HTML is easy',
        author: 'ggomez',
        url: 'http://localhost:3001/api/blogs/first-post',
        likes: 14
    },
    {
        title: 'Browser can execute only Javascript',
        author: 'dfrias',
        url: 'http://localhost:3001/api/blogs/second-post',
        likes: 12
    },
]

// Initialize the database before every test 
beforeEach( async () => {
    await Blog.deleteMany({})

    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})

test('blogs are returned as json', async () => {
    await api
        .get( '/api/blogs' )
        .expect( 200 )
        .expect( 'Content-Type', /application\/json/ )
}, 100000)

test('there are two blogs', async () => {
    // execution gets here only after the HTTP request is complete
    // the result of HTTP request is saved in variable response
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength(2)
})
  
test('the first post is about HTTP methods', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body[0].title).toBe('HTML is easy')
})

test('all posts are returned', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength(initialBlogs.length)
  })
  
test('a specific post is within the returned posts', async () => {
    const response = await api.get('/api/blogs')

    // Create an array containing the content of every note returned by the API
    const titles = response.body.map(r => r.title)

    expect(titles).toContain(
        'Browser can execute only Javascript'
    )
})

test('a valid post can be added', async () => {
    const newPost = {
        title: 'async/await simplifies making async calls',
        author: 'ggomez',
        url: 'http://localhost:3001/api/blogs/a-valid-post',
        likes: 4
    }
  
    await api
        .post('/api/blogs')
        .send(newPost)
        .expect(200)
        .expect('Content-Type', /application\/json/)
  
    const response = await api.get('/api/blogs')
  
    const titles = response.body.map(r => r.title)
  
    expect(response.body).toHaveLength( initialBlogs.length + 1 )
    
    expect(titles).toContain('async/await simplifies making async calls')
})

test('post without title is not added', async () => {
    const newPost = {
        author: 'dfrias',
        url: 'http://localhost:3001/api/blogs/post-without-title',
        likes: 1
    }
  
    await api
        .post('/api/blogs')
        .send(newPost)
        .expect(400)
  
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength( initialBlogs.length )
})

afterAll(() => {
    mongoose.connection.close()
})