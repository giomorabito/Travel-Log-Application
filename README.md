# Pausing Moments

### Background story of Pausing Moments

While trying to figure out what type of path I want to go further with being a senior student in college and graduating in a month, I came to a point that I wanted to become a full stack web developer going into the job force. To give myself more experience, I decided to create this web application with resources of countless tutorials, blog posts, and Stack Overflow questions freely available on the Internet.

Apart of making this application to have something for my portfolio to show others, I have came to a point in my life where the thing I value the most is traveling and new experiences. Using this, I wanted to create a website where myself and others can share their travel stories, and instead of having likes and comments, users can simply bookmark the posts to use for inspiration of places to travel in the future.

To make the user experience usable and fun, I had to research on UI elements and also use Figma/Notability on my iPad to come up with mockups of how I wanted the home, login/register, posts, cards, etc. to look and feel. To track my progress, I also used Trello which can be viewed <a href="https://trello.com/b/0um5skA9/travel-log-application">here</a>.

Pausing Moments allows a user to create travel log entries that include a title, description, location, rating, and photo URL.

### Technologies used

Using the stack of MERN (MongoDB, Express, React and Node) and stay awaying from the norms of using a REST API which most MERN stacks use, I wanted to try out the open-source technology of GraphQL from Meta. On top of the stack, I used MaterialUI for styling.

### Instructions to use locally

Front-end: Inside the client folder, run npm install and then npm run to start the program. It will run locally at localhost:3000.

Back-end: Inside the server folder, create a .env file. Provide it with <b>MONGODB</b> = mongodb+srv://admin:`MONGODB LINK HERE`/TravelLog?retryWrites=true&w=majority and <b>SECRET_KEY</b> (which can be any random characters) credentials. Afterwards, run npm install and then npm run to start the program. It will run the GraphQL HTTP server locally at localhost:4000/graphql.

### Access website

The website can be accessed at <a href="https://pausingmoments.netlify.app/">https://pausingmoments.netlify.app/</a> with the credentials of `email`: user@email.com and `password`: pass

### Screenshots:

Homepage

![Homepage](https://i.imgur.com/0OnEWZv.png)

Creating a post

![Create a post](https://i.imgur.com/87VPps1.png)

Viewing an article

![Viewing an article](https://i.imgur.com/Bl3znqb.png)

Posts

![Posts](https://i.imgur.com/16wJ7oG.png)

Bookmarked posts

![Bookmarked posts](https://i.imgur.com/TXBSWeY.png)

User posts

![User posts](https://i.imgur.com/pdXQVzq.png)


