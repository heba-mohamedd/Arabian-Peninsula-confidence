import { Suspense } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import OurService from "../Components/OurService";
import Statistics from "../Components/Statistics";
import RequestQuote from "../Components/RequestQuote";
import Clients from "../Components/Clients";
import PageLoader from "../Components/ui/PageLoader";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { useIslandQuery } from "../hooks/queries/useIslandQuery.js";
import { useNavigate } from "react-router-dom";

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
    </section>
  );
}
