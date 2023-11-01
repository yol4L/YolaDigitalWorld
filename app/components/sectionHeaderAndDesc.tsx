// return (
//  <S name={Section_Header_And_Desc_Items[index].name} ... />
// )
// function S({ name, header, desc } : { name: string; header: string; desc: string}) {}
// pure component, pure function, 幂等

export default function SectionHeaderAndDesc({
  name,
  headerText,
  description,
}: {
  name: string;
  headerText: string;
  description: string;
}) {
  return (
    <div className="mt-28 mb-6 flex flex-col gap-6">
      <h2 className="text-neutral-400 tracking-widest">{name}</h2>
      <h1 className="font-serif font-medium text-xl text-neutral-800 tracking-widest">
        {headerText}
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-neutral-800">{description}</p>
        <p className="text-neutral-800">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div>{}</div>
    </div>
  );
}
