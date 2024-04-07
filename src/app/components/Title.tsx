
export default function Title( { title }: { title: string }) {
  return (
    <div className="border-b border-greenCustom-400 pb-1">
      <h2 className="text-xl text-greenCustom-600 md:text-2xl">{title}</h2>
    </div>
  );
}