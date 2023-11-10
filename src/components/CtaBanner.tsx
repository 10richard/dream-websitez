const CtaBanner = () => {
  return (
    <section className="flex justify-center bg-black text-white pt-32 pb-20 border-b border-white">
      <div className="grid gap-10 w-5/6 text-center place-items-center">
        <h1 className="text-5xl font-bold leading-tight">
          Ready for a Digital Makeover?
        </h1>
        <p className="min-[480px]:text-2xl text-xl min-[750px]:w-[630px]">
          Revitalize Your Brand, Transform Your Website, and Make a Lasting
          Impression in the Digital Realm.
        </p>

        <div className="min-[750px]:w-[630px] h-[125px] w-full">
          <a className="font-bold text-2xl" href="#pricing">
            <button
              type="button"
              className="w-full h-full bg-black text-white border border-white text-center px-10 py-4 rounded-xl relative hover:-translate-y-2 hover:shadow-[7px_6px_0px_#A9A9A9] hover:bg-white hover:text-black duration-300"
            >
              Get started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
