import SideBar from "@/components/main-menu/side-bar/SideBar";
import AddPostButton from "@/components/main-menu/main-screen/AddPostButton";
import PlanCard from "@/components/main-menu/main-screen/plan-card";
import NoPosts from "@/components/misc/no-post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsInfo } from "@/redux/thunks/fetchPostsThunk";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts.length);

  useEffect(() => {
    dispatch(fetchPostsInfo());
  }, []);
  return (
    <div className="container">
      <div className="app-container">
        {/* <LoadingScreen /> */}
        <div className="app-sidebar">
          <SideBar />
        </div>
        <div className="app-content">
          <div className="main-screen">
            <div className="main-screen__absolute--header">
              <div className="settings-page__header--text ">
                <h1>My plans</h1>
              </div>
            </div>

            <div className="main-screen__cards">
              {posts.length !== 0 ? (
                posts.map((data, index) => <PlanCard key={index} data={data} />)
              ) : (
                <NoPosts />
              )}
            </div>
          </div>
        </div>

        <AddPostButton link="/app/create" />
      </div>
    </div>
  );
}
