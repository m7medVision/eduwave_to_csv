import { Button } from "./components/ui/button";
import { InputFile } from "./components/FileInput";

export default function App() {
  function convertToCsv() {
    console.log('convertToCsv');
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-4">
      <section className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-3xl font-semibold">Convert eduwave timetable to csv</h1>
        <p className="text-sm font-medium">convert eduwave timetable to csv that can be imported to google calendar</p>
      </section>
      <InputFile />
      <Button className="" onClick={convertToCsv}>Convert</Button>
    </div>
  );
}
