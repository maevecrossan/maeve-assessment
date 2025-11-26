# Assessment Project

The following is an overview of a simple Next.js app with Firebase user authentication.

## Assessment Brief

You are required to create a **Next.js app** that includes:

- A **Login Page** with the following fields:
  - Full Name
  - Email Address
  - Password
- **Firebase Authentication** to handle user registration and login
- A **Homepage** that:
  - Greets the user by their full name
  - Includes a logout button

---

### Instructions

### 1. Environment Setup
- Follow the Next.js installation guide to set up your Next.js project.


#### 2. Create the Login Page
Design a simple login page with:
- Input fields for **Full Name, Email, and Password**
- Input validation for each field
- A button to trigger login or registration


#### 3. Set Up Firebase Authentication
1. Go to the Firebase Console and create a project
2. Add Firebase to your Next.js project
3. Follow Firebase documentation to:
   - Install and integrate required libraries
   - Add Firebase configuration files
   - Enable Email/Password authentication


#### 4. Implement Authentication Logic
Use Firebase’s authentication methods to:

- **Register new users**
  - Save their full name (e.g., via `displayName`)
- **Log in returning users**
  - Authenticate and fetch stored user details


#### 5. Navigate to the Home Page After Login
Upon successful login or signup, redirect the user to a Home Page displaying:

- A message like:  
  **“Hey, \<User>! You’re successfully logged in.”**
- A **Logout** button that:
  - Signs out the user
  - Redirects back to the Login page


###  Tips

- Refer to **Next.js Official Documentation** for guidance.
- Test as you code — verify functionality at each step.
- Focus on functionality over design — simple UI is perfectly fine.

---

## Getting Started

To setup a similar project from scratch, you can follow the following documentation:
* [Next.js documentation](https://nextjs.org/docs/app/getting-started/installation) 
* [Firebase Authentication documentation](https://firebase.google.com/docs/auth).

### Run this project
1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the project using `npm run dev`.

---

## Project Details

Upon opening the app, the user is greeted with a login form. If they are not logged in, they can click the `Don't have an account? Sign Up` link below the login button. This dynamically switches the login form to a sign up form.

After logging in or signing up, the user is redirected to the homepage where they are greeted with a personal message.

In the Navbar component is another log in button, which switches to a log out button when a user is authenticated. The log in button in the navbar adds no additional function at this moment, but was included for a more intuitive user experience and to facilitate project expansion.

## Project Challenges 
While I am familiar with Next.js, this was my first time working with Firebase Authentication. Adopting a new technology always presents learning challenges, but after sitting with the documentation and doing additional research into how Next.js App Router and Firebase piece together, I now feel confident in implementing Firebase Authentication in future projects.

## Future Improvements
- Additional user profile information (profile pictures, user bio, account settings)
- Password reset functionality
- Enhanced UI (ARIA labelling, animations, focus states)
- User session expiry
- Improved navbar (add profile image, make fully responsive)

## Tech Stack
- Next.js 14 (App Router)
- React
- Firebase Authentication
- Tailwind CSS