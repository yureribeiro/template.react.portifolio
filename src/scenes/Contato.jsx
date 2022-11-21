import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contato = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contato" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
           ENTRE EM <span className="text-yellow">CONTATO</span> COMIGO
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/yureribeirocontato@gmail.com"
            method="POST"
          >
            <input
              className="w-full rounded-md bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NOME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "Este campo é obrigatório."}
                {errors.name.type === "maxLength" && "Maximo 100 caracteres."}
              </p>
            )}

            <input
              className="w-full rounded-md bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "Este campo é obrigatório."}
                {errors.email.type === "pattern" && "Indereço de email inválido."}
              </p>
            )}

            <textarea
              className="w-full rounded-md bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MENSAGEM"
              rows="5"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "Este campo é obrigatório."}
                {errors.message.type === "maxLength" &&
                  "Maximo 2000 caracteres."}
              </p>
            )}

            <button
              className="p-5 rounded-md bg-yellow font-semibold text-deep-blue mt-5 hover:bg-blue hover:text-white transition duration-500 "
              type="submit"
            >
              ENVIAR MENSAGEM
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;