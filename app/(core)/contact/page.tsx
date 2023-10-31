import ContactMeView from "./contact";
import TopNavView from "@/app/components/topNav";

export default function ContactPage() {
  return (
    <div>
      <TopNavView />
      <div className="p-28">
        <ContactMeView />
      </div>
    </div>
  );
}
