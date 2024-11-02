import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen custom-bg flex items-center justify-center text-center text-white">
    <div className="z-10">
      <h1 className="text-5xl font-bold mb-4">Find And Rate Your Favorite Projects.</h1>
      <p className="text-lg mb-6">Post your projects, gain likes, and engage with comments from developers like you.</p>
      <button className="bg-white text-black py-2 px-4 rounded-full">Explore Projects</button>
    </div>
  </div>
  
  );
}
