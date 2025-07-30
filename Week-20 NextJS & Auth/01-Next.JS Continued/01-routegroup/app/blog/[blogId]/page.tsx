

export default function ({ params }: { params: { blogId?: string } }) {
    const postId = params.blogId;
    return <div>
        Blog Post {postId}
    </div>
}