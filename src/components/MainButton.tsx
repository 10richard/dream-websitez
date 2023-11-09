// make a cool button you can use everywhere - similar to design joy

interface MainButtonProps {
  text: string;
  link?: string;
}

const MainButton = ({ text, link }: MainButtonProps) => {
  return (
    <button
      type="button"
      className="w-full bg-black text-white text-center px-10 py-4 rounded-xl relative hover:-translate-y-2 shadow-[5px_4px_2px_#A9A9A9] hover:shadow-[7px_6px_2px_#A9A9A9] duration-300"
    >
      <a className="font-bold text-lg" href={link}>
        {text}
      </a>
    </button>
  );
};

export default MainButton;
