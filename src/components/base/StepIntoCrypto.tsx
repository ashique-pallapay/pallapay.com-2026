import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const StepIntoCrypto = () => {
  const t = useTranslations("turkeyPage.howToBuy");

  return (
    <div className="bg-(--primary-orange)/10 max-w-4xl mx-auto relative p-[1px] rounded-3xl border border-(--primary-orange)">
      <div className="bg-(--primary-orange)/20 right-0 -z-20 h-32 w-32 sm:h-40 sm:w-40 blur-3xl absolute"></div>
      <div className="bg-(--primary-orange)/20 bottom-0 left-0 -z-20 h-32 w-32 sm:h-40 sm:w-40 blur-3xl absolute"></div>

      <div className="rounded-3xl p-6 sm:p-8 md:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">
          {t("stepIntoTitle")}
        </h2>

        <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-sm sm:text-base">
          {t("stepIntoDesc")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all w-full sm:w-auto">
            {t("visitOffice")}
          </button>

          <button className="border border-(--primary-orange) bg-(--primary-orange)/10 text-yellow-500/80 font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all w-full sm:w-auto">
            {t("faq")}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500">
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-3 h-3 text-black" />
            </div>
            <span>{t("features.noCard")}</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-3 h-3 text-black" />
            </div>
            <span>{t("features.support")}</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-3 h-3 text-black" />
            </div>
            <span>{t("features.quickOpen")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepIntoCrypto;
