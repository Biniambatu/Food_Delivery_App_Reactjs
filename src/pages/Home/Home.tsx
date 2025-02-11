import { useEffect, useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";
import PostTest from "./PostTest";
const Home = () => {
  const [category, setCategory] = useState("All")
  
  const [posts, setPosts] = useState(new Array(2).fill(false))
  const [toggle, setToggle] = useState(false)
  const postsRef = collection(db, 'posts')


  useEffect(() => {
   async function getPosts(){
    const data = await getDocs(postsRef)
    setPosts(data.docs.map((document) => (
      {...document.data(), id: document.id}
    )))
  }
  getPosts()
  },[postsRef,toggle])

  return (
    <div>
        <Header/>
        {posts.map((post) => (
           <PostTest post={post}/>
        ))}
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home