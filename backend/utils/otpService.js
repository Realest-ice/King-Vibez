const nodemailer = require("nodemailer");

module.exports.sendOTP = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"King Vibez Admin" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
      html: `<h2>Your OTP is: <b>${otp}</b></h2>`,
    });

    console.log("OTP email sent:", info.messageId);
  } catch (error) {
    console.log("Email error:", error);
  }
};
