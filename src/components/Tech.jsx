import { SectionWrapper } from "./higherOrderComponent";
import { technologies } from "../constants";

// Tech folder location
const techFolder = "../assets/tech";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <img src={tech.icon} alt={tech.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
