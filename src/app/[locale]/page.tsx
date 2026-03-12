import { Main } from "@/views/main";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default function HomePage() {
  const meta = getMetaData("home");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Main />
      </div>
    </>
  );
}
