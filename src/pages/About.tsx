import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre a Comunidade Kerigma</h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        Somos uma comunidade de fé dedicada a proclamar o evangelho, servir ao próximo e crescer juntos no conhecimento e na graça de nosso Senhor Jesus Cristo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="w-8 h-8 text-primary" />
            <CardTitle>Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Levar a mensagem transformadora de Jesus a todas as pessoas, fazendo discípulos e promovendo o Reino de Deus em nossa cidade e no mundo.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Eye className="w-8 h-8 text-primary" />
            <CardTitle>Nossa Visão</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ser uma igreja relevante, acolhedora e cheia do Espírito Santo, que impacta a sociedade com o amor e o poder de Deus.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Users className="w-8 h-8 text-primary" />
            <CardTitle>Nossos Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Adoração a Deus</li>
              <li>Comunhão entre irmãos</li>
              <li>Serviço ao próximo</li>
              <li>Estudo da Palavra</li>
              <li>Evangelismo</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;