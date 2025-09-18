import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Calendar, Youtube } from "lucide-react";

const sermonsData = [
  {
    title: "A Essência do Amor",
    preacher: "Pr. João Silva",
    date: "14 de Julho, 2024",
    videoUrl: "#"
  },
  {
    title: "Vivendo pela Fé",
    preacher: "Pr. João Silva",
    date: "07 de Julho, 2024",
    videoUrl: "#"
  },
  {
    title: "O Poder da Oração",
    preacher: "Pra. Maria Oliveira",
    date: "30 de Junho, 2024",
    videoUrl: "#"
  },
];

const Sermons = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Sermões e Mensagens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sermonsData.map((sermon, index) => (
          <Card key={index} className="flex flex-col transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle>{sermon.title}</CardTitle>
              <CardDescription>Uma mensagem para edificar sua vida.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                <User className="w-4 h-4" />
                <span>{sermon.preacher}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>{sermon.date}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 mr-2" />
                  Assistir Agora
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sermons;