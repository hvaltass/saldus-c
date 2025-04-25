
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Saldus Fight Club
          </h1>
          <h2 className="text-2xl text-gray-300 italic">
            Sit stiprak. Dzīvo spēcīgāk
          </h2>
          <p className="text-xl text-gray-300 mt-8">
            Mēs esam profesionāls cīņas klubs Saldū, kas specializējas dažādos cīņas sporta veidos. 
            Pievienojieties mums un attīstiet savas cīņas prasmes pieredzējušu treneru vadībā.
          </p>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-8 text-xl tracking-wider"
            onClick={() => window.location.href = "tel:+37120000000"}
          >
            Piesakies treniņam
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
