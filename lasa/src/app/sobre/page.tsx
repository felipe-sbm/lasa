import Image from "next/image";

export default async function HomePage() {
  return (
    <main className="relative p-6 min-h-screen">
      <section className="flex">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-8 text-center">
                About Us
              </h2>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                dolorum, iusto tempora tenetur laborum ducimus nihil. Dicta
                velit animi nisi distinctio soluta, officiis impedit illum,
                omnis beatae veritatis magnam nesciunt! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Quis cum odit sint provident
                modi doloremque dolores repellat neque dolor, ipsa totam
                assumenda repellendus non autem cumque qui, quibusdam ad illum!
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <Image
                src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Planta"
                className="object-cover shadow-md"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
