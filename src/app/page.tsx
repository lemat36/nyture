import Header from "@/components/Header";
import Last from "@/components/Last";
import ProductGrid from "@/components/Second";
import TrendingProducts from "@/components/Three";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>NYTURE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header />
      <main className="min-h-screen bg-gray-100">
        <ProductGrid />
      </main>

      <TrendingProducts />
      <Last />
    </div>
  );
}
