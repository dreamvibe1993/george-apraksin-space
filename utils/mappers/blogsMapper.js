export const blogsMapper = (blogs) =>
  blogs.data.map((blog) => ({
    badges: blog.attributes.badges,
    createdAt: blog.attributes.createdAt,
    images: blog.attributes.images,
    post: blog.attributes.post,
    title: blog.attributes.title,
    id: blog.id,
  }));

export const blogMapper = (blog) => blogsMapper({ data: [blog.data] })[0];
