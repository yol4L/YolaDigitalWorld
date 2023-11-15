import PageTagView from "@/app/components/Tags/pageTag";
import ContactMeView from "./contact";
import TopNavView from "@/app/components/topNav";

export default function ContactPage() {
  return (
    <div>
      <TopNavView />
      <div className="px-36 py-28">
        <PageTagView tagName={"Contact"} />
        <div className="my-6 flex flex-col gap-4">
          <h1 className="font-serif font-bold text-3xl tracking-widest text-ocean-500">
            DROP ME A LINE
          </h1>
          <p className="text-neutral-800">
            To say hello or talk about opportunities.
          </p>
        </div>
        <div className="my-6">
          <ContactMeView inView={false} />
        </div>
      </div>
    </div>
  );
}
