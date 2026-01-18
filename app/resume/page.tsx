import { Download, Mail, Linkedin, Github } from 'lucide-react';

export default function Resume() {
  return (
    <div className="space-y-12 font-serif text-black dark:text-gray-100">
      
      {/* HEADER */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 dark:border-gray-800 pb-8 gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Dhruv Singh</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 italic">
            Data Science Student & Researcher
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-sans pt-2">
            <a href="mailto:singh.dhruv9097@gmail.com" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
                <Mail size={14} /> singh.dhruv9097@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/dhruv-singh-9551b1286/" target="_blank" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
                <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://github.com/dhruv9097" target="_blank" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
                <Github size={14} /> GitHub
            </a>
          </div>
        </div>
        
        <a 
          href="/dhruv_resume.pdf" // Make sure to name your file exactly this in the public folder
          target="_blank"
          className="flex items-center gap-2 text-sm bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity font-sans font-medium"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </a>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="font-bold text-xl mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
          Education
        </h2>
        
        <div className="space-y-10 border-l border-gray-200 dark:border-gray-800 ml-1 pl-8 relative">
          
          <ResumeItem 
            role="B.Sc. (Hons.) in Data Science"
            company="Tribhuvan College, Nalanda University Centre"
            location="Neemrana, Rajasthan"
            period="2023 – Present"
            description="Currently in 4th Semester with SGPA 8.4. Coursework includes Machine Learning, Data Visualization, SQL, and Python Programming."
          />

          <ResumeItem 
            role="Senior Secondary (Class XII)"
            company="Symbiosis Public School"
            location="Dhanbad, Jharkhand"
            period="2021 – 2023"
            description="Completed PCM with Informatics Practices. Secured 74%."
          />
          
        </div>
      </section>

      {/* EXPERIENCE & RESEARCH */}
      <section>
        <h2 className="font-bold text-xl mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
          Experience & Research
        </h2>
        
        <div className="space-y-10 border-l border-gray-200 dark:border-gray-800 ml-1 pl-8 relative">
          
          <ResumeItem 
            role="Paper Presentation: Renewable Energy"
            company="Subharti University"
            location="Remote / Hybrid"
            period="2024"
            description="Authored and presented a research paper titled 'A Modern Way to Generate Electricity: Floating Solar Farms'. Analyzed efficiency metrics and environmental impact compared to land-based systems."
          />

          <ResumeItem 
            role="Python Hackathon Participant"
            company="Codtech IT Solutions"
            location="Remote"
            period="2024"
            description="Competed in a rigorous hackathon focused on algorithmic efficiency. Developed scripts to solve data processing challenges within strict time limits."
          />

        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="font-bold text-xl mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
          Projects
        </h2>
        
        <div className="space-y-10 border-l border-gray-200 dark:border-gray-800 ml-1 pl-8 relative">
          
          <ResumeItem 
            role="Physio-Detection System: Virtual Paint"
            company="Python, OpenCV, MediaPipe"
            location="" // Empty if not needed
            period="2024"
            description="Developed a computer vision application allowing users to draw on-screen using hand gestures without physical contact. Optimized gesture recognition algorithms to reduce latency."
          />

          <ResumeItem 
            role="Academic Case Studies"
            company="Research & Data Analysis"
            location=""
            period="2023"
            description="Analyzed Microsoft Farmbeats (IoT/AI in precision agriculture) and 'Waste to Wealth' bioplastic production methodologies."
          />

        </div>
      </section>

      {/* LEADERSHIP */}
      <section>
        <h2 className="font-bold text-xl mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
          Leadership
        </h2>
         <div className="space-y-10 border-l border-gray-200 dark:border-gray-800 ml-1 pl-8 relative">
          <ResumeItem 
            role="Event Organizer"
            company="Tribhuvan College"
            location="Neemrana"
            period="2023"
            description="Coordinated the 'Principal's Meet' summit discussing Climate & Environment. Managed logistics for inter-school debate competitions."
          />
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section>
         <h2 className="font-bold text-xl mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 font-sans text-sm text-gray-600 dark:text-gray-400">
            <SkillCategory title="Languages" skills={['Python (Intermediate)', 'C++ (Basic)', 'SQL (Basic)']} />
            <SkillCategory title="Libraries & Tools" skills={['OpenCV & MediaPipe', 'Pandas & NumPy', 'QGIS', 'Git / GitHub']} />
            <SkillCategory title="Domains" skills={['Data Analysis', 'Computer Vision', 'Machine Learning', 'Data Visualization']} />
        </div>
      </section>

    </div>
  );
}

// --- Helper Components ---

function ResumeItem({ role, company, location, period, description }: { role: string, company: string, location: string, period: string, description: string }) {
  return (
    <div className="relative group">
      {/* The Dot on the timeline */}
      <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-black bg-gray-400 dark:bg-gray-600 group-hover:bg-black dark:group-hover:bg-white transition-colors"></div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
        <h3 className="font-bold text-lg text-black dark:text-white">{role}</h3>
        <span className="text-sm text-gray-500 font-sans tabular-nums shrink-0">{period}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500 italic mb-3">
        <span>{company}</span>
        {location && (
            <>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{location}</span>
            </>
        )}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-sans">
        {description}
      </p>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
    return (
        <div>
            <h3 className="font-bold text-black dark:text-white mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">{title}</h3>
            <ul className="space-y-2">
                {skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}