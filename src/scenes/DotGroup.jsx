import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-green before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-blue before:left-[-50%]
    before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">

     <AnchorLink
      className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
       w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
      className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"}
       w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
      className={`${selectedPage === "projetos" ? selectedStyles : "bg-dark-grey"}
       w-3 h-3 rounded-full`}
        href="#projetos"
        onClick={() => setSelectedPage("projetos")}
      />
      <AnchorLink
      className={`${selectedPage === "testemunhos" ? selectedStyles : "bg-dark-grey"}
       w-3 h-3 rounded-full`}
        href="#testemunhos"
        onClick={() => setSelectedPage("testemunhos")}
      />
      <AnchorLink
      className={`${selectedPage === "contato" ? selectedStyles : "bg-dark-grey"}
       w-3 h-3 rounded-full`}
        href="#contato"
        onClick={() => setSelectedPage("contato")}
      />

    </div>
  );
};

export default DotGroup;