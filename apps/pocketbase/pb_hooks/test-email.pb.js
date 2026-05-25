/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  console.log("=== TEST EMAIL HOOK TRIGGERED ===");
  console.log("Record ID:", e.record.id);
  console.log("Record email:", e.record.get("email"));
  
  try {
    console.log("Attempting to send test email...");
    
    const senderAddress = $app.settings().meta.senderAddress;
    const senderName = $app.settings().meta.senderName;
    
    console.log("Sender address:", senderAddress);
    console.log("Sender name:", senderName);
    
    if (!senderAddress) {
      console.error("ERROR: senderAddress is not configured in PocketBase settings!");
      e.next();
      return;
    }
    
    const message = new MailerMessage({
      from: {
        address: senderAddress,
        name: senderName || "PocketBase"
      },
      to: [{ address: "yourbuddy@avontechbuddy.com" }],
      subject: "TEST EMAIL - Booking Request Received",
      html: "<h1>Test Email Success!</h1><p>This is a test email to verify PocketBase email configuration is working.</p><p>Booking ID: " + e.record.id + "</p>"
    });
    
    console.log("MailerMessage created successfully");
    console.log("Sending email to: yourbuddy@avontechbuddy.com");
    
    $app.newMailClient().send(message);
    
    console.log("Test email sent successfully!");
  } catch (error) {
    console.error("ERROR sending test email:", error.message || error);
  }
  
  e.next();
}, "booking_requests");