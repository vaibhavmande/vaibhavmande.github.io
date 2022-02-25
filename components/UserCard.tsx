import Image from 'next/image';

export default function UserCard() {
  return (
    <section className="grid gap-4 grid-flow-col auto-cols-auto mb-12">
      <div className="relative w-40">
        <Image
          src="/static/images/me.jpg"
          className="rounded p-0"
          alt="picture of vaibhav mande"
          width={350}
          height={350}
        />
      </div>
      <div className="h-auto flex flex-col justify-between">
        <div className="main">
          <h1 className="text-2xl">Vaibhav Mande</h1>
          <h2 className="text-lg mb-0">
            Frontend developer based in Pune, India
          </h2>
        </div>
        <p className="mt-2">
          I love to build interfaces using React and Next. This website is the
          collection of items that I have learned and created over years.
        </p>
        <p className="mt-auto mb-2">
          <a href="/resume">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}
