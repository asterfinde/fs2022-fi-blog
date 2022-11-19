//~

import  listHelper   from '../utils/list_helper'

describe('listHelper', () => {
    test('finds out which blog has most likes', () => {
        const blogs = [
            {title: 'Post 1', author: 'DF', url: 'http://localhost:3001/api/blogs/first-post', likes: 4},
            {title: 'Post 2', author: 'GG', url: 'http://localhost:3001/api/blogs/second-post', likes: 16},
            {title: 'Post 3', author: 'LM', url: 'http://localhost:3001/api/blogs/third-post', likes: 6},
        ]
    
        const result = listHelper.favoriteBlog (blogs)
        expect(result).toEqual({ title: 'Post 2',
                                 author: 'GG',
                                 url: 'http://localhost:3001/api/blogs/second-post',
                                 likes: 16 })
    })

    test('returns the author who, has the largest amount of blogs', () => {
        const blogs = [
            {title: 'Post 1', author: 'DF', url: 'http://localhost:3001/api/blogs/first-post', likes: 4},
            {title: 'Post 2', author: 'GG', url: 'http://localhost:3001/api/blogs/second-post', likes: 16},
            {title: 'Post 3', author: 'DF', url: 'http://localhost:3001/api/blogs/third-post', likes: 6},
            {title: 'Post 4', author: 'GG', url: 'http://localhost:3001/api/blogs/fourth-post', likes: 10},
            {title: 'Post 5', author: 'GG', url: 'http://localhost:3001/api/blogs/fifth-post', likes: 4},
            {title: 'Post 6', author: 'LM', url: 'http://localhost:3001/api/blogs/six-post', likes: 2},
         ]
    
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({ 
                                 author: 'GG',
                                 blogs: 3 
                                })
    })

    test('returns the author, whose blog posts have the largest amount of likes', () => {
        const blogs = [
            {title: 'Post 1', author: 'DF', url: 'http://localhost:3001/api/blogs/first-post', likes: 4},
            {title: 'Post 2', author: 'GG', url: 'http://localhost:3001/api/blogs/second-post', likes: 16},
            {title: 'Post 3', author: 'DF', url: 'http://localhost:3001/api/blogs/third-post', likes: 6},
            {title: 'Post 4', author: 'GG', url: 'http://localhost:3001/api/blogs/fourth-post', likes: 10},
            {title: 'Post 5', author: 'GG', url: 'http://localhost:3001/api/blogs/fifth-post', likes: 4},
            {title: 'Post 6', author: 'LM', url: 'http://localhost:3001/api/blogs/six-post', likes: 20},
         ]
    
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({
                                author: 'LM', 
                                likes: 20
                            })
    })
})

describe('listHelper', () => {
    test('dummy returns one', () => {
        const blogs = []
    
        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })

    test('total of empty list is zero', () => {
        const blogs = []
    
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(0)
    })

    test('when list has only one blog equals the likes', () => {
        const blogs = [
            {title: 'Post 1', author: 'DF', url: 'http://localhost:3001/api/blogs/first-post', likes: 4}
        ]
    
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(4)
    })
    
    test('of a bigger list is calculated right', () => {
        const blogs = [
             {title: 'Post 1', author: 'DF', url: 'http://localhost:3001/api/blogs/first-post', likes: 4},
             {title: 'Post 2', author: 'GG', url: 'http://localhost:3001/api/blogs/second-post', likes: 6},
             {title: 'Post 3', author: 'LM', url: 'http://localhost:3001/api/blogs/third-post', likes: 4},
          ]
    
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(14)
    })
})
