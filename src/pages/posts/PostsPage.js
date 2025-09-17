import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";  // NavLink import
import { useCurrentUser } from "../../contexts/CurrentUserContext"; // currentUser hook import

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import EventCardsSidebar from "../events/EventCardsSidebar";


function PostsPage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  
  // Fetch posts based on query and filter
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const filterQuery = filter ? `${filter}&search=${query}` : `search=${query}`;
        
        // console.log("Filter query being sent:", `/posts/?ordering=-created_at&${filterQuery}`);
  
        const { data } = await axiosReq.get(`/posts/?ordering=-created_at&${filterQuery}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
  
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
  
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);
  
  return (
    <>
    <Container className="mt-3">
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
     {/*  Shadowed box directly below the Navbar \*/}
     {currentUser && (
      
        <div className={styles.AddPostContainer}>
          <NavLink to="/posts/create" className={styles.AddPostButton}>
          <i className={`far fa-plus-square ${styles.AddPostIcon}`}></i> Add Post
          </NavLink>
          <span className={styles.AddPostMessage}>"What would you like to share today?"</span>
        </div>
      
    )}
  
    {/* Search bar */}
    <Form className={styles.SearchBar} onSubmit={(e) => e.preventDefault()}>
    <i className={`fas fa-search ${styles.SearchIcon}`} />
      <Form.Control
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
    
        placeholder="Search posts"
      />
    </Form>
   
      {pathname === "/feed" && <PopularProfiles mobile />}
      {pathname === "/" && (
        <div className="d-block d-lg-none mb-3">
          <EventCardsSidebar />
        </div>
      )}


        {/* Display posts or no results */}
        {hasLoaded ? (
  posts.results.length ? (
    <InfiniteScroll
      children={posts.results.map((post) => (
        <Post key={post.id} {...post} setPosts={setPosts} />
      ))}
      dataLength={posts.results.length}
      loader={<Asset spinner />}
      hasMore={!!posts.next}
      next={() => fetchMoreData(posts, setPosts)}
    />
  ) : (
    <Asset src={NoResults} message={message} />
  )
) : (
  <Asset spinner />
)}

      </Col>
       <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
       {pathname === "/feed" && <PopularProfiles />}
       {pathname === "/" && <EventCardsSidebar />}
     </Col>
   </Row>
 </Container>
    
    </>
  );
}

export default PostsPage;