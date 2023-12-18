import Content from "./_components/content";

export const metadata = {
  title: "Dashboard | Member",
  description: "Create business website with Onlenkan.com for your business",
};

export default function dashboard() {
  return (
    <div className="p-5 text-center">
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
