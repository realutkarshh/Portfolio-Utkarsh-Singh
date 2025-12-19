"use client";

export default function AboutSection() {
  const skills = [
    "React",
    "Express",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "JavaScript",
    "Github",
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-normal text-gray-900 tracking-tight">
            Who am I ?
          </h2>
          {/* <div className="w-12 h-px bg-gray-300 mx-auto mt-8"></div> */}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl font-light text-gray-900 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of
                experience creating digital solutions that bridge the gap
                between design and functionality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                My journey began with a curiosity for how things work, which 
                evolved into a love for building them. I specialize in modern 
                web technologies and combine technical expertise with design 
                sensibility.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-8">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-center py-4 px-3 bg-gray-50 hover:bg-gray-100 
                             rounded-xl transition-all duration-300 ease-out
                             hover:scale-105 hover:shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-full">
                <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 
                               rounded-2xl overflow-hidden shadow-xl 
                               hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src="/black-and-white-artistic-developer-workspace-with-.png"
                    alt="Developer workspace"
                    className="w-full h-full object-cover hover:scale-105 
                             transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Subtle accent element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 
                            bg-blue-500 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
