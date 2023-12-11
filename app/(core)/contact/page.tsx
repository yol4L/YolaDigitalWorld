import PageTagView from "@/app/components/Tags/pageTag";
import TopNavView from "@/app/components/Tabs/topNav";
import ContactMeView from "./contact";
import FooterView from "@/app/components/footer";

export default function ContactPage() {
  return (
    <div>
      <TopNavView />
      <div className="px-5 sm:px-20 md:px-36 pt-28 pb-12 sm:pb-20">
        <PageTagView tagName={"Contact"} />
        <div className="my-6 flex flex-col gap-4">
          <h1 className="font-serif font-bold text-3xl tracking-widest text-ocean-500">
            DROP ME A LINE
          </h1>
          <p className="">
            Connect with me and start a conversation to say hello or talk about
            opportunities.
          </p>
        </div>
        <div className="my-6">
          <ContactMeView inView={false} scrollingUp={false} />
        </div>
      </div>
      <FooterView />
    </div>
  );
}
