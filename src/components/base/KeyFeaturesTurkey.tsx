import React from "react";


interface KeyBenefitsTurkeyProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface KeyBenefitsTurkeyComponentProps {
  data: KeyBenefitsTurkeyProps[];
  title?: string;
}

export default function KeyBenefitsTurkey({
  data,
  title,
}: KeyBenefitsTurkeyComponentProps) {

  // const benefits = (t.raw("items") as any[]).map((item, index) => ({
  //   id: (index + 1).toString().padStart(2, "0"),
  //   title: item.title,
  //   description: item.desc,
  //   icon: icons[index] || icons[0],
  // }));

  return (
    <div className=" mx-auto">
      <div className="w-full text-center  flex items-center justify-center">
        <h2 className="text-lg max-w-xl mb-10 md:text-4xl font-semibold text-white ">
          {title}
        </h2>
      </div>

      <div className="text-left  relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.map((benefit: any) => (
            <div
              key={benefit.id}
              className="relative overflow-hidden border border-(--primary-grey)/40 bg-linear-to-b from-black to-(--primary-grey)/60 p-8 rounded-2xl min-h-[250px] flex flex-col justify-between"
            >
              <span className="absolute top-1 right-6 text-8xl font-semibold text-white opacity-5 select-none pointer-events-none">
                {benefit.id}
              </span>

              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                {benefit.icon}
              </div>

              <div className="bottom-0 left-0 absolute h-1 w-full bg-yellow-300"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
