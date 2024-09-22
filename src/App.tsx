import { Button } from "./components/ui/button";
import { InputFile } from "./components/FileInput";
import { useContentFile } from "./lib/store";

export default function App() {
  const { content } = useContentFile()
  function convertToCsv() {
    const trRegex = /<tr[^>]*class="StandardFontPlain"[^>]*>(.*?)<\/tr>/gms
    const matchs = content.matchAll(trRegex)
    let csv = "Subject,Start Date,Start Time,End Date,End Time,All Day Event,Description,Location,Private\n"
    for (const match of matchs) {
      const teacherRegex = /<br><\/td><td>(.*?)<\/td><td><\/td><td><\/td><td><\/td>/smg
      const teacher = [...match[1].matchAll(teacherRegex)]?.[0]?.[1]
      const titleRegex = /<span[^>]*title="Course Name"[^>]*>(.*?)<\/span/smg
      const courseName = [...match[1].matchAll(titleRegex)]?.[0]?.[1]
      const timeTableRegexUncleaned = /\((\d{2}\/\d{2}\/\d{4})\)[^>]*(\d{2}:\d{2}:\d{2})[^>]*-[^>]*(\d{2}:\d{2}:\d{2})(.*?)<br/smg
      const timeTableUncleaned = [...match[1].matchAll(timeTableRegexUncleaned)]
      let timeTable = []
      for (const time of timeTableUncleaned) {
        const date = time?.[1]
        const startTime = time?.[2]
        const endTime = time?.[3]
        const place = time?.[4]
        timeTable.push({ date, startTime, endTime, place })
      }
      for (const time of timeTable) {
        csv += `${time.place} ${courseName},${time.date},${time.startTime},${time.date},${time.endTime},false,teacher: ${teacher} courseName: ${courseName} place: ${time.place},${time.place},false\n`
      }
    }
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    window.open(url)
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
