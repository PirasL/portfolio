import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import nodemailer from "nodemailer";

import { formSchema } from "~/utils/validationSchemas/formSchema";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const mailRouter = createTRPCRouter({
  sendMail: publicProcedure.input(formSchema).mutation(async ({ input }) => {
    const mailOptions = {
      from: process.env.SMTP_HOST,
      to: "leo.piras@outlook.com", // Recipient's email address
      subject: `Messade de ${input.nom} ${input.prenom}. Sujet: ${input.objet}. Email: ${input.email}`,
      text: `${input.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      console.log("hey");
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  }),
});
