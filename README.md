# bonsaiHive (REACT UI)

[bonsaiHive](heroku site adresini yaz) is a dedicated community platform connecting bonsai enthusiasts across West Sussex.

Unlike general gardening forums or broad social networks, Bonsai Hive is specifically designed for the art and passion of bonsai — offering a focused, vibrant space where knowledge, creativity, and local connection thrive.

Bonsai lovers are encouraged to:

- Share photos of their bonsai trees,

- Exchange care tips and cultivation techniques,

- Discover and explore different bonsai styles,

- Follow and interact with fellow bonsai artists,

- Join local meetups and community events,

- Build a supportive and engaged bonsai network.

Only registered users can access the platform’s content — including posts, photos, tips, and profiles. Signing up unlocks full access to these community features.

The goal of this React-based user interface is to deliver an engaging, intuitive front-end experience that enables users to create, read, update, and delete bonsai-related content by interacting seamlessly with the [back-end API](heroku/admin yaz). This ensures a dynamic and user-friendly platform for growing both bonsai knowledge and community connections.

Whether you're just starting out or are a seasoned bonsai grower, bonsaiHive is the ideal place to grow your trees — and your network.

![A preview of the bonsaiHive interface displayed across desktop, tablet, and mobile devices — designed to offer a seamless experience for bonsai enthusiasts on any screen size.](docs/readme-images/multi-screen-mock.png)(https://ui.dev/amiresponsive-eklenecek)

## UX Design

- Color Palette

  - The colour palette of Bonsai Hive is inspired by nature and the calming tones often found in bonsai environments. The goal was to create a warm, earthy feel that reflects the peaceful and organic spirit of bonsai art.
    - #385212 – Deep olive green used as the main background colour. Evokes the richness of soil and deep foliage.
    - #A2AD63 – Muted green-yellow used for navigation bars and buttons. Bright enough for attention, but still grounded in nature.
    - #e7e0ca – Soft cream tone used for card backgrounds. Adds warmth and improves readability against darker tones.
    - #d9cba3 – Pale golden beige used in card highlights and accents. Suggests natural light and subtle detail.
  - While these colours were consistently used across the site, minor variations and adjustments were made where needed to maintain visual harmony and contrast.

  ![Colour Palette for the Application](docs/readme-images/colour-palette.png)

- Typography

  - A system font stack was used to ensure fast loading and consistent rendering across different devices and platforms.

    - The primary font stack includes:

      - apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif

    - This approach ensures that the application looks clean and modern while minimizing dependency on external font files.

- For code elements, a monospaced font stack is used:

  - source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace

  - This improves readability in code blocks and form inputs where fixed-width fonts are appropriate.

- Icons

  - Consistent use of Font Awesome icons and colours enhances the user experience across the application.

  - Key icons include:
    - Add Post: far fa-plus-square
    - Search: fas fa-search
    - Options/Menu: fas fa-ellipsis-v
    - Edit (including profile editing): fas fa-edit
    - Delete: fas fa-trash-alt
    - User-related icons such as:
      - My Bonsai Hive: fas fa-user-circle
      - My Profile: fas fa-user
      - Sign In: fas fa-sign-in-alt
      - Sign Out: fas fa-sign-out-alt
      - Sign Up: fas fa-user-plus
  - Navigation and content-related icons:
    - Explore: fas fa-compass
    - Posts: fas fa-seedling
    - Liked: fas fa-heart
    - Events: fas fa-calendar-alt
    - Reviews: fas fa-star
    - Contact: fas fa-envelope
  - Security and identity icons:
    - ID Card: far fa-id-card
    - Key: fas fa-key

- All icons are sourced from the free [Font Awesome](https://fontawesome.com/) library and used consistently to represent their respective functions throughout the site.

## Features

### Reusable React Components

<hr>

This project follows a modular structure by creating and reusing React components to efficiently build the front-end. Below is an overview of reusable components and site-wide features, including their descriptions and how they are utilized throughout the application.

### Visual Identity

**Logo & Favicon (site-wide)**

- The application uses a single custom-designed image as both the logo and favicon.

- This image features a stylized bonsai tree created in Canva, incorporating the colour palette: #eff6dd, #fab297, #ff8249, #ff6540, and #ff4536.

- The favicon was generated from this logo using [favicon](https://favicon.io/) to ensure compatibility across browsers and devices.

- This consistent branding is applied throughout the site, including the navbar, browser tabs, and other key areas.

![bonsaiHive favicon in use](docs/readme-images/favicon-16x16.png)

**Navigation Bar (components/NavBar.js)**

The navigation bar features the Bonsai Hive logo with a natural green background (#A2AD63), providing clear and consistent branding across the site. Navigation links are styled in a light cream color (#F5F5F0) by default, switching to a pale gold (#D9CBA3) when active or hovered, improving visual feedback.

Links are tailored based on user authentication status:

Logged-out users see links to Reviews, Contact, Sign in, and Sign up pages.

Logged-in users have access to dropdown menus for Explore (Posts, Feed, Liked, Events) and My Bonsai Hive (My Profile, Reviews, Contact, Sign out).

The navbar is fully responsive, collapsing navigation links into a hamburger menu on smaller screens (<768px) with consistent background and styled dropdown items for a clean, user-friendly interface.

Usage:
Used throughout the entire application, fixed at the top with a height of 108px to ensure easy and consistent access.

![bonsaiHive navBar with collapsed menu](docs/readme-images/collapsed-navbar.png)
