import Image from "next/image";

export default function () {
  return (
    <div className="h-screen justify-center items-center text-center py-10">
      <h1 className="text-3xl text-black font-bold">Furniture Blog</h1>
      <div className="grid grid-cols-3 gap-10 px-32 py-20">
        <div>
          <Image
            src="/images/2faaaff7-b9ba-48ed-aa1f-4280f6ef8735.jpg"
            alt="img"
            width={300}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/a82ead74-67ce-486d-a212-39e90ee18d4d.jpg"
            alt="img"
            width={300}
            height={100}
          />
        </div>
        <div>
          <Image
            src="/images/e616209c-7dcb-4695-bd88-5dc559c33e5a.jpg"
            alt="img"
            width={230}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
