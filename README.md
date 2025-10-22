#  Email Deliverability Testing Tool

A comprehensive web application that tests email deliverability across major email providers (Gmail, Outlook, Yahoo) to help you understand where your emails land - inbox, spam, or other folders.

##  How It Works

1. **Create Test** - Generate a unique test code and get test email addresses
2. **Send Emails** - Send an email from your own account to all test addresses with the test code
3. **Analyze** - System automatically checks where your email landed in each provider
4. **Get Report** - Receive detailed deliverability report with scores and insights

##  Features

- **Multi-Provider Testing** - Test across Gmail, Outlook, and Yahoo simultaneously
- **Real-Time Analysis** - Automatic email detection and folder classification
- **Detailed Reports** - Comprehensive deliverability scores and insights
- **Shareable Results** - Generate shareable report links
- **Email Notifications** - Get notified when analysis is complete

##  Tech Stack

### Frontend
- React.js with Tailwind CSS
- Axios for API calls
- React Router for navigation
- React Hot Toast for notifications

### Backend
- Node.js with Express.js
- MongoDB for data storage
- IMAP for email checking
- Nodemailer for email sending

##  Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Email accounts (Gmail, Outlook, Yahoo) with IMAP access

##  Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd email-spam-report-tool
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   Create `.env` file in backend directory:
   ```env
   PORT=8000
   MONGODB_URL=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:5173

   # Email Configuration (Use App Passwords)
   GMAIL_USER=your_gmail@gmail.com
   GMAIL_PASS=your_gmail_app_password

   OUTLOOK_USER=your_outlook@outlook.com
   OUTLOOK_PASS=your_outlook_app_password

   YAHOO_USER=your_yahoo@yahoo.com
   YAHOO_PASS=your_yahoo_app_password

   # SMTP for notifications
   SMTP_USER=your_smtp_email@gmail.com
   SMTP_PASS=your_smtp_app_password
   ```

4. **Start the application**
   ```bash
   # Backend (from backend directory)
   npm run dev

   # Frontend (from frontend directory)
   npm run dev
   ```

##  Configuration

### Email App Passwords
For security, use App Passwords instead of regular passwords:

- **Gmail**: Google Account → Security → 2FA → App Passwords
- **Outlook**: Microsoft Account → Security → App Passwords
- **Yahoo**: Account Security → App Passwords

## Usage

1. **Visit the application** in your browser
2. **Enter your email and name** to create a test
3. **Copy the test code and email addresses**
4. **Send an email** from your email client to all test addresses
   - Include the test code in subject or body
5. **Start analysis** and wait 2-5 minutes
6. **View your deliverability report** with detailed results

##  What Gets Tested

- **Inbox Placement** - Did your email reach the main inbox?
- **Spam Detection** - Was your email flagged as spam?
- **Provider Performance** - How each provider treats your email
- **Overall Score** - Composite deliverability score

##  API Endpoints

- `POST /api/tests/create` - Create new test
- `GET /api/tests/report/:testId` - Get test report
- `GET /api/tests/status/:testId` - Check test status
- `POST /api/email/start-check` - Start email analysis

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

##  License

This project is licensed under the MIT License.

##  Support

For issues and questions:
1. Check the console logs for detailed error information
2. Verify your email credentials and app passwords
3. Ensure IMAP is enabled on your email accounts

---

**Built with love to help improve email deliverability for everyone**
