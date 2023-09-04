import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import nodemailer from "nodemailer";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { formSchema } from "~/utils/validationSchemas/formSchema";
import { TRPCError } from "@trpc/server";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "2 m"),
  analytics: true,
});

export const mailRouter = createTRPCRouter({
  sendMail: publicProcedure
    .input(formSchema)
    .mutation(async ({ ctx, input }) => {
      const userIpAdress = ctx.ip;
      const { success } = await ratelimit.limit(userIpAdress!);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const mailOptions = {
        from: process.env.SMTP_HOST,
        to: "leo.piras@outlook.com", // Recipient's email address
        subject: `Messade de ${input.nom} ${input.prenom}. Sujet: ${input.objet}. Email: ${input.email}`,
        text: `${input.message}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        } else {
          console.log("Email sent:", info.response);
        }
      });
    }),
});
