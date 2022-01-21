import Image from 'next/image';

export default function UserCard() {
  return (
    <section className="grid gap-4 grid-flow-col auto-cols-auto mb-12">
      <div className="relative w-40 row-span-2">
        <Image
          src="/static/images/me.jpg"
          className="rounded p-0"
          alt="picture of vaibhav mande"
          width={250}
          height={250}
        />
      </div>
      <div className="h-auto">
        <h1 className="text-2xl">Vaibhav Mande</h1>
        <h2 className="text-lg mb-0">Web developer based in Pune, India</h2>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
        fugit. Eaque quibusdam unde temporibus aliquid odit nihil repellendus
        consequatur.
      </p>
    </section>
  );
}
