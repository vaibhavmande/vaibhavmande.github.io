export default function Footer() {
  return (
    <footer className="m-auto max-w-2xl pb-4 text-base">
      <section className="grid grid-rows-2 gap-4 text-gray-500">
        <div>
          Made by Vaibhav Mande using <a href="#">Next.js</a> hosted on{' '}
          <a href="#">Vercel</a>
        </div>
        <nav>
          <ul className="m-auto flex gap-4 justify-center">
            <li className="hover:text-gray-800">LinkedIn</li>
            <li>GitHub</li>
            <li>Calendly</li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
