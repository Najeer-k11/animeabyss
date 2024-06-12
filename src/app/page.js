import Discover from "@/components/Discover";
import HeaderText from "@/components/HeaderText";
import Trending from "@/components/Trending";



export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col pb-12 lg:pb-4">
      <HeaderText />
      <Discover type={'anime'} />
      <Trending type={'anime'} />
    </main>
  );
}
