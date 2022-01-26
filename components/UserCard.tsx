import Image from 'next/image';

export default function UserCard() {
  return (
    <section className="grid gap-4 grid-flow-col auto-cols-auto mb-12">
      <div className="relative w-40 row-span-2">
        <Image
          src="/static/images/me.jpg"
          className="rounded p-0"
          alt="picture of vaibhav mande"
          width={350}
          height={350}
        />
      </div>
      <div className="h-auto">
        <h1 className="text-2xl">Vaibhav Mande</h1>
        <h2 className="text-lg mb-0">Web developer based in Pune, India</h2>
      </div>
      <p>
        I am a frontend developer who loves to build interfaces using React and
        Next. I get facinated by unit tests, I love to write what I learnt at my
        blog at Medium. I love to teach and I am grateful to have got
        opportunities to mentor most wonderful minds. I am also passionate about
        web accessiblity and strongly believe in inclusive design.
      </p>
    </section>
  );
}
