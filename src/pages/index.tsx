import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { getServerSideProps } from "@/components/GetServerSideProps";
import { Articles } from "@/types/Articles";
import SectionServiceCard from "@/components/SectionServiceCard";
import { SearchIcon } from "@/components/Icons/SearchIcon";


const inter = Inter({ subsets: ["latin"] });

export default function Home({ initialData }: { initialData: Articles }) {
  return (
    <div className="w-screen h-screen">
      {/* {initialData.map((data) => <SectionServiceCard key={data.id} image={data?.cover_image} text="bla" icon={<SearchIcon />} />)}
      <Footer /> */}
    </div>
  );
}

export { getServerSideProps }