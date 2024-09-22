
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export function InputFile() {
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = function(e) {
      const content = e.target?.result as string
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
