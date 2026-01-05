import blogs from "../data/blogs.json";
export function getAllBlogs(){
    return blogs;
}
export function getBlogsByTitle(slug:string){
    return blogs.filter(blog=>blog.slug===slug);
}

export function getBlogsByType(type:string){
    return blogs.filter(blog=>blog.type===type);
}