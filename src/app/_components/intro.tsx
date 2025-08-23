import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex md:justify-between mt-12 mb-12 md:mb-10">
      <h4 className="text-center md:text-left text-sml mt-5 md:pl-8">
        "I'm gonna need another universe, I tore mine apart." Everytime I Die - C++
      </h4>
      <img src="/assets/blog/authors/sacbannernoborder.png"/>
      <img src="/assets/blog/authors/headshots.png"/>
    </section>
  
  );
}
