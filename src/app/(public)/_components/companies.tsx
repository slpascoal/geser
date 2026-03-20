import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Companies() {
  return (
    <section
      className="py-16 bg-[#121c33]"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2
          className="text-3xl text-center mb-12 font-bold"
        >
          Clínicas disponíveis
        </h2>

        <section
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Card className="overflow-hidden p-0">
            <CardContent
              className="p-0"
            >
              <div>
                <div
                  className="relative h-48"
                >
                  <Image 
                    src="/image.png"
                    alt="Foto da empresa"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className="p-4 space-y-4"
              >
                <div
                  className="flex items-center justify-between"
                >
                  <div>
                    <h3
                      className="font-semibold"
                    >
                      Clinica centro
                    </h3>
                    <p
                      className="text-sm text-gray-300"
                    >
                      Rua x, centro, Belo Horizonte - MG
                    </p>
                  </div>
                  
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>

                </div>

                <Button
                  className="w-full text-sm font-medium md:text-base"
                >
                  <Link
                    href="#"
                    className="flex items-center"
                  >
                    Agendar horário
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  )
}
