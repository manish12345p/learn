import About from "./component/About";
import Header from "./component/Header";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Header/>
      <About/>
    </main>
  );
}
