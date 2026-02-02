import { Suspense } from "react";

import RequestQuote from "../Components/RequestQuote";

import PageLoader from "../Components/ui/PageLoader";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { useIslandQuery } from "../hooks/queries/useIslandQuery.js";
import { useNavigate } from "react-router-dom";
import {
  Hero,
  About,
  OurService,
  Statistics,
  ServicesSection,
  Clients,
  ReviewSection,
  ArticleSection,
} from "../Components";

export default function Home() {
  const { data, isLoading } = useIslandQuery();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact-us#order");
  }

  // Show page loader while data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <section className="flex flex-col items-center">
      <Hero />

      <About data={data?.data} />

      <OurService />
      <Statistics />
      <ServicesSection />
      <div className="mt-10 w-full ">
        <RequestQuote
          onClick={handleClick}
          title="تقديم طلب عرض سعر"
          description={`من خلال نموذج طلب عرض السعر، يمكنكم مشاركة متطلباتكم الفنية والتشغيلية
        \n ليقوم فريقنا بدراستها وإعداد عرض سعر متكامل`}
          buttonText="طلب عرض السعر"
          buttonIcon={<MdOutlinePhoneInTalk size={20} />}
        />
      </div>
      <Clients />
      <ReviewSection />
      <ArticleSection />
    </section>
  );
}
