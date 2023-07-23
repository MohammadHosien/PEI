const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1 className='text-6xl mt-12'>{params.id}</h1>
    </>
  );
};

export default Page;
