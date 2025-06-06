import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
/* import { useHistory } from "react-router-dom/cjs/react-router-dom.min";*/

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
          <span className={styles.PostDate}>
  {new Date(updated_at).toISOString().slice(0, 10)}
</span>


            {is_owner && postPage && (
              < MoreDropdown 
              handleEdit={handleEdit}
              handleDelete={handleDelete} />
              )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <div className={styles.LikeWrapper}>
        <i className="far fa-heart" />
        <span className={styles.LikeCount}>{likes_count}</span>
      </div>
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike} className={styles.LikeWrapper}>
              <i className={`fas fa-heart ${styles.Heart}`} />
              <span className={styles.LikeCount}>{likes_count}</span>
            </span>
          ) : currentUser ? (
            <span onClick={handleLike} className={styles.LikeWrapper}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
              <span className={styles.LikeCount}>{likes_count}</span>
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <div className={styles.LikeWrapper}>
              <i className="far fa-heart" />
              <span className={styles.LikeCount}>{likes_count}</span>
              </div>
            </OverlayTrigger>
          )}
          
          <Link to={`/posts/${id}`} className={styles.CommentWrapper}>
  <i
    className={`${comments_count > 0 ? 'fas' : 'far'} fa-comments ${styles.CommentIcon}`}
  />
  <span className={styles.CommentCount}>{comments_count}</span>
</Link>

        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;