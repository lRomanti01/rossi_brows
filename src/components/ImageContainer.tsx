interface props {
  src: string;
  style?: string;
}

export default function ImageContainer({ src, style }: props) {
  return (
    <div
      className={`${style} border-[#dd5eb5] border-2 rounded-md shadow-[0_0_5px_1px_rgba(255,255,255,0.9)] hover:animate-pulseFast`}
    >
      <img src={src} className="w-full h-full rounded-md" />
    </div>
  );
}
