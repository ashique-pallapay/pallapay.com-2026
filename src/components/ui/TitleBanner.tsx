export default function TitleBanner({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center py-6 md:py-12 lg:py-16 px-4">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-5xl justify-center">
        <div className="flex items-center shrink-0">
          {/* <div className="h-[2px] w-10 sm:w-16 md:w-24 bg-yellow-500"></div> */}
          <span className="ml-2 w-20 h-[2px] bg-gradient-to-r from-transparent to-yellow-500 relative transition-all"></span>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
        </div>

        <h1 className="text-center text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-yellow-400 whitespace-nowrap">
          {title}
        </h1>

        <div className="flex items-center shrink-0">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
          <span className="w-20 h-[2px] bg-gradient-to-r to-transparent from-yellow-500 relative transition-all"></span>
          {/* <div className="h-[2px] w-10 sm:w-16 md:w-24 bg-yellow-500"></div> */}
        </div>
      </div>
    </div>
  );
}
