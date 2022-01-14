import React, { useEffect, useState } from "react";
import Header from "../main/header";
import Footer from "../main/Footer";
import "./prstyle.css";
import firebase from "../../firebase/index";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Loading from "../loading/loading";
import Default from "../../assets/default.jpg";

export default function Blog() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  /* read Stories from db */
  useEffect(() => {
    var storiesRef = firebase.db.collection("stories");
    storiesRef
      .get()
      .then((snapshot) => {
        const tempStories = [];
        snapshot.forEach((doc) => {
          const data = { ...doc.data(), uid: doc.id };
          tempStories.push(data);
        });
        setStories(tempStories);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const loadStories = () => {};

  const manymore = "...";

  return (
    <React.Fragment>
      <Header />
      <div className="blogCover"></div>
      <main>
        <div className="blog__page">
          <div className="blogInfo">
            <h2>Welcome to stories of Hope</h2>
          </div>
          <p>
            The project is aimed at providing students with the opportunity to
            play their part in being local change agents. The concept is an
            interdisciplinary storytelling activity in which students from
            various faculties work together to tell local stories of hope,
            resilience and how they deal with adversities. Our young people need
            to be given an opportunity to showcase their lived experiences and
            in so doing present others with hope and opportunities of change. It
            also forms part of a bigger nation building project.
          </p>
          <h1 className="blog__page__header">Latest Stories</h1>
          <div className="blog_view">
            <div className="hoverlist">
              <ul>
                <li className="upArrow">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="upArrow">
                  <Link to={"/prBlog"}>Public Relations</Link>
                </li>
                <li className="upArrow">
                  <Link to={"/social"}>Social Work</Link>
                </li>
                <li className="upArrow">
                  <Link to={"/lawBlog"}>Law</Link>
                </li>
              </ul>
            </div>

            <div className="blo">
              {loading ? (
                stories?.map((post) => (
                  <Link
                    to={{
                      pathname: "/post",
                      state: post,
                    }}
                    className="blog"
                    onClick={loadStories()}
                  >
                    {post.image ? (
                      <img className="singlePostImg" src={post.image} alt="" />
                    ) : (
                      <img className="singlePostImg" src={Default} alt="" />
                    )}
                    <div>
                      <h3 className="sourceName">
                        <span>{post.auth}</span>
                        <p>{post.date}</p>
                      </h3>
                      <h1>{post.name}</h1>
                      <div className="wrapme">
                        {post.story.slice(0, 200).concat(manymore)}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <Loading />
              )}{" "}
            </div>
          </div>
        </div>
        <div className="additional">
          <div className="blogInfo">
            <h2>Additional Links</h2>
          </div>
          <ul>
            <li className="upArrow">
              <Link to={"/upload"}>Upload story</Link>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/school-of-communication/Pages/department%20of%20strategic%20communication/Marketing-Communication.aspx">
                School of Communication
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/school-of-communication/Pages/research-articles.aspx">
                Research articles
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/school-of-communication/Pages/News-and-Events.aspx">
                News and Events
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/school-of-communication/Pages/cmAbout-us.aspx">
                {" "}
                Department of Communication and Media
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/school-of-communication/Pages/Communicare-%E2%80%93-Journal-for-Communication-Sciences-in-Southern-Africa.aspx">
                Communicare – Journal for Communication Sciences in Southern
                Africa
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
