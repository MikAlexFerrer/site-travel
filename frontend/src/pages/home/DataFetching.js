import React, { useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const getPost = () => {
        axios.get("http://api.quotable.io/random")
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
            })
    }
    return (
        <div>
            <button onClick={getPost}></button>
            {posts}
        </div>
    )
}

export default DataFetching