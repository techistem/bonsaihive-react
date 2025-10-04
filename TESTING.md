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

|  #  | Feature                                                     |                                                           Expected Outcome                                                           |                    Testing Performed                     | Pass/Fail |
| :-: | :---------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------: | :-------: |
|     | Navbar (All users)                                          |                                                                                                                                      |                                                          |           |
|  1  | Navbar - Review Page                                        |                                                       Redirect to review page                                                        |                       click button                       |    ✅     |
|  2  | Navbar - Contact                                            |                                                       Redirect to contact page                                                       |                       click button                       |    ✅     |
|     | Navbar (Logged out user)                                    |                                                                                                                                      |                                                          |           |
|  3  | Navbar - Review Page                                        |                                                       Redirect to review page                                                        |                       click button                       |    ✅     |
|  4  | Navbar - Contact                                            |                                                       Redirect to contact page                                                       |                       click button                       |    ✅     |
|  5  | Navbar - Sign in                                            |                                                       Redirect to sign in page                                                       |                       click button                       |    ✅     |
|  6  | Navbar - Sign up                                            |                                                       Redirect to sign up page                                                       |                       click button                       |    ✅     |
|     | Navbar (Logged in user)                                     |                                                                                                                                      |                                                          |           |
|  7  | Navbar - Posts Page                                         |                                                        Redirect to posts page                                                        |                       click button                       |    ✅     |
|  8  | Navbar - Feed Page                                          |                                                        Redirect to feed page                                                         |                       click button                       |    ✅     |
|  9  | Navbar - Liked Page                                         |                                                        Redirect to liked page                                                        |                       click button                       |    ✅     |
| 10  | Navbar - Events Page                                        |                                                       Redirect to events page                                                        |                       click button                       |    ✅     |
| 11  | Navbar - My Profile Page                                    |                                                     Redirect to my profile page                                                      |                       click button                       |    ✅     |
| 12  | Navbar - Review Page                                        |                                                       Redirect to review page                                                        |                       click button                       |    ✅     |
| 13  | Navbar - Contact                                            |                                                       Redirect to contact page                                                       |                       click button                       |    ✅     |
| 14  | Navbar - Sign out                                           |                                                  Sign out and redirect to home page                                                  |                       click button                       |    ✅     |
|     | Sign up Page                                                |                                                                                                                                      |                                                          |           |
| 15  | All fields filled correctly                                 |                                             Create account and redirect to sign in page                                              |                   click Sign up button                   |    ✅     |
| 16  | Leave blank username field                                  |                                             Display error: This field may not be blank.                                              |                   click Sign up button                   |    ✅     |
| 17  | Leave blank password field                                  |                                             Display error: This field may not be blank.                                              |                   click Sign up button                   |    ✅     |
| 18  | Leave empty confirm password field                          |                                             Display error: This field may not be blank.                                              |                   click Sign up button                   |    ✅     |
| 19  | Set different confirm password                              |                                         Display error: The two password fields didn't match.                                         |                   click Sign up button                   |    ✅     |
| 20  | Give username that already exists                           |                                       Display error: A user with that username already exists.                                       |                   click Sign up button                   |    ✅     |
|     | Sign in Page                                                |                                                                                                                                      |                                                          |           |
| 21  | All fields filled                                           |                                                Sign in and redirect to previous page                                                 |                   click Sign in button                   |    ✅     |
| 22  | Leave blank username field                                  |                                      Display error: Must include ""username"" and ""password"".                                      |                   click Sign in button                   |    ✅     |
| 23  | Leave blank password field                                  |                                             Display error: This field may not be blank.                                              |                   click Sign in button                   |    ✅     |
| 24  | Try username with first letter capital/ all letters capital |                                      Display error: Unable to log in with provided credentials.                                      |                   click Sign in button                   |    ✅     |
|     | Contact Page (All user)                                     |                                                                                                                                      |                                                          |           |
| 25  | Contact form success                                        |                                    Display success message, redirect to a new(empty) Contact page                                    |               complete all fields and send               |    ✅     |
| 26  | Email Address field empty                                   |                                                        Display error message                                                         |             Please fill all required fields              |    ✅     |
| 27  | Reason for contacting us field empty                        |                                                        Display error message                                                         |             Please fill all required fields              |    ✅     |
| 28  | Details field empty                                         |                                                        Display error message                                                         |             Please fill all required fields              |    ✅     |
|     | Reviews Page (All users)                                    |                                                                                                                                      |                                                          |           |
| 29  | Review page load                                            |                                              Page loads correctly with list of reviews                                               |                 Navigate to review page                  |    ✅     |
|     | Reviews Page (Logged in user )                              |                                                                                                                                      |                                                          |           |
| 30  | Create new review (all fields valid)                        |                                         Review successfully created and visible in the list                                          |              Fill all fields, click submit               |    ✅     |
| 31  | Leave title field empty                                     |                                              Display error: This field may not be blank                                              |               Submit form with empty title               |    ✅     |
| 32  | Leave description/content empty                             |                                              Display error: This field may not be blank                                              |            Submit form with empty description            |    ✅     |
| 33  | Leave rating empty                                          |                                   Display error: Ensure this value is greater than or equal to 1.                                    |           Submit form without selecting rating           |    ✅     |
| 34  | Edit existing review                                        |                                                  Successfully update review content                                                  |              Edit a review and save changes              |    ✅     |
| 35  | Delete review                                               |                                          Review is removed from list and no longer visible                                           |             Click delete button on a review              |    ✅     |
|     | Explore Page (Logged in user)                               |                                                                                                                                      |                                                          |           |
| 36  | Dropdown menu                                               |                                           If user is logged in, display the dropdown menu                                            |           Log in and navigate to explore page            |    ✅     |
| 37  | Dropdown menu                                               |                                   If user is not logged in, dropdown menu should not be displayed                                    |    Log out and verify user is redirected to Home page    |    ✅     |
| 38  | Display dropdown menu                                       |                                               Display Posts, Feed, Liked, Events links                                               |                   click explore button                   |    ✅     |
| 39  | Posts link                                                  |                                                        Redirect to Posts page                                                        |            Log in and navigate to posts page             |    ✅     |
| 40  | Feed link                                                   |                                                        Redirect to Feed page                                                         |             Log in and navigate to feed page             |    ✅     |
| 41  | Liked link                                                  |                                                        Redirect to Liked page                                                        |            Log in and navigate to liked page             |    ✅     |
| 42  | Events link                                                 |                                                       Redirect to Events page                                                        |            Log in and navigate to events page            |    ✅     |
|     | My Profile Page                                             |                                                                                                                                      |
| 43  | Dropdown menu                                               |                                           If user is logged in, display the dropdown menu                                            |        Log in and click on My Bonsai Hive button         |    ✅     |
| 44  | Display dropdown menu                                       |                                         Display My Profile, Reviews, Contact, Sign Out links                                         |               Click My Bonsai Hive button                |    ✅     |
| 45  | My Profile link                                             |                                                     Redirect to My Profile page                                                      |           Click My Profile link from dropdown            |    ✅     |
| 46  | Reviews link                                                |                                                       Redirect to Reviews page                                                       |             Click Reviews link from dropdown             |    ✅     |
| 47  | Contact link                                                |                                                       Redirect to Contact page                                                       |             Click Contact link from dropdown             |    ✅     |
| 48  | Sign Out link                                               |                                             Sign out the user and redirect to Home page                                              |            Click Sign Out link from dropdown             |    ✅     |
|     | Posts Page (Logged in user)                                 |                                                                                                                                      |                                                          |           |
| 49  | Posts page loading                                          |                                   The page loads correctly, and the title and content are visible                                    |                   Check page elements                    |    ✅     |
| 50  | User can view posts                                         |                                                The user sees the created posts listed                                                |                     Observe the list                     |    ✅     |
| 51  | Typing in search bar                                        |                                               User can type text into the search input                                               |           Click on search bar and type a query           |    ✅     |
| 52  | Search result accuracy                                      |                                             Only posts matching the query are displayed                                              |         Type known post title and verify results         |    ✅     |
| 53  | Case-insensitive search                                     |                                        Search works regardless of uppercase/lowercase letters                                        |                  Type mixed-case query                   |    ✅     |
| 54  | No matching results                                         |                               Appropriate message shown: “No results found. Adjust the search keyword”                               |          Type text that does not match any post          |    ✅     |
| 55  | Partial word search                                         |                                           Posts containing the partial word are displayed                                            |           Type partial word from a post title            |    ✅     |
| 56  | Rapid typing                                                |                                              Auto-search updates correctly without lag                                               |      Type quickly in search bar and verify results       |    ✅     |
| 57  | Add Post button visibility                                  |                                            “Add Post” button is visible on the Posts page                                            |           Navigate to Posts page and check UI            |    ✅     |
| 58  | Access to post details                                      |                                               Clicking on a post opens the detail page                                               |                 Select and click a post                  |    ✅     |
| 59  | Redirect to Add Post form                                   |                                            Clicking “Add Post” opens the create post form                                            |                  click Add Post button                   |    ✅     |
| 60  | Valid form submission (all fields filled)                   |                                         Post is created successfully and visible in the list                                         |        Fill in title, content, image, then submit        |    ✅     |
| 61  | Empty title field                                           |                                      Error message: “This field may not be blank” is displayed                                       |       Leave title empty, fill content, then submit       |    ✅     |
| 62  | Like button on own post                                     |                     User cannot like their own post; error message "You can't like your own post!" is displayed                      |            Go to own post, click Like button             |    ✅     |
| 63  | Like another user's post                                    |                               Clicking the heart icon on someone else’s post increases the like count                                |      Click the heart icon under someone else’s post      |    ✅     |
| 64  | Unlike a post                                               |                   Clicking the heart icon again on someone else’s post decreases the like count (toggle behavior)                    |   Click the heart icon again under someone else’s post   |    ✅     |
| 65  | Add a comment                                               |                                   Logged-in users can add a comment, and it appears under the post                                   |             Fill in comment text and submit              |    ✅     |
| 66  | Edit a comment                                              |                                 Users can edit their own comments and the updated text is displayed                                  |    Click edit on own comment, change text, then save     |    ✅     |
| 67  | Delete a comment                                            |                                Users can delete their own comments and they are removed from the post                                |               Click delete on own comment                |    ✅     |
|     | Feed Page (Logged in user)                                  |                                                                                                                                      |                                                          |           |
| 68  | Feed page loading                                           |                                       The page loads correctly and the content feed is visible                                       |                   Observe page loading                   |    ✅     |
| 69  | Correct content display                                     |                                      The posts from accounts followed by the user are displayed                                      |                    Check the content                     |    ✅     |
| 70  | New content update                                          |                                             New posts appear when the page is refreshed                                              |                     Refresh the page                     |    ✅     |
|     | Liked Page (Logged in user)                                 |
| 71  | Liked page loading                                          |                                         The page loads correctly and liked posts are visible                                         |                    Check page loading                    |    ✅     |
| 72  | Correct content listing                                     |                                           Posts previously liked by the user are displayed                                           |                     Verify the list                      |    ✅     |
| 73  | Unlike functionality test                                   |                               When a post is unliked from the Liked page, it is removed from the list                                |                  Perform unlike action                   |    ✅     |
| 74  | No likes scenario                                           |              If the user has no liked posts, "No results found. Adjust the search keyword or like a post." is displayed              |                 Test with a new account                  |    ✅     |
|     | Events Page (Logged in user)                                |                                                                                                                                      |                                                          |           |
| 75  | Event details                                               |                                           Clicking on an event opens the event detail page                                           |                Select an event and click                 |    ✅     |
| 76  | Create Event button                                         |                                       The "Create Event" button is visible on the Events page                                        |           Navigate to Events page and check UI           |    ✅     |
| 77  | Create new Event - valid                                    |     A new event is successfully created when all required fields (Title, Description, Location, Start Time, End Time) are filled     |    Click "Create Event", fill all fields, then submit    |    ✅     |
| 78  | Create new Event - empty field                              |                    If any required field is left empty, an error message "Please fill in this field" is displayed                    | Leave one required field empty, fill others, then submit |    ✅     |
| 79  | Edit/Delete own Event                                       |                                             Users can edit or delete events they created                                             |          Go to own event, click Edit or Delete           |    ✅     |
|     | My Profile Page                                             |                                                                                                                                      |                                                          |           |
| 80  | View own posts                                              |                                               User can see all posts they have shared                                                |        Navigate to My Profile and check post list        |    ✅     |
| 81  | No posts message                                            |                             Appropriate message shown: `No results found, <username> hasn’t posted yet.`                             |                  Check with a new user                   |    ✅     |
| 82  | Edit profile button                                         |                                             Edit Profile button is visible and clickable                                             |                    Click Edit Profile                    |    ✅     |
| 83  | Change profile image                                        |                                                 User can upload a new profile image                                                  |                  Select image and save                   |    ✅     |
| 84  | Change bio                                                  |                                               User can edit bio and changes are saved                                                |                 Edit bio field and save                  |    ✅     |
| 85  | Change username successfully                                |                                              Username updated and reflected in profile                                               |            Enter new valid username and save             |    ✅     |
| 86  | Username already exists                                     |                                     Error displayed: “A user with that username already exists”                                      |             Enter existing username and save             |    ✅     |
| 87  | Empty username                                              |                                            Error displayed: “This field may not be blank”                                            |              Leave username empty and save               |    ✅     |
| 88  | Change password successfully                                |                                         Password updated; user can log in with new password                                          | Enter current password, new password, confirm, and save  |    ✅     |
| 89  | Mismatched passwords                                        |                                       Error displayed: “The two password fields didn’t match”                                        |        Enter different new and confirm passwords         |    ✅     |
| 90  | Empty password fields                                       |                                            Error displayed: “This field may not be blank”                                            |       Leave new password or confirm password empty       |    ✅     |
| 91  | Weak password                                               | Error displayed if password is too common or entirely numeric: “This password is too common.” / “This password is entirely numeric.” | Enter weak password like “123456” or “password” and save |    ✅     |

## Bugs

Problem:
The like and comment icons had low visibility because of poor contrast with the pink background and site’s turquoise green theme, making them difficult for users to notice.

Solved by:
Updated the icon colours and adjusted the post background color to improve contrast and visual harmony.

---

Problem:
The Review model was incomplete (missing clear association to what is reviewed), migrations were not applied causing 500 errors, and users could submit more than one review per post.

Solved by:
Added ForeignKey to posts in the Review model, ran migrations to apply changes, and added a unique_together constraint to ensure one review per user per post. Tested and confirmed fixes.

---

Problem:
Comments on the Post page were not filtered correctly, causing all comments from every post to appear under each post. This happened because of a typo: filterfield was used instead of filterfields in the backend.

Solved by:
Fixed the typo by updating filterfield to filterfields so comments now display only those related to the specific post.
