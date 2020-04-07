import React from "react";
import { VideoCreators } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { modelView } from "../../../store/actions";
function Creators() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      modelView({
        videoLink: "",
        show: "",
        display: ""
      })
    );
  };

  const handleShow = (video, name) => {
    dispatch(
      modelView({
        videoLink: video,
        title: name
      })
    );
  };

  let showClass = useSelector(state => state.common.show);
  let video = useSelector(state => state.common.videolink);
  let display = useSelector(state => state.common.display);
  let title = useSelector(state => state.common.title);

  return (
    <section className="content-creator-section">
      <div className="container">
        <h2>
          So many multi-passion entrepreneurs just like you are using Vonza to grow{" "}
          <br />
          their businesses and live their dreams!
        </h2>
        <div className="row">
          <VideoCreators
            img="content-creator-1.png"
            heading="Course Creation/Memberships"
            name="Amanda Ray"
            videoLink="https://www.youtube.com/embed/fMvm6jXWokw"
            handleShow={handleShow}
          />
          <VideoCreators
            img="content-creator-2.png"
            heading=" Small Business Owner"
            name="Dr. Faith Abraham"
            videoLink="https://www.youtube.com/embed/n0mWEgy3yWE"
            handleShow={handleShow}
          />
          <VideoCreators
            img="content-creator-3.png"
            heading="Blogging/Affiliate"
            name="Hawk Younkins"
            videoLink="https://www.youtube.com/embed/Qzi_RYj9fJ0"
            handleShow={handleShow}
          />
          <VideoCreators
            img="content-creator-4.png"
            heading="Ecommerce"
            name="Luvenia Smith"
            videoLink="https://www.youtube.com/embed/Rfs8df6KbzI"
            handleShow={handleShow}
          />
        </div>
      </div>

      <div
        className={`modal video-modal ${showClass}`}
        id="video-modal"
        style={{ display: `${display}` }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-video-holder">
              <iframe
                width="600"
                height="340"
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creators;
