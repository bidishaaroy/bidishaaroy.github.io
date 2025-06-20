const About = () => {
  return <section id="about" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-gray-100">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-zinc-50">
                I'm a Computing Science student with experience in Python, C++, HTML, CSS and JavaScript.
                In my free time, I like to read, watch football and anime.
              </p>
            </div>
            
            <div className="relative">
              <img src="images/56d5013a-f2de-4452-8f14-d02d5f3d6145.png" alt="Aurora" className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;