import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
   <section>
    <div
      className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8"
    >
      <main
        className="flex items-center justify-center"
      >
        <article
          className="space-y-6 max-w-3xl flex flex-col justify-center flex-[2]"
        >
          <h1
            className="text-4xl font-bold max-w-2xl tracking-tight"
          >
            Encontre os melhores profissionais em um único local!
          </h1>
          <p
            className="text-base md:text-lg text-gray-200"
          >
            Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
          </p>

          <Button className="cursor-pointer w-fit py-5 px-6 font-semibold">
            Profissionais disponíveis
          </Button>
        </article>

        <div className="hidden lg:block">
          <Image 
            src="/medic 2.png"
            alt="Hero Section"
            width={340}
            height={"400"}
            className="object-contain"
            quality={100}
            priority
          />
        </div>
      </main>
    </div>
   </section>
  );
}