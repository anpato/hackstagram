import {getFollowerCount,getUserPost,getUser} from '../../services/apiService'

export const getNotSignedInUser = async (userId) => {
  const userData = await getUser(userId)
  const count = await getFollowerCount(user.id)
  const posts = await getUserPost(userId)
  const data {
    userData,
    count,
    posts
  }
  return data
}