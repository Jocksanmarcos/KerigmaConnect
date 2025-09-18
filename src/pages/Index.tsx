import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à Comunidade Kerigma</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Um lugar para pertencer, crer e crescer.</p>
          <Button asChild size="lg">
            <Link to="/sobre">
              Conheça-nos Melhor <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nossa Família</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Somos uma igreja que ama a Deus e as pessoas. Nosso desejo é ver vidas transformadas pelo poder do Evangelho.
          </p>
          <Button asChild variant="outline">
            <Link to="/sobre">Saiba Mais sobre Nossa Missão</Link>
          </Button>
        </div>
      </section>

      {/* Events & Sermons Preview */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Próximos Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Fique por dentro de nossa programação. Participe conosco!</p>
                <Button asChild>
                  <Link to="/eventos">Ver Agenda Completa</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Últimas Mensagens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Seja edificado com as últimas pregações. Ouça a Palavra de Deus.</p>
                <Button asChild>
                  <Link to="/sermoes">Assistir Sermões</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;