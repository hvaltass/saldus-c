
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/ef8d441e-ea7b-4818-aa27-7b4316119ac7.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center space-y-12 max-w-4xl mx-auto">
            {/* Logo */}
            <img 
              src="/lovable-uploads/21416c5d-8aaa-454c-a3f6-d56ac47b0800.png" 
              alt="Saldus Fight Club Logo" 
              className="w-96 h-auto"
            />
            
            {/* Text Sections */}
            <div className="grid gap-8 w-full mt-12">
              <div className="bg-black/70 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl text-gold font-bold mb-4">Par mums</h2>
                <p className="text-white text-lg">
                  Mēs esam profesionāls cīņas klubs Saldū, kas specializējas dažādos cīņas sporta veidos. 
                  Mūsu treneri ir augsti kvalificēti profesionāļi ar gadu pieredzi.
                </p>
              </div>
              
              <div className="bg-black/70 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl text-[#C5A572] font-bold mb-4">Mūsu Filozofija</h2>
                <p className="text-white text-lg">
                  "Sit stiprāk. Dzīvo spēcīgāk" - šis ir ne tikai mūsu sauklis, bet arī dzīves filozofija. 
                  Mēs ticam, ka caur cīņas sportu cilvēks var attīstīt ne tikai fizisko spēku, bet arī garīgo izturību.
                </p>
              </div>
              
              <div className="bg-black/70 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl text-[#C5A572] font-bold mb-4">Pievienojies mums</h2>
                <p className="text-white text-lg">
                  Nāc un kļūsti par daļu no mūsu komandas! Mēs piedāvājam treniņus gan iesācējiem, 
                  gan profesionāļiem. Katram sportistam individuāla pieeja un profesionāla atmosfēra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
