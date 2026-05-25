/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: "PocketBase Test"
      },
      to: [{ address: "yourbuddy@avontechbuddy.com" }],
      subject: "PocketBase Email Test",
      html: "<h1>Email Service Test</h1><p>This is a test email to verify the mail service is working.</p><p>If you received this, the email service is properly configured!</p>"
    });
    
    $app.newMailClient().send(message);
    console.log("Test email sent successfully to yourbuddy@avontechbuddy.com");
  } catch (error) {
    console.error("Test email failed:", error.message || error);
  }
  
  e.next();
}, "booking_requests");