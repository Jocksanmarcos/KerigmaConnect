import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nossas Informações</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-gray-600 dark:text-gray-300">Rua da Fé, 123 - Bairro Esperança<br />Cidade, Estado - CEP 12345-678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-gray-600 dark:text-gray-300">(11) 98765-4321</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">contato@kerigma.com.br</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Envie-nos uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Escreva sua mensagem aqui..." />
                </div>
                <Button type="submit" className="w-full">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;