import { Navigate } from "react-router-dom"


const Post = () => {
    const status = 404

    if(status === 404) {
        return <Navigate to="/notfound" />
    }

    return (
        <div>
            <h1>Post</h1>
        </div>
    )
}

export default Post