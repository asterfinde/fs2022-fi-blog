//~

const dummy = blogs => {
    if ( blogs.length >= 0 )
        return 1
}
  
const totalLikes = blogs => {
    return blogs.length === 0 
        ? 0
        : (
            blogs.length === 1
                ? blogs[0].likes
                : blogs
                    .reduce((accumulator, curValue) => accumulator + curValue.likes, 0)  
        )
}

const favoriteBlog  = blogs => {
    if ( blogs.length >= 0 )
        return blogs.reduce(
                (prev, current) => prev.likes > current.likes 
                                                ? prev 
                                                : current
        )
}

const mostBlogs = blogs => {
    const authors = blogs.map(o => o.author)

    const count = {}

    authors.forEach(element => {
        count[element] = (count[element] || 0) + 1
    })

    let maxKey = ''
    let maxVal = 0 

    Object.keys(count).forEach( key => {
        if (count[key] > maxVal) {
            maxKey = key
            maxVal = count[key]
        }  
    })

    return { author: maxKey , blogs: maxVal } 
}

const mostLikes = blogs => {
    if ( blogs.length >= 0 ) {
        const authorWithMostLikes =  blogs.reduce(
                (prev, current) => prev.likes > current.likes 
                                                ? prev 
                                                : current
        )
        
        return { author: authorWithMostLikes.author, likes: authorWithMostLikes.likes }
    }        
}

export default {
    dummy, 
    totalLikes,
    favoriteBlog ,
    mostBlogs,
    mostLikes
}