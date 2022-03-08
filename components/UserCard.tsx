import Image from 'next/image';

export default function UserCard() {
  return (
    // grid gap-4 grid-flow-col auto-cols-auto
    <section className="mb-12">
      <div className="relative w-40 hidden">
        <Image
          src="/static/images/me.jpg"
          className="rounded p-0"
          alt="picture of vaibhav mande"
          width={350}
          height={350}
        />
      </div>
      <div className="h-auto flex flex-col justify-between gap-4">
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
          <a
            href="https://www.linkedin.com/in/vaibhavmande/"
            target="_blank"
            rel="noopener"
            className="flex gap-2 mt-1"
          >
            <img
              src="/static/images/linkedin.svg"
              alt="logo of linkedin"
              className="w-6"
            />
            <span className="text-lg mt-auto leading-none">LinkedIn</span>
          </a>
        </p>
      </div>
    </section>
  );
}
