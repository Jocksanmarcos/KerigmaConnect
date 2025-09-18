import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const eventsData = [
  {
    title: "Culto de Celebração",
    date: "Todos os Domingos",
    time: "19:00",
    location: "Templo Principal",
    description: "Um tempo de louvor, adoração e edificação através da Palavra de Deus."
  },
  {
    title: "Estudo Bíblico Semanal",
    date: "Todas as Quartas-feiras",
    time: "20:00",
    location: "Salão Anexo",
    description: "Aprofunde seu conhecimento nas Escrituras em um ambiente de aprendizado e comunhão."
  },
  {
    title: "Encontro de Jovens",
    date: "Todos os Sábados",
    time: "19:30",
    location: "Espaço Jovem",
    description: "Louvor, palavra e muita comunhão para a juventude."
  },
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Nossos Eventos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event, index) => (
          <Card key={index} className="flex flex-col transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;