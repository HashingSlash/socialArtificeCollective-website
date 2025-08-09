import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-10">
      <Container>
        <div className="py-20 flex flex-col lg:flex-column items-center">
          <h3 className="text-3xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            This site and its content are occasionally altered. 
            AI Art has been used. I am not a visual artist, and can not afford outsourcing. 
          </h3>
          
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
