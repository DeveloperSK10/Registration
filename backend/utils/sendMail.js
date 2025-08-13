const nodemailer = require("nodemailer");

const sendConfirmationMail = async (to, name) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mindmeshitsymposium@gmail.com",       // 🔁 Replace with your email
        pass: "beig nyuy zolq wkmk",          // 🔁 Use Gmail App Password
      },
    });

    const mailOptions = {
      from: '"MindMesh Symposium" mindmeshitsymposium@gmail.com',
      to,
      subject: "Registration Confirmation - MindMesh IT Symposium",
      html: `<p>Dear ${name},</p>
             <p>Your registration for the <strong>MindMesh IT Symposium</strong> has been successfully received!</p>
             <p>We're excited to have you with us.</p>
             <p>Venue details and schedule will be mailed soon.</p>
             <br/>
             <p>With Regards,<br/>Team MindMesh</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("📨 Mail sent to:", to);
  } catch (error) {
    console.error("❌ Mail error:", error);
  }
};

module.exports = sendConfirmationMail;
