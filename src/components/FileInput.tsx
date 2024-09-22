
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContentFile } from "@/lib/store"
export function InputFile() {
  const { setContent } = useContentFile()
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = function(e) {
      const content = e.target?.result as string
      setContent(content)
    }
    reader.readAsText(file)
  }
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file">.htm file</Label>
      <Input id="file" type="file" onChange={handleFileChange} />
    </div>
  )
}
