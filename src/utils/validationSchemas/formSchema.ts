import { z } from "zod";

export const formSchema = z.object({
  nom: z
    .string()
    .max(30, "Nom de doit pas exéder 30 caractères")
    .min(1, "Veuillez renseigner votre nom"),
  prenom: z
    .string()
    .max(30, "Le prénom de doit pas exéder 30 caractères")
    .min(1, "Veuillez renseigner votre prénom"),
  email: z
    .string()
    .email("Format d'email invalide")
    .min(1, "Veuillez renseigner votre email")
    .max(40, "l'email ne doit pas faire plus de 40 caractères"),
  objet: z
    .string()
    .max(200, "Le message ne peut pas faire plus de 2000 caractère")
    .min(1, "Veuillez renseigner l'objet du message"),
  message: z
    .string()
    .max(11000, "Le message ne peut pas faire plus de 2000 caractères")
    .min(5, "Message trop court"),
});
