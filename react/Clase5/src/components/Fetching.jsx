import React,{useState, useEffect} from 'react'

const postId =[1,2,3,4,5,6,7]
// Hago el fetch a jsonPlaceholder
const fetchPost = async (id) => {
  const apiCall  = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const respuesta = await apiCall.json()
  return console.log(respuesta);
}

export default function Fetching() {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [post, setPost] = useState(null)

  
  return (
    <div>Fetching</div>
  )
}
