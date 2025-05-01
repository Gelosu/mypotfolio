export default function Programs() {
    const skills = [
      {
        name: "Python",
        logo: "/logos/python.jpeg"
       
      },
      {
        name: "JavaScript",
        logo: "/logos/javascript.png",
       
      },
      {
        name: "HTML",
        logo: "/logos/html.png",
        
      },
      {
        name: "CSS",
        logo: "/logos/css.png",
       
      },
      {
        name: "MySQL",
        logo: "/logos/mysql.png",
        
      },
      {
        name: "PHP",
        logo: "/logos/php.jpeg",
       
      },
      {
        name: "C#",
        logo: "/logos/csharp.png",
       
      },
      {
        name: "Pygame",
        logo: "/logos/pygame.png",
       
      },
     
    ];
  
    return (
      <section id="skills" className="bg-gray-950 text-white py-16">
        <h2 className="text-4xl text-center text-purple-300 mb-8">My Skills</h2>
        <p className="text-center text-gray-400 mb-10 text-lg">
          These are the programming languages and tools I am proficient in.
        </p>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 px-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-200 mb-2">
                {skill.name}
              </h3>
              
            </div>
          ))}
        </div>
      </section>
    );
  }
  