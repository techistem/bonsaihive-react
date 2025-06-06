import styles from "./App.module.css";
import NavBar from "./components/NavBar";
// import Container from 'react-bootstrap/Container';
import {Route,Switch} from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from "./pages/posts/PostCreateForm";
// import bgImage from "./assets/bgimage.jpg";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ContactCreateForm from "./pages/contact/ContactCreateForm";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import Homepage from './pages/auth/Homepage';
import EventsList from "./pages/events/EventsList";
import EventDetail from "./pages/events/EventDetail";
import EventCreateForm from "./pages/events/EventCreateForm";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div 
  className={`${styles.bg} ${styles.App}`} 
  style={{
    backgroundColor: "#385212",
    minHeight: "100vh",
    position: "relative",
  }}
  
>

      <div>
        <NavBar />
        <div className={styles.Main}>

          <Switch>
            <Route exact path="/" render={() => currentUser ? (
              <PostsPage message="No results found. Adjust the search keyword."/>
            ) : (
              <Homepage />
            )
              } 
            />

            <Route exact path="/posts" render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )} />

            <Route exact path="/feed" render={() => (
              <PostsPage 
              message="No results found. Adjust the search keyword or follow a user."
              filter={`owner__followed__owner__profile=${profile_id}&`}
              />
              )} 
            />
            
            <Route exact path="/liked" render={() => (
              <PostsPage 
              message="No results found. Adjust the search keyword or like a post."
              filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} 
              />
              )}
            />
 
            {/* Auth Routes */}
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm /> } />

            {/* Posts Routes */}
            <Route exact path="/posts/create" render={() => <PostCreateForm />} />
            <Route exact path="/posts/:id" render={()=> <PostPage />} />
            <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />

            {/* Profiles Routes */}
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route exact path="/profiles/:id/edit/username"
            render={() => <UsernameForm />} />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
            <Route
            exact
            path="/contact/create/"
            render={() => <ContactCreateForm />}
          />
            <Route exact path="/reviews" component={ReviewsPage} />
            <Route exact path="/events/create" component={EventCreateForm} />
            <Route exact path="/events" component={EventsList} />
            <Route exact path="/events/:id" component={EventDetail} />
            <Route render={()=><p>Page not found!</p>} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;