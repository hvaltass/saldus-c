
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white space-y-8">
          <h1 className="text-5xl font-bold mb-6">
            Sveicināti Saldus Fight Club
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mēs esam profesionāls cīņas klubs Saldū, kas specializējas dažādos cīņas sporta veidos. 
            Pievienojieties mums un attīstiet savas cīņas prasmes pieredzējušu treneru vadībā.
          </p>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
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
