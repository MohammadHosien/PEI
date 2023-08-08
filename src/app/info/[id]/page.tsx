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
    <div dir="rtl">
      <svg
        style={{ position: "absolute", left: "0", zIndex: -4 }}
        id="visual"
        viewBox="0 0 1000 1700"
        width="1000"
        height="1700"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M301 0L294.3 42.8C287.7 85.7 274.3 171.3 277.3 257C280.3 342.7 299.7 428.3 324 514C348.3 599.7 377.7 685.3 384.3 771.2C391 857 375 943 346.8 1028.8C318.7 1114.7 278.3 1200.3 252.8 1286C227.3 1371.7 216.7 1457.3 242 1543C267.3 1628.7 328.7 1714.3 359.3 1757.2L390 1800L0 1800L0 1757.2C0 1714.3 0 1628.7 0 1543C0 1457.3 0 1371.7 0 1286C0 1200.3 0 1114.7 0 1028.8C0 943 0 857 0 771.2C0 685.3 0 599.7 0 514C0 428.3 0 342.7 0 257C0 171.3 0 85.7 0 42.8L0 0Z"
          fill="#D91C54"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
      <svg
        style={{ position: "absolute", left: "0", zIndex: -6 }}
        id="visual"
        viewBox="0 0 900 1700"
        width="900"
        height="1700"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M433 0L433 31.5C433 63 433 126 407 189C381 252 329 315 303.8 378C278.7 441 280.3 504 287.5 567C294.7 630 307.3 693 331.7 755.8C356 818.7 392 881.3 395.2 944.2C398.3 1007 368.7 1070 338 1133C307.3 1196 275.7 1259 258.7 1322C241.7 1385 239.3 1448 240.3 1511C241.3 1574 245.7 1637 247.8 1668.5L250 1700L0 1700L0 1668.5C0 1637 0 1574 0 1511C0 1448 0 1385 0 1322C0 1259 0 1196 0 1133C0 1070 0 1007 0 944.2C0 881.3 0 818.7 0 755.8C0 693 0 630 0 567C0 504 0 441 0 378C0 315 0 252 0 189C0 126 0 63 0 31.5L0 0Z"
          fill="#0066FF"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
      <svg
        style={{ position: "absolute", left: "0", zIndex: -5 }}
        id="visual"
        viewBox="0 0 900 1700"
        width="900"
        height="1700"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M402 0L395.8 35.5C389.7 71 377.3 142 382.2 212.8C387 283.7 409 354.3 424.5 425.2C440 496 449 567 433.7 637.8C418.3 708.7 378.7 779.3 366.2 850.2C353.7 921 368.3 992 390.2 1062.8C412 1133.7 441 1204.3 455.3 1275.2C469.7 1346 469.3 1417 455.3 1487.8C441.3 1558.7 413.7 1629.3 399.8 1664.7L386 1700L0 1700L0 1664.7C0 1629.3 0 1558.7 0 1487.8C0 1417 0 1346 0 1275.2C0 1204.3 0 1133.7 0 1062.8C0 992 0 921 0 850.2C0 779.3 0 708.7 0 637.8C0 567 0 496 0 425.2C0 354.3 0 283.7 0 212.8C0 142 0 71 0 35.5L0 0Z"
          fill="#60D2AE"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
      {infoData.map(
        (i: { text: string; title: string; id: string; img: string }) => (
          <CompInfo data={i} key={i.id} />
        )
      )}
    </div>
  );
};

export default Page;
