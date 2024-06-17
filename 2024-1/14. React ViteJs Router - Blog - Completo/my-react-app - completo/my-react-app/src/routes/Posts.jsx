import PostDetail from '../components/PostDetail/PostDetail'
import { useParams } from 'react-router-dom'

const Posts = () => {
    const params = useParams();

    console.log(params.postId)

    return <PostDetail postId={params.postId} />
}

export default Posts