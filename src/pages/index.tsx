import Image from "next/image";
import logo from "../assets/logo.png";

function App() {
  return (
    <div className="h-screen w-screen justify-center items-center flex flex-col gap-20 bg-gradient-to-r from-purple-500 to-pink-600">
      <Image width={110} height={160} src={logo} alt="Next logo"></Image>
      <p className="text-2xl font-bold text-white">
        Welcome to Cordhook, coming soon.
      </p>
    </div>
  );
}

export default App;
