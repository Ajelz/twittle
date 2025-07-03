# Twittle: A Twitter Clone

Twittle is a modern, full-stack application inspired by Twitter, designed to connect people through the sharing of short messages, images, and interactions. This project emulates core functionalities of the popular social media platform, providing a responsive and intuitive user interface, a robust backend, and a seamless deployment on Vercel.

## Features

- **Authentication System**: Secure signup and login processes.
- **Notification System**: Real-time alerts for various user interactions.
- **Image Upload**: Support for image uploading using Base64 strings.
- **Prisma ORM with MongoDB**: Efficient and type-safe database queries.
- **Responsive Layout**: Adaptive design for various screen sizes.
- **1 To Many Relations**: A single user can create multiple posts.
- **Many To Many Relations**: Posts can have multiple comments and vice-versa.
- **Following Functionality**: Users can follow and unfollow each other.
- **Comments/Replies**: Interaction with posts through comments and replies.
- **Likes Functionality**: Users can like posts.
- **Vercel Deployment**: Ready for deployment to Vercel for live application access.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (v14 or later)
- npm (usually comes with Node.js)
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/twittle.git
cd twittle
```

2. **Install NPM packages**

```bash
npm install
```

3. **Setup environment variables**

Create a `.env.local` file in the root of the project and add the following environment variables:

```env
DATABASE_URL="your_mongodb_url_here"
NEXTAUTH_JWT_SECRET="your_jwt_secret_here"
NEXTAUTH_SECRET="your_nextauth_secret_here"
```

*Note: Replace the values accordingly.*

4. **Start the development server**

```bash
npm run dev
```

This will start the local development server on [http://localhost:3000](http://localhost:3000). Open your browser and navigate to this URL to view the application.

### Vercel Deployment

To deploy Twittle on Vercel, push your code to a repository on GitHub and import your GitHub repository in Vercel. Vercel will guide you through the steps required to deploy your project.

*Don't forget to set up your environment variables in the Vercel dashboard as well.*


## License

Distributed under the MIT License. See `LICENSE` for more information.
