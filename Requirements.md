# StudyCircle Project Requirements

## 1. Introduction
**Purpose:** Define what StudyCircle will do and who will use it.  
**Scope:** A web-based community platform where learners create or join “circles,” share text-based study posts, chat in real time, and receive notifications.

## 2. Stakeholders
- **End Users (Learners):** create/join circles, post content, chat, react, receive notifications  
- **Circle Owners/Admins:** manage circles, moderate content  
- **System Administrators:** maintain uptime, perform deployments, manage database  
- **Future Extension:** educators who may schedule announcements or reminders

## 3. Functional Requirements

### 3.1 User Management
1. **Registration & Login**  
   - Users can sign up with email and password.  
   - Login issues JWT access tokens; refresh tokens for session renewal.  
2. **Profile**  
   - Edit avatar image and bio.  
   - View other users’ profiles.

### 3.2 Circles & Membership
1. **Create Circles**  
   - Users can create a new circle with name & optional description.  
2. **Browse & Search Circles**  
   - List all circles; search by name or tag.  
3. **Join / Leave**  
   - Users can request to join public circles or be invited.  
   - Leave at any time.  
4. **Roles**  
   - “Owner” (full control), “Admin” (moderation), “Member” (standard participant).

### 3.3 Posting & Feed
1. **Text Posts**  
   - Users write and edit text-only posts.  
   - Assign optional tags and/or circle context.  
2. **Feed Aggregation**  
   - Combined feed showing:
     - Posts from circles you’ve joined  
     - Posts from users you follow  
   - Pagination or “load more” support.  
3. **Tags**  
   - Create new tags on the fly; select from existing ones.  
   - Filter feed by tag or circle.

### 3.4 Reactions & Comments
1. **Reactions**  
   - “Like” (or other simple reaction types) on any post.  
2. **Comments**  
   - Add threaded comments under posts.  
   - Edit/delete own comments.

### 3.5 Real-Time Chat
1. **Circle Chat Rooms**  
   - One room per circle; only members have access.  
2. **Messaging**  
   - Send and receive text messages instantly.  
   - Display timestamps and sender avatars.  
3. **Message History (optional)**  
   - Persist messages so that new joiners can see recent chat history.

### 3.6 Notifications & Reminders
1. **In-App Notifications**  
   - Alert on: new post in joined circle, comment on your post, direct mention, new chat message.  
   - Unread notification count badge.  
   - Mark notifications as read.  
2. **Email Reminders (optional initial MVP)**  
   - Daily summary of activity in each circle.  
   - Use a scheduled job (e.g., cron) to send emails.

## 4. Non-Functional Requirements
- **Performance:** feed loads within 2 seconds, chat latency ≤ 200 ms  
- **Scalability:** support hundreds of concurrent users and multiple chat rooms  
- **Security:**  
  - Store passwords hashed (e.g. bcrypt).  
  - Secure JWTs with strong secret, HTTPS everywhere.  
  - Authorization checks on every endpoint.  
- **Maintainability:**  
  - Clean code structure (`/api` and `/web` separation).  
  - Type safety via TypeScript and Prisma.  
- **Usability & Accessibility:**  
  - Responsive design for mobile & desktop.  
  - Accessible controls (ARIA, keyboard nav).  
- **Reliability:**  
  - Automated tests covering auth, posts, chat logic.  
  - Error handling & graceful degradation.

## 5. High-Level Architecture & Tech Stack

| Layer                | Technology                           |
|----------------------|--------------------------------------|
| Frontend             | React + TypeScript, MUI + Tailwind   |
| State & Data Fetch   | React Query (TanStack Query)         |
| Styling              | MUI components + Tailwind overrides  |
| Routing              | react-router-dom                     |
| Real-Time Comm       | Socket.io (client & server)          |
| Backend Framework    | Node.js + Express + Socket.io        |
| Auth                 | Passport.js with JWT strategy        |
| Database             | PostgreSQL via Prisma ORM            |
| Scheduling & Email   | node-cron + nodemailer               |
| Hosting              | Web: Netlify; API: Render            |

## Next Steps
1. **Confirm** or refine any of the above requirements.  
2. Begin drafting your database schema with Prisma models.  
3. Set up CI/CD pipelines on GitHub and connect deployments (Netlify & Render).