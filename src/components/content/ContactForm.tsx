import type { FieldValues } from "react-hook-form/dist/types";
import { api } from "~/utils/api";
import { useState } from "react";
import { formSchema } from "~/utils/validationSchemas/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
  const [error, setError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const { mutate } = api.mail.sendMail.useMutation({
    onSuccess: () => {
      reset();
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 30000);
      reset();
    },
    onError: () => {
      setError(true);
      setTimeout(() => {
        setMessageSent(false);
        setError(false);
      }, 30000);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FieldValues) {
    mutate({
      nom: data.nom,
      message: data.message,
      prenom: data.prenom,
      email: data.email,
      objet: data.objet,
    });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mt-7 flex w-full flex-col gap-3  "
    >
      <div className="flex gap-5">
        <div className="flex grow flex-col">
          <label
            htmlFor="nom"
            className=" bg-gradient-to-r from-lightBlue to-darkBlue bg-clip-text font-bold text-transparent"
          >
            Nom
          </label>
          <input
            {...register("nom")}
            id="nom"
            className=" block h-10 w-full appearance-none rounded-md bg-hoverGray  px-5 leading-tight text-white focus:bg-white focus:text-gray-700 focus:outline-none"
            placeholder="Doe"
          />
          <div className="h-6">
            {errors.nom && (
              <p className="text-red-400">{`${errors.nom?.message}`}</p>
            )}
          </div>
        </div>
        <div className="flex grow flex-col">
          <label
            htmlFor="prenom "
            className=" bg-gradient-to-r from-lightBlue to-darkBlue bg-clip-text font-bold text-transparent"
          >
            Prénom
          </label>
          <input
            id="prenom"
            className="block h-10 w-full appearance-none rounded-md bg-hoverGray  px-5 leading-tight text-white focus:bg-white focus:text-gray-700 focus:outline-none"
            placeholder="John"
            {...register("prenom")}
          />
          <div className="h-6">
            {errors.prenom && (
              <p className="text-red-400">{`${errors.prenom?.message}`}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className=" bg-gradient-to-r from-lightBlue to-darkBlue bg-clip-text font-bold text-transparent"
        >
          E-mail
        </label>
        <input
          id="email"
          placeholder="name@email.com"
          className="block h-10 w-full appearance-none rounded-md bg-hoverGray  px-5 leading-tight text-white focus:bg-white focus:text-gray-700 focus:outline-none"
          {...register("email")}
        />
        <div className="h-6">
          {errors.email && (
            <p className="text-red-400">{`${errors.email.message}`}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="objet"
          className=" bg-gradient-to-r from-lightBlue to-darkBlue bg-clip-text font-bold text-transparent"
        >
          Objet
        </label>
        <input
          id="objet"
          placeholder="Objet du message"
          className="block h-10 w-full appearance-none rounded-md bg-hoverGray  px-5 leading-tight text-white focus:bg-white focus:text-gray-700 focus:outline-none"
          {...register("objet")}
        />{" "}
        <div className="h-6">
          {errors.objet && (
            <p className="text-red-400">{`${errors.objet.message}`}</p>
          )}
        </div>
      </div>
      <div className="flex grow flex-col">
        <label
          htmlFor="message"
          className=" bg-gradient-to-r from-lightBlue to-darkBlue bg-clip-text font-bold text-transparent"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Votre message"
          className="h-60 w-full grow appearance-none rounded-md bg-hoverGray px-5  py-3 leading-tight text-white focus:bg-white focus:text-gray-700 focus:outline-none"
          {...register("message")}
        />
        <div className="h-6">
          {errors.message && (
            <p className="text-red-400">{`${errors.message.message}`}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button
          className="border-bg-red h-10 w-20 rounded-lg border-2 border-lightBlue "
          type="submit"
          disabled={isSubmitting}
        >
          Envoyer
        </button>
        {messageSent && (
          <p className="text-center text-green-500">
            Message envoyé. Je vous contacterai dans les plus brefs délais.
          </p>
        )}
        {error && (
          <p className="text-center text-red-500">
            Une erreur s'est produite, veuillez réessayer plus tard.
          </p>
        )}
      </div>
    </form>
  );
}
