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
      bg-background/95 backdrop-blur 
      supports-[backdrop-filter]:bg-background/60 
      hover:bg-accent/50 transition-all duration-300 
      cursor-pointer border-2 border-border/40 
      hover:border-teal-500/50 group relative overflow-hidden 
      hover:scale-105
    ">
      <div className="
        absolute inset-0 -translate-x-full 
        bg-gradient-to-r from-transparent via-teal-500/10 to-transparent
        group-hover:translate-x-full transition-transform duration-700
      "></div>
      <CardHeader>
        <CardTitle className="text-foreground opacity-90 group-hover:opacity-100 transition-opacity text-lg">
          {title}
        </CardTitle>
        <CardDescription className="opacity-75 group-hover:opacity-100 transition-opacity text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

