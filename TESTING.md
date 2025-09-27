# Contents

- [CSS](#css)
- [ESlint](#eslint)
- [Lighthouse](#lighthouse)
- [User Stories](#user-stories)
- [Manual Testing](#manual-testing)
- [Bugs](#bugs)

## CSS

All files has been checked and gave no errors.

![CSS](docs/readme-images/CSS_validation.png)

## ESlint

[ESlint](https://eslint.org/) - Has been used during developement and had no errors.

![ESlint](docs/readme-images/ESlint.png)

## Lighthouse

![Lighthouse](docs/readme-images/lighthouse.png)

Lighthouse audits were conducted across all pages. Overall, the application performs well, with no major issues observed in dropdown menus or interactive elements. The Listings page is the only exception, where large user-uploaded images may impact performance.

## User Stories

| User story                                                                                                                                                  |     | PASS |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---- |
| As a user, I can see a navbar on all pages so that I can easily access different sections of the app.                                                       |     | ✔️   |
| As a user, I can navigate through pages quickly so that I can view content seamlessly without page refresh.                                                 |     | ✔️   |
| As a user, I can create a new account so that I can access all the features for signed-up users.                                                            |     | ✔️   |
| As a user, I can sign in to the app so that I can access functionality for logged-in users.                                                                 |     | ✔️   |
| As a user, I can tell if I am logged in or not so that I can log in if I need to.                                                                           |     | ✔️   |
| As a user, I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.                                      |     | ✔️   |
| As a logged-out user, I can see sign-in and sign-up options so that I can sign in/sign up.                                                                  |     | ✔️   |
| As a user, I can view users' avatars so that I can easily identify users of the application.                                                                |     | ✔️   |
| As a logged-in user, I can create posts so that I can share my images with the world.                                                                       |     | ✔️   |
| As a user, I can view the details of a single post so that I can learn more about it.                                                                       |     | ✔️   |
| As a logged-in user, I can like a post so that I can show my support for the posts that interest me.                                                        |     | ✔️   |
| As a user, I can view all the most recent posts, and I can see them ordered by most recently created first so that I am up to date with the newest content. |     | ✔️   |
| As a user, I can search for posts with keywords so that I can find the posts and user profiles I am most interested in.                                     |     | ✔️   |
| As a logged-in user, I can view the posts I liked so that I can find the posts I enjoy the most.                                                            |     | ✔️   |
| As a logged-in user, I can view content filtered by users I follow so that I can keep up to date with what they are posting about.                          |     | ✔️   |
| As a user, I can scroll down to view more posts, and I can see new posts automatically load without clicking next page.                                     |     | ✔️   |
| As a user, I can view the posts page so that I can read the comments about the post.                                                                        |     | ✔️   |
| As a logged-in user, I can add comments to a post so that I can share my thoughts about the post.                                                           |     | ✔️   |
| As a user, I can see how long ago a comment was made, and I can understand how recent or old a comment is at a glance.                                      |     | ✔️   |
| As a user, I can read comments on posts so that I can read what other users think about the posts.                                                          |     | ✔️   |
| As an owner of a comment, I can delete my comment so that I can control removal of my comment from the application.                                         |     | ✔️   |
| As an owner of a comment, I can edit my comment so that I can fix or update my existing comment.                                                            |     | ✔️   |
| As a user, I can view other users' profiles so that I can see their posts and learn more about them.                                                        |     | ✔️   |
| As a user, I can see a list of the most followed profiles so that I can see which profiles are popular.                                                     |     | ✔️   |
| As a user, I can view statistics about a specific user so that I can learn more about them.                                                                 |     | ✔️   |
| As a logged in user, I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed.                           |     | ✔️   |
| As a user, I can view all the posts by a specific user so that I can catch up on their latest posts.                                                        |     | ✔️   |
| As a logged in user, I can edit my profile so that I can change my profile picture and bio.                                                                 |     | ✔️   |
| As a logged in user, I can update my username and password so that I can keep my profile secure.                                                            |     | ✔️   |

## Manual Testing

|  #  | Feature                                                     |                        Expected Outcome                         |                 Testing Performed                  | Pass/Fail |
| :-: | :---------------------------------------------------------- | :-------------------------------------------------------------: | :------------------------------------------------: | :-------: |
|     | Navbar (All users)                                          |                                                                 |                                                    |           |
|  1  | Navbar - Review Page                                        |                     Redirect to review page                     |                    click button                    |    ✅     |
|  2  | Navbar - Contact                                            |                    Redirect to contact page                     |                    click button                    |    ✅     |
|     | Navbar (Logged out user)                                    |                                                                 |                                                    |           |
|  3  | Navbar - Review Page                                        |                     Redirect to review page                     |                    click button                    |    ✅     |
|  4  | Navbar - Contact                                            |                    Redirect to contact page                     |                    click button                    |    ✅     |
|  5  | Navbar - Sign in                                            |                    Redirect to sign in page                     |                    click button                    |    ✅     |
|  6  | Navbar - Sign up                                            |                    Redirect to sign up page                     |                    click button                    |    ✅     |
|     | Navbar (Logged in user)                                     |                                                                 |                                                    |           |
|  7  | Navbar - Posts Page                                         |                     Redirect to posts page                      |                    click button                    |    ✅     |
|  8  | Navbar - Feed Page                                          |                      Redirect to feed page                      |                    click button                    |    ✅     |
|  9  | Navbar - Liked Page                                         |                     Redirect to liked page                      |                    click button                    |    ✅     |
| 10  | Navbar - Events Page                                        |                     Redirect to events page                     |                    click button                    |    ✅     |
| 11  | Navbar - My Profile Page                                    |                   Redirect to my profile page                   |                    click button                    |    ✅     |
| 12  | Navbar - Review Page                                        |                     Redirect to review page                     |                    click button                    |    ✅     |
| 13  | Navbar - Contact                                            |                    Redirect to contact page                     |                    click button                    |    ✅     |
| 14  | Navbar - Sign out                                           |               Sign out and redirect to home page                |                    click button                    |    ✅     |
|     | Sign up Page                                                |                                                                 |                                                    |           |
| 15  | All fields filled correctly                                 |           Create account and redirect to sign in page           |                click Sign up button                |    ✅     |
| 16  | Leave blank username field                                  |           Display error: This field may not be blank.           |                click Sign up button                |    ✅     |
| 17  | Leave blank password field                                  |           Display error: This field may not be blank.           |                click Sign up button                |    ✅     |
| 18  | Leave empty confirm password field                          |           Display error: This field may not be blank.           |                click Sign up button                |    ✅     |
| 19  | Set different confirm password                              |      Display error: The two password fields didn't match.       |                click Sign up button                |    ✅     |
| 20  | Give username that already exists                           |    Display error: A user with that username already exists.     |                click Sign up button                |    ✅     |
|     | Sign in Page                                                |                                                                 |                                                    |           |
| 21  | All fields filled                                           |              Sign in and redirect to previous page              |                click Sign in button                |    ✅     |
| 22  | Leave blank username field                                  |   Display error: Must include ""username"" and ""password"".    |                click Sign in button                |    ✅     |
| 23  | Leave blank password field                                  |           Display error: This field may not be blank.           |                click Sign in button                |    ✅     |
| 24  | Try username with first letter capital/ all letters capital |   Display error: Unable to log in with provided credentials.    |                click Sign in button                |    ✅     |
|     | Contact Form                                                |                                                                 |                                                    |           |
| 25  | Contact form success                                        | Display success message, redirect to a new(empty) Contact page  |            complete all fields and send            |    ✅     |
| 26  | Email Address field empty                                   |                      Display error message                      |          Please fill all required fields           |    ✅     |
| 27  | Reason for contacting us field empty                        |                      Display error message                      |          Please fill all required fields           |    ✅     |
| 28  | Details field empty                                         |                      Display error message                      |          Please fill all required fields           |    ✅     |
|     | Explore Page                                                |                                                                 |                                                    |           |
| 29  | Dropdown menu                                               |         If user is logged in, display the dropdown menu         |        Log in and navigate to explore page         |    ✅     |
| 30  | Dropdown menu                                               | If user is not logged in, dropdown menu should not be displayed | Log out and verify user is redirected to Home page |    ✅     |
| 31  | Display dropdown menu                                       |            Display Posts, Feed, Liked, Events links             |                click explore button                |    ✅     |
| 32  | Posts link                                                  |                     Redirect to Posts page                      |         Log in and navigate to posts page          |    ✅     |
| 33  | Feed link                                                   |                      Redirect to Feed page                      |          Log in and navigate to feed page          |    ✅     |
| 34  | Liked link                                                  |                     Redirect to Liked page                      |         Log in and navigate to liked page          |    ✅     |
| 35  | Events link                                                 |                     Redirect to Events page                     |         Log in and navigate to events page         |    ✅     |
|     | My Profile Page                                             |                                                                 |
| 36  | Dropdown menu                                               |         If user is logged in, display the dropdown menu         |     Log in and click on My Bonsai Hive button      |    ✅     |
| 37  | Display dropdown menu                                       |      Display My Profile, Reviews, Contact, Sign Out links       |            Click My Bonsai Hive button             |    ✅     |
| 38  | My Profile link                                             |                   Redirect to My Profile page                   |        Click My Profile link from dropdown         |    ✅     |
| 39  | Reviews link                                                |                    Redirect to Reviews page                     |          Click Reviews link from dropdown          |    ✅     |
| 40  | Contact link                                                |                    Redirect to Contact page                     |          Click Contact link from dropdown          |    ✅     |
| 41  | Sign Out link                                               |           Sign out the user and redirect to Home page           |         Click Sign Out link from dropdown          |    ✅     |
