-- Sample Data for Smart Governance App
-- Run this after importing schema.sql

USE smart_governance;

-- Insert sample roles (already done in schema.sql)

-- Insert sample users with hashed passwords
-- Password for all sample users: 'password123' (hashed with bcrypt)
INSERT INTO users (name, email, password, role_id) VALUES
('Alice Johnson', 'alice@example.com', '$2b$10$S5xc7jmCdIn1UtRLlBfeH.7dL3.3c4a/MuuX7mn7LFeZZO8dXkhzS', 1),
('Bob Smith', 'bob@example.com', '$2b$10$S5xc7jmCdIn1UtRLlBfeH.7dL3.3c4a/MuuX7mn7LFeZZO8dXkhzS', 1),
('Carol Davis', 'carol@example.com', '$2b$10$S5xc7jmCdIn1UtRLlBfeH.7dL3.3c4a/MuuX7mn7LFeZZO8dXkhzS', 1),
('David Wilson', 'david@example.com', '$2b$10$S5xc7jmCdIn1UtRLlBfeH.7dL3.3c4a/MuuX7mn7LFeZZO8dXkhzS', 2),
('Emma Brown', 'emma@example.com', '$2b$10$S5xc7jmCdIn1UtRLlBfeH.7dL3.3c4a/MuuX7mn7LFeZZO8dXkhzS', 2),
('Frank Miller', 'frank@example.com', '$2b$10$S5xc7jmCdIn1UtRLlBfeH.7dL3.3c4a/MuuX7mn7LFeZZO8dXkhzS', 3);

-- Insert sample complaints
INSERT INTO complaints (title, description, category, priority, status, citizen_id, assigned_officer_id, created_at, updated_at) VALUES
('Pothole on Main Street', 'Large pothole causing traffic hazards near the intersection of Main Street and Oak Avenue. Needs immediate repair.', 'Infrastructure', 'High', 'Pending', 4, NULL, '2024-01-15 10:30:00', '2024-01-15 10:30:00'),
('Street Light Not Working', 'The street light at the corner of Elm Street and Pine Road has been out for over a week. Area is very dark at night.', 'Infrastructure', 'Medium', 'In-Progress', 5, 7, '2024-01-20 14:15:00', '2024-01-22 09:00:00'),
('Garbage Collection Delay', 'Garbage has not been collected for the past 3 days in our neighborhood. Piles of trash accumulating.', 'Public Services', 'High', 'Resolved', 6, 8, '2024-01-10 08:45:00', '2024-01-18 16:30:00'),
('Park Bench Broken', 'The bench in Central Park near the fountain is broken and unsafe to sit on. Needs repair or replacement.', 'Public Services', 'Low', 'Pending', 4, NULL, '2024-01-25 11:20:00', '2024-01-25 11:20:00'),
('Water Leak in Apartment', 'Water leak in apartment building causing damage to walls and floors. Maintenance requested but no response.', 'Infrastructure', 'Urgent', 'In-Progress', 5, 7, '2024-01-28 07:30:00', '2024-01-29 10:15:00'),
('Noise Complaint - Construction', 'Construction work starting at 6 AM every day, disturbing residents. Need to enforce noise regulations.', 'Environment', 'Medium', 'Pending', 6, NULL, '2024-02-01 12:00:00', '2024-02-01 12:00:00'),
('Traffic Signal Malfunction', 'Traffic light at busy intersection is stuck on red, causing major traffic congestion during peak hours.', 'Infrastructure', 'Urgent', 'Resolved', 4, 8, '2024-01-05 15:45:00', '2024-01-12 13:20:00'),
('School Playground Equipment', 'Playground equipment at Lincoln Elementary School is rusty and poses safety hazards for children.', 'Education', 'High', 'In-Progress', 5, 7, '2024-01-18 09:15:00', '2024-01-25 14:30:00'),
('Health Clinic Wait Times', 'Wait times at the downtown health clinic are excessively long, patients waiting over 3 hours for basic services.', 'Health', 'Medium', 'Pending', 6, NULL, '2024-02-05 10:00:00', '2024-02-05 10:00:00'),
('Illegal Dumping in Park', 'Illegal dumping of construction waste in Riverside Park. Environmental hazard and eyesore.', 'Environment', 'High', 'Resolved', 4, 8, '2024-01-22 16:20:00', '2024-02-02 11:45:00');

-- Update resolved complaints with resolved_at timestamp
UPDATE complaints SET resolved_at = '2024-01-18 16:30:00' WHERE id = 3;
UPDATE complaints SET resolved_at = '2024-01-12 13:20:00' WHERE id = 7;
UPDATE complaints SET resolved_at = '2024-02-02 11:45:00' WHERE id = 10;

-- Insert complaint status history
INSERT INTO complaint_status_history (complaint_id, old_status, new_status, remarks, changed_by) VALUES
(2, 'Pending', 'In-Progress', 'Assigned to officer for investigation', 9),
(3, 'Pending', 'In-Progress', 'Officer assigned to resolve garbage collection issue', 9),
(3, 'In-Progress', 'Resolved', 'Garbage collection service has been restored to normal schedule', 8),
(5, 'Pending', 'In-Progress', 'Urgent maintenance request - plumber dispatched', 9),
(7, 'Pending', 'In-Progress', 'Traffic engineering team notified', 9),
(7, 'In-Progress', 'Resolved', 'Traffic signal repaired and tested successfully', 8),
(8, 'Pending', 'In-Progress', 'Safety inspection scheduled for next week', 9),
(10, 'Pending', 'In-Progress', 'Environmental team dispatched to assess and clean up', 9),
(10, 'In-Progress', 'Resolved', 'Illegal dumping site cleaned up, warning issued to responsible party', 8);

-- Insert officer assignments
INSERT INTO officer_assignments (complaint_id, officer_id, assigned_by, assigned_at) VALUES
(2, 7, 9, '2024-01-22 09:00:00'),
(3, 8, 9, '2024-01-12 10:00:00'),
(5, 7, 9, '2024-01-29 10:15:00'),
(7, 8, 9, '2024-01-08 11:30:00'),
(8, 7, 9, '2024-01-20 13:45:00'),
(10, 8, 9, '2024-01-25 08:30:00');

-- Note: File attachments would be stored in the uploads/ directory
-- For demo purposes, you can add attachment filenames to the attachment column
UPDATE complaints SET attachment = 'complaint_1_photo.jpg' WHERE id = 1;
UPDATE complaints SET attachment = 'complaint_3_receipt.pdf' WHERE id = 3;
UPDATE complaints SET attachment = 'complaint_5_damage_photo.jpg' WHERE id = 5;
