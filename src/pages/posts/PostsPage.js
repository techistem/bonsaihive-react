import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import EventCardsSidebar from "../events/EventCardsSidebar";


function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  
  // Fetch posts based on query and filter
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const filterQuery = filter ? `${filter}&search=${query}` : `search=${query}`;
        
        console.log("Filter query being sent:", `/posts/?ordering=-created_at&${filterQuery}`);
  
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
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Show on /feed only */}
        {pathname === "/feed" && <PopularProfiles mobile />}

        {/* Show EventCardsSidebar at top on mobile / */}
        {pathname === "/" && (
          <div className="d-block d-lg-none mb-3">
            <EventCardsSidebar />
          </div>
        )}
        {/* Search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form 
        className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}
        >
        <Form.Control
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          className="mr-sm-2"
          placeholder="Search posts"
        />
        </Form>

        {/* Display posts or no results */}
        {hasLoaded ? (
          <>
            {posts.results.length ? (
                <InfiniteScroll
                children={posts.results.map((post) => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner/>}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
            />    
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
       {/* Show PopularProfiles ONLY on /feed route */}
       {pathname === "/feed" && (
          <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
            <PopularProfiles />
          </Col>
        )}
        
        {/* Sidebar for /posts with Events */}
        {pathname === "/" && (
          <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
            <EventCardsSidebar />
          </Col>
      )}
    </Row>
  );
}

export default PostsPage;