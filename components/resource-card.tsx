import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ResourceCardProps {
  title: string
  description: string
}

export function ResourceCard({ title, description }: ResourceCardProps) {
  return (
    <Card className="
      group relative overflow-hidden
      bg-[#0f1419]/80 backdrop-blur 
      supports-[backdrop-filter]:bg-[#0f1419]/60 
      border-2 border-[#1a2634] 
      hover:border-[#00FFA3]/50
      hover:bg-[#1a2634]/80
      transition-all duration-300 
      cursor-pointer 
      hover:scale-105
    ">
      <div className="
        absolute inset-0 -translate-x-full 
        bg-gradient-to-r from-transparent via-[#00FFA3]/10 to-transparent
        group-hover:translate-x-full transition-transform duration-700
      "></div>
      <CardHeader>
        <CardTitle className="text-foreground/90 group-hover:text-foreground transition-colors text-lg">
          {title}
        </CardTitle>
        <CardDescription className="opacity-75 group-hover:opacity-100 transition-opacity text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

