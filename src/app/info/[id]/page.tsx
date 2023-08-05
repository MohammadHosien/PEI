const getInfoData = async () => {
  const req = await fetch("http://localhost:3000/api/info", {
    cache: "no-cache",
  });
  const res = await req.json();
  return res;
};

const Page = async (params: { params: { id: string } }) => {
  const infoData = await getInfoData();
  console.log(infoData);
  return (
    <>
      {infoData.map((i:{text:string,title:string}) => (
        <>
          <h1 className="text-5xl mt-20">{i.title}</h1>
          <p className="mt-10">{i.text}</p>
        </>
      ))}
    </>
  );
};

export default Page;
