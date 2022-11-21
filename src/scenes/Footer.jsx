import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-55 bg-green pt-5 pb-8">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-deep-blue">
            Yure Ribeiro
          </p>
          <p className="font-playfair text-md text-deep-blue">
            ©2022 Ribeiro. Todos direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;