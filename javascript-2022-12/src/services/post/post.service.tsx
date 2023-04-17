const posts = [
    {id: 1, name: 'First', description: 'First description.'},
    {id: 2, name: 'Hello Guys', description: 'Hello Guys, let us go swimming :)'},
    {id: 3, name: 'The future', description: 'The good future. The GPTChat will hire us!'},
    {id: 4, name: 'We are professionals', description: 'We are STRONG professionals!'},
]


export class PostService {

    getPosts() {
        return posts;
    }

    getPostById(postId: number) {
        return posts.find((post) => post.id === postId)
    }
}