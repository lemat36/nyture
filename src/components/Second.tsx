import Image from "next/image";
import React from "react";

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-32 py-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
        <div className="col-span-2 md:col-span-1 bg-second">
          <div className="p-4 border-2 grid-cols-2 grid">
            <div>
              <p className="text-gray-500">SUMMER TRENDS</p>
              <h2 className="text-xl font-semibold">Furniture made simple</h2>
              <button className="mt-4 px-4 py-2 border-4 border-gray-800">
                SHOP NOW
              </button>
            </div>
            <div>
              <Image
                src="/images/1aa8014d-7f34-48c3-b169-19e48cd0f7b1-removebg-preview.png"
                alt="img"
                width={200}
                height={200}
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-2 bg-second ">
          <div className="p-4 border-2 grid grid-cols-2">
            <div>
              <p className="text-gray-500">SPECIAL OFFERS</p>
              <h2 className="text-xl font-semibold">Get 50% offer</h2>
              <button className="mt-4 px-4 py-2 border-4 border-black">
                SHOP NOW
              </button>
            </div>
            <div>
              <Image
                src="/images/8d01e4cd-740f-42a3-8f64-f1799ab6bc46-removebg-preview.png"
                alt="Product"
                className=""
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 bg-second">
          <div className="p-4 border-2 grid-cols-2 grid">
            <div>
              <Image
                src="/images/a0239d01-e1d9-4bce-8884-4b8ec89f1928-removebg-preview.png"
                alt="img"
                width={200}
                height={200}
              ></Image>
            </div>
            <div>
              <p className="text-gray-500">SUMMER TRENDS</p>
              <h2 className="text-xl font-semibold">Furniture made simple</h2>
              <button className="mt-4 px-4 py-2 border-4 border-gray-800">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-second">
          <div className="p-4 border-2 flex flex-col">
            <p className="text-gray-500">SUMMER TRENDS</p>
            <h2 className="text-xl font-semibold">Furniture made simple</h2>
            <Image
              src="/images/1b511e9e-efbf-4e0c-b7c0-16364c9a20bf-removebg-preview.png"
              alt="Product"
              className=""
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="col-span-1 bg-second">
          <div className="p-4 border-2 flex flex-col">
            <p className="text-gray-500">SUMMER TRENDS</p>
            <h2 className="text-xl font-semibold">Furniture made simple</h2>
            <Image
              src="/images/cc99fd78-35de-4e46-9b8c-33cee5fc1a56-removebg-preview.png"
              alt="Product"
              className=""
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
