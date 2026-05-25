/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const senderAddress = $app.settings().meta.senderAddress;
    const senderName = $app.settings().meta.senderName || "Avon Tech Buddy";
    
    // Get booking details from the record
    const fullName = e.record.get("fullName") || "Guest";
    const email = e.record.get("email");
    const phoneNumber = e.record.get("phoneNumber") || "Not provided";
    const serviceNeeded = e.record.get("serviceNeeded") || "Not specified";
    const deviceType = e.record.get("deviceType") || "Not specified";
    const preferredVisitTime = e.record.get("preferredVisitTime") || "Not specified";
    const urgency = e.record.get("urgency") || "Not specified";
    const issueDescription = e.record.get("issueDescription") || "No description provided";
    const city = e.record.get("city") || "Not specified";
    const preferredContactMethod = e.record.get("preferredContactMethod") || "Not specified";
    const recordId = e.record.id;
    const createdAt = e.record.get("created") || new Date().toISOString();
    
    // Validate sender address is configured
    if (!senderAddress || senderAddress === "") {
      console.error("Booking confirmation failed: Sender address not configured in PocketBase settings");
      e.next();
      return;
    }
    
    // Validate customer email
    if (!email || email === "") {
      console.error("Booking confirmation failed: Customer email is missing");
      e.next();
      return;
    }
    
    // Email to customer
    const customerMessage = new MailerMessage({
      from: {
        address: senderAddress,
        name: senderName
      },
      to: [{ address: email }],
      subject: "Booking Confirmation - Avon Tech Buddy",
      html: `
        <h2>Booking Confirmation</h2>
        <p>Dear ${fullName},</p>
        <p>Thank you for booking with Avon Tech Buddy! Your booking has been received and confirmed.</p>
        
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Booking ID:</strong> ${recordId}</li>
          <li><strong>Service Needed:</strong> ${serviceNeeded}</li>
          <li><strong>Device Type:</strong> ${deviceType}</li>
          <li><strong>Issue Description:</strong> ${issueDescription}</li>
          <li><strong>Preferred Visit Time:</strong> ${preferredVisitTime}</li>
          <li><strong>Urgency Level:</strong> ${urgency}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</li>
          <li><strong>Phone Number:</strong> ${phoneNumber}</li>
          <li><strong>Submitted:</strong> ${createdAt}</li>
        </ul>
        
        <p>We will review your booking and contact you shortly to confirm the appointment details.</p>
        <p>If you have any questions, please reply to this email or call us.</p>
        
        <p>Best regards,<br>Avon Tech Buddy Team</p>
      `
    });
    
    // Email to admin
    const adminMessage = new MailerMessage({
      from: {
        address: senderAddress,
        name: senderName
      },
      to: [{ address: "yourbuddy@avontechbuddy.com" }],
      subject: "New Booking Request - " + fullName,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Customer Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Booking ID:</strong> ${recordId}</li>
          <li><strong>Service Needed:</strong> ${serviceNeeded}</li>
          <li><strong>Device Type:</strong> ${deviceType}</li>
          <li><strong>Issue Description:</strong> ${issueDescription}</li>
          <li><strong>Preferred Visit Time:</strong> ${preferredVisitTime}</li>
          <li><strong>Urgency Level:</strong> ${urgency}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</li>
          <li><strong>Submitted:</strong> ${createdAt}</li>
        </ul>
        
        <p><a href="https://yourbuddy.avontechbuddy.com/admin/collections/booking_requests/records/${recordId}">View in Admin Dashboard</a></p>
      `
    });
    
    // Send both emails
    $app.newMailClient().send(customerMessage);
    console.log("Customer confirmation email sent to: " + email);
    
    $app.newMailClient().send(adminMessage);
    console.log("Admin notification email sent to: yourbuddy@avontechbuddy.com");
    
  } catch (error) {
    console.error("Booking confirmation email error:", error.message || error);
    console.error("Stack trace:", error.stack || "No stack trace available");
  }
  
  e.next();
}, "booking_requests");