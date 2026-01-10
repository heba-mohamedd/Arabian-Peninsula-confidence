import Hero from "../Components/Hero";
import About from "../Components/About";
import OurServise from "../Components/OurServise";
import Statistics from "../Components/Statistics";
import RequestQuote from "../Components/RequestQuote";
import Clients from "../Components/Clients";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <OurServise />
      <Statistics />
      <RequestQuote
        title="تقديم طلب عرض سعر"
        description={`من خلال نموذج طلب عرض السعر، يمكنكم مشاركة متطلباتكم الفنية والتشغيلية
        \n ليقوم فريقنا بدراستها وإعداد عرض سعر متكامل`}
        buttonText="طلب عرض السعر"
        buttonIcon={<MdOutlinePhoneInTalk size={20} />}
      />
      <Clients />
    </div>
  );
}
