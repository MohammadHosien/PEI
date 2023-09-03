import CompInfo from "@/components/institueInfo/completeInfo";
const getInfoData = async (id: string) => {
  const req = await fetch(`http://localhost:3000/api/info/${id}`, {
    cache: "no-cache",
  });
  const res = await req.json();
  return res;
};

const Page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const infoData = await getInfoData(params.id);
  return (
    <div className="infoImage pb-48" dir="rtl">
      {" "}
      {infoData.map(
        (i: { text: string; title: string; id: string; img: string }) => (
          <CompInfo data={i} key={i.id} />
        )
      )}
    </div>
  );
};

export default Page;
