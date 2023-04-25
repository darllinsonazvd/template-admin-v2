export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center h-12 w-12 bg-white rounded-full">
      <div className="w-3 h-3 rounded-full bg-orange-400 mb-1" />
      <div className="flex mt-0.5">
        <div className="w-3 h-3 rounded-full bg-blue-500 mr-0.5" />
        <div className="w-3 h-3 rounded-full bg-sky-400 ml-0.5" />
      </div>
    </div>
  );
}
