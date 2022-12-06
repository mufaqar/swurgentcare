



import nodemailer from "nodemailer";

// /api/filename

export default async (req, res) => {
  const { name, email, doctor, date, gender } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'zunairgillani54@gmail.com',
      pass: 'ihtgccruyornevlv',
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "zunairgillani14@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Doctor: </strong> ${doctor}</p><br>
        <p><strong>Date: </strong> ${date}</p><br>
        <p><strong>Gender: </strong> ${gender}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};