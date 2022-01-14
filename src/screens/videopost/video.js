import React from "react";
import ReactPlayer from "react-player";
import "./video.css";
import Header from "../main/header";
import Footer from "../main/Footer";

export default function Video() {
  return (
    <div>
      <Header />

      <div className="videoCover"></div>
      <main>
        <div className="vid_home__hero-section">
          <div className="vid_container">
            <div
              className="vid_hrow vid_home__hero-row"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <div className="vid_hcol">
                <div className="vid_home__hero-text-wrapper">
                  <div className="vid_top-line">Humanities</div>
                  <h1 className="vid_heading vid_dark">Amogelang Tlhowe</h1>
                  <p className="vid_home__hero-subtitle vid_dark">
                    A new collaboration between various University of
                    Johannesburg departments, in partnership with Brand South
                    Africa and PRISA, aims to provide students with an
                    opportunity to tell their stories of hope, resilience and
                    ‘how they play their part in society’.
                  </p>
                </div>
              </div>
              <div>
                <div className="vid_home__hero-img-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=zf-k-9ZcNsw&origin=http://localhost:3000"
                    width="500px"
                    height="300px"
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          //https://youtu.be/M5R_cqdDe2Q
        }

        {
          //https://youtu.be/q3f6wkGTv1w
        }

        {
          //https://youtu.be/n6BGEM_FIMU
        }

        {
          //AIS
          //https://youtu.be/vqHB05MYg9I
        }

        {
          //Marketing
          //https://youtu.be/D7pumopTzWQ
        }

        <div className="vid_home__hero-section">
          <div className="vid_container">
            <div
              className="vid_hrow vid_home__hero-row"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <div className="vid_hcol">
                <div className="vid_home__hero-text-wrapper">
                  <div className="vid_top-line">Humanities</div>
                  <h1 className="vid_heading vid_dark">Hafsa Abdi</h1>
                  <p className="vid_home__hero-subtitle vid_dark">
                    A new collaboration between various University of
                    Johannesburg departments, in partnership with Brand South
                    Africa and PRISA, aims to provide students with an
                    opportunity to tell their stories of hope, resilience and
                    ‘how they play their part in society’.
                  </p>
                </div>
              </div>
              <div>
                <div className="vid_home__hero-img-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=wvXHqVLbJ6g&t=25s&origin=http://localhost:3000"
                    width="500px"
                    height="300px"
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vid_home__hero-section">
          <div className="vid_container">
            <div
              className="vid_hrow vid_home__hero-row"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <div className="vid_hcol">
                <div className="vid_home__hero-text-wrapper">
                  <div className="vid_top-line">Humanities</div>
                  <h1 className="vid_heading vid_dark">Paballo Matsaneng</h1>
                  <p className="vid_home__hero-subtitle vid_dark">
                    A new collaboration between various University of
                    Johannesburg departments, in partnership with Brand South
                    Africa and PRISA, aims to provide students with an
                    opportunity to tell their stories of hope, resilience and
                    ‘how they play their part in society’.
                  </p>
                </div>
              </div>
              <div>
                <div className="vid_home__hero-img-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=yWi2glqFyXM&t=4s&origin=http://localhost:3000"
                    width="500px"
                    height="300px"
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
