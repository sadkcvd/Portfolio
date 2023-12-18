import Hero from "./_Components/Hero/Hero";
import Section from "./_Components/Section/Section";


export default function Home() {
  return (
    <div className="flex flex-col items-center h-full justify-between">
      <Hero />
      <Section />
    </div>
  )
}
