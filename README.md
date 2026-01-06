# Secure Digital Complaint & Resolution Platform (Smart Governance App)

A comprehensive, production-ready web application for digital complaint management with role-based access control, analytics dashboard, and secure authentication.

## Features

### User Roles & Permissions

1. **Citizen**
   - Register and login securely
   - Submit complaints with categories, descriptions, and priorities
   - Upload optional attachments
   - Track complaint status in real-time
   - View complaint history

2. **Officer**
   - Secure login with role-based access
   - View assigned complaints
   - Update complaint status (Pending → In-Progress → Resolved → Closed)
   - Add resolution remarks

3. **Admin**
   - Full system management
   - User role management and account activation/deactivation
   - Assign complaints to officers
   - Set complaint priorities
   - View comprehensive analytics dashboard
   - Monitor system activity

### Core Features

- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **Role-Based Access Control**: Middleware-protected routes for different user roles
- **Complaint Lifecycle Management**: Complete workflow from submission to resolution
- **File Upload Support**: Secure attachment handling for complaints
- **Real-time Status Tracking**: Live updates on complaint progress
- **Analytics Dashboard**: Chart.js-powered visualizations
- **Responsive Design**: Mobile-friendly interface

### Analytics Dashboard

- **Statistics Cards**: Total complaints, resolved complaints, pending complaints, average resolution time
- **Bar Chart**: Complaints by category (Infrastructure, Public Services, Environment, Health, Education, Other)
- **Pie Chart**: Complaint status distribution
- **Line Chart**: Monthly complaint trends

## Technology Stack

### Backend
- **Node.js** with **Express.js**
- **MySQL** database with **Sequelize ORM**
- **JWT** for authentication
- **bcrypt** for password hashing
- **express-validator** for input validation
- **multer** for file uploads

### Frontend
- **Vanilla JavaScript** (No frameworks)
- **HTML5** and **CSS3**
- **Chart.js** for analytics
- **Responsive design** with CSS Grid and Flexbox

### Security Features
- Password hashing with bcrypt
- JWT token-based authentication
- Role-based middleware protection
- Input validation and sanitization
- File upload security
- CORS configuration

## Project Structure

```
smart-governance-app/
├── config/
│   └── database.js              # Sequelize database configuration
├── controllers/
│   ├── authController.js        # Authentication logic
│   ├── complaintController.js   # Complaint CRUD operations
│   └── adminController.js       # Admin management functions
├── middleware/
│   ├── auth.js                  # JWT authentication middleware
│   ├── roleCheck.js             # Role-based access control
│   └── errorHandler.js          # Centralized error handling
├── models/
│   ├── role.js                  # User roles model
│   ├── user.js                  # Users model
│   ├── complaint.js             # Complaints model
│   ├── complaint_status_history.js  # Status change history
│   └── officer_assignments.js   # Officer assignment tracking
├── routes/
│   ├── auth.js                  # Authentication routes
│   ├── complaints.js            # Complaint management routes
│   └── admin.js                 # Admin routes
├── services/
│   ├── authService.js           # Authentication business logic
│   ├── complaintService.js      # Complaint business logic
│   └── adminService.js          # Admin business logic
├── uploads/                     # File upload directory
├── views/                       # Frontend HTML files
│   ├── login.html
│   ├── register.html
│   ├── citizen-dashboard.html
│   ├── officer-dashboard.html
│   └── admin-dashboard.html
├── styles.css                   # Global CSS styles
├── auth.js                      # Frontend authentication
├── citizen.js                   # Citizen dashboard logic
├── officer.js                   # Officer dashboard logic
├── admin.js                     # Admin dashboard logic
├── server.js                    # Main application entry point
├── package.json                 # Dependencies and scripts
├── schema.sql                   # MySQL database schema
└── README.md                    # This file
```

## Database Schema

The application uses MySQL with the following normalized tables:

- `roles` - User roles (Citizen, Officer, Admin)
- `users` - User accounts with role relationships
- `complaints` - Main complaint entities
- `complaint_status_history` - Audit trail of status changes
- `officer_assignments` - Complaint assignment tracking

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-governance-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Database Setup**
   ```bash
   # Create MySQL database
   mysql -u root -p
   CREATE DATABASE smart_governance;
   EXIT;

   # Import schema
   mysql -u root -p smart_governance < schema.sql
   ```

4. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=smart_governance
   JWT_SECRET=your_jwt_secret_key_here
   PORT=3000
   ```

5. **Start the Application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

6. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`
   - Use the login page to access the application

## API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Complaint Endpoints

- `POST /api/complaints` - Create new complaint (Citizen)
- `GET /api/complaints/my-complaints` - Get user's complaints (Citizen)
- `GET /api/complaints/assigned` - Get assigned complaints (Officer)
- `PUT /api/complaints/:id/status` - Update complaint status (Officer)
- `GET /api/complaints/all` - Get all complaints (Admin)
- `PUT /api/complaints/:id/assign` - Assign complaint to officer (Admin)
- `GET /api/complaints/stats` - Get complaint statistics (Admin)

### Admin Endpoints

- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/role` - Update user role
- `PUT /api/admin/users/:id/status` - Toggle user status
- `GET /api/admin/stats` - Get system statistics
- `GET /api/admin/officers` - Get officers for assignment
- `POST /api/admin/assign-complaints` - Bulk assign complaints

## Default Users

After running the schema.sql, the following test users are available:

- **Citizen**: john@example.com / password123
- **Officer**: officer@example.com / password123
- **Admin**: admin@example.com / password123

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens expire and require re-authentication
- File uploads are restricted to specific types and sizes
- Input validation prevents SQL injection and XSS attacks
- Role-based middleware ensures proper access control
- CORS is configured for cross-origin requests

## Development Notes

- The application follows MVC architecture
- Clean code principles with proper separation of concerns
- Comprehensive error handling and logging
- Responsive design works on all device sizes
- Code is well-commented for educational purposes

## Future Enhancements

- Email notifications for status updates
- Advanced search and filtering
- Export functionality for reports
- Mobile app companion
- Multi-language support
- Integration with external APIs

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For questions or issues, please create an issue in the repository or contact the development team.
