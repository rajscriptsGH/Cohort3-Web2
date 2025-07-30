import axios from "axios";


export default async function ({ params }: { params: { blogId?: string } }) {
    const postId = (await params).blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`)

    const data = response.data


    return <div>
        Blog Post {postId}
        <br />
        id: {data.id} <br />
        title: {data.title} <br />
    </div>
}