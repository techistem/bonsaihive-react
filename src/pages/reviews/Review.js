import React, { useEffect } from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Review = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    rating,
    title,

  } = props;

useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: posts }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${post}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [posts] });
        console.log(posts)
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>
            Rating:
            <Rating readonly initialValue={rating} size={25}/* Available Props */ />
          </p>
          <p>
            Review:
            {content}
          </p>
        </Media.Body>
      </Media>
    </>
  );
};

export default Review;