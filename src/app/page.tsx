import CSSmodule from "@/components/CSSmodule";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnUseGlobalCSS from "@/components/LearnUseGlobalCSS";
import LearnUseImage from "@/components/LearnUseImage";
import LearnUseRouter from "@/components/LearnUseRouter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*  <LearnUseRouter /> */}
      {/* <LearnUseGlobalCSS /> */}
      {/*  <CSSmodule /> */}
      {/*  <LearnUseImage /> */}
      <LearnDataFetching />
    </main>
  );
}
