import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Linkedin, Github, Mail, Phone, User, BookOpenText, 
  BriefcaseBusiness, Code2, Contact2, Download, MapPin, Calendar,
  Award, TrendingUp, Database, Brain, BarChart3, Server, Cloud,
  GitBranch, ExternalLink, ChevronRight, CheckCircle, GraduationCap,
  Building, FileText, Link
} from 'lucide-react';

// Simple PDF download function
const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Resume_krishna/krishna-aryal-resume.pdf'; // Updated path
  link.download = 'krishna-aryal-resume.pdf';
  link.click();
};

// View resume in new tab
const viewResumeInNewTab = () => {
  window.open('/Resume_krishna/krishna-aryal-resume.pdf', '_blank'); // Updated path
};

export default function KrishnaResume() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'projects', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', icon: <User className="w-4 h-4" />, label: 'About' },
    { id: 'experience', icon: <BriefcaseBusiness className="w-4 h-4" />, label: 'Experience' },
    { id: 'skills', icon: <Code2 className="w-4 h-4" />, label: 'Skills' },
    { id: 'education', icon: <GraduationCap className="w-4 h-4" />, label: 'Education' },
    { id: 'projects', icon: <FileText className="w-4 h-4" />, label: 'Projects' },
    { id: 'publications', icon: <Award className="w-4 h-4" />, label: 'Publications' },
    { id: 'contact', icon: <Contact2 className="w-4 h-4" />, label: 'Contact' }
  ];

  const skills = {
    "Programming & Data Analysis": [
      { name: "Python (Pandas, NumPy, scikit-learn)", level: 95, icon: <Code2 className="w-5 h-5" /> },
      { name: "SQL (joins, CTEs, window functions)", level: 90, icon: <Database className="w-5 h-5" /> },
      { name: "R Programming", level: 85, icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Statistical Analysis", level: 95, icon: <TrendingUp className="w-5 h-5" /> }
    ],
    "Machine Learning & Analytics": [
      { name: "Regression & Classification", level: 90, icon: <Brain className="w-5 h-5" /> },
      { name: "Model Evaluation (CV, metrics)", level: 90, icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Feature Engineering", level: 85, icon: <Code2 className="w-5 h-5" /> },
      { name: "Data Cleaning & EDA", level: 95, icon: <Database className="w-5 h-5" /> }
    ],
    "Visualization & Tools": [
      { name: "Matplotlib, Seaborn", level: 85, icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Power BI, Tableau", level: 80, icon: <TrendingUp className="w-5 h-5" /> },
      { name: "Jupyter, Git/GitHub", level: 90, icon: <GitBranch className="w-5 h-5" /> },
      { name: "Linux, Excel, LaTeX", level: 85, icon: <Server className="w-5 h-5" /> }
    ]
  };

  const experiences = [
    {
      title: "Graduate Researcher (Computational Physics)",
      company: "Kent State University",
      location: "Kent, OH",
      period: "2019 - 2024",
      type: "Research Position",
      achievements: [
        "Applied statistical modeling and numerical simulation to dense-matter problems with 95%+ accuracy",
        "Authored 9 peer-reviewed publications in high-impact journals (Physical Review D, Universe)",
        "Wrote data-processing scripts and analysis notebooks for terabyte-scale datasets",
        "Presented findings with clear figures and tables at 15+ international conferences",
        "Collaborated with cross-institutional teams on computational physics research",
        "Documented methods and results for reproducibility using version control systems"
      ],
      technologies: ["Python", "Fortran", "Statistical Analysis", "Machine Learning", "Data Visualization", "Git"]
    },
    {
      title: "Research & Teaching Assistant",
      company: "University of Massachusetts Boston",
      location: "Boston, MA",
      period: "2013 - 2015",
      type: "Research & Teaching",
      achievements: [
        "Designed and simulated optical waveguide models using advanced computational methods",
        "Assisted course labs and grading with clear documentation and feedback systems",
        "Supported students with data analysis and report writing, improving result interpretation",
        "Developed automated data collection systems for experimental research"
      ],
      technologies: ["MATLAB", "Lumerical", "Optical Design", "Data Analysis", "Teaching"]
    }
  ];

  const projects = [
    {
      title: "Comprehensive Cancer Patient Analysis",
      description: "Cleaned and merged multi-year cancer datasets with validation for consistency. Built feature pipelines with encoding, imputation, and scaling. Compared baseline classifiers using cross-validation and visualized incidence trends in reproducible notebooks.",
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Data Visualization"],
      highlights: ["Multi-year datasets", "Feature engineering", "Cross-validation", "Reproducible analysis"],
      link: "https://github.com/kraryal/Comprehensive-Cancer-Patient-Analysis"
    },
    {
      title: "Indian Bank SQL Database Design & Analytics",
      description: "Modeled Customers, Accounts, Transactions, and Branches with normalized tables and foreign keys. Wrote views and stored procedures with indexing and query tuning. Prototyped CSV-to-SQL ETL and created exploratory dashboards.",
      technologies: ["SQL Server", "T-SQL", "ERD", "ETL", "Power BI"],
      highlights: ["Normalized design", "Query optimization", "ETL processes", "Business dashboards"],
      link: "https://github.com/kraryal/Indian-Bank-Case-Study"
    },
    {
      title: "Grid Disruption Analysis",
      description: "Ingested and cleaned power-outage datasets with engineered time, weather, and region features. Analyzed outage patterns and produced visual reports for affected regions and temporal clusters.",
      technologies: ["Python", "Pandas", "Time Series Analysis", "Geo Visualization"],
      highlights: ["Pattern analysis", "Temporal clustering", "Geospatial visualization", "Infrastructure insights"],
      link: "https://github.com/kraryal/Grid_Disruption_Analysis"
    },
    {
      title: "Neutron Star Phase Transition Modeling (PhD Research)",
      description: "Developed advanced computational models for ultra-dense nuclear matter using statistical methods and machine learning. Published findings in 9 peer-reviewed papers with international recognition.",
      technologies: ["Python", "Fortran", "Statistical Modeling", "Computational Physics"],
      highlights: ["9 published papers", "Physical Review D", "International recognition", "Breakthrough research"],
      link: "https://scholar.google.com/citations?user=fsWWqa0AAAAJ"
    }
  ];

  const publications = [
    {
      year: "2020",
      title: "High-energy phase diagrams with charge and isospin axes under heavy-ion collision and stellar conditions",
      journal: "Physical Review D 102(7), 076016",
      type: "High Impact"
    },
    {
      year: "2021", 
      title: "The effect of charge, isospin, and strangeness in the QCD phase diagram critical end point",
      journal: "Universe 7(11), 454",
      type: "Peer Reviewed"
    },
    {
      year: "2024",
      title: "Advanced computational methods in nuclear astrophysics",
      journal: "Physics Letters B",
      type: "Recent"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Fixed Header */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <div className="relative">
          <button 
            onClick={() => setShowDownloadOptions(!showDownloadOptions)}
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            title="Download Options"
          >
            <Download className="h-5 w-5" />
            <ChevronRight className={`h-4 w-4 transition-transform ${showDownloadOptions ? 'rotate-90' : ''}`} />
          </button>
          
          {showDownloadOptions && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
              <button
                onClick={() => {
                  viewResumeInNewTab();
                  setShowDownloadOptions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">View Resume PDF</div>
                  <div className="text-sm text-gray-500">Opens in new tab</div>
                </div>
              </button>
              
              <button
                onClick={() => {
                  downloadResume();
                  setShowDownloadOptions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                <Download className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium">Download Resume</div>
                  <div className="text-sm text-gray-500">PDF format</div>
                </div>
              </button>
              
              <button
                onClick={() => {
                  window.open('https://scholar.google.com/citations?user=fsWWqa0AAAAJ&hl=en&oi=ao', '_blank');
                  setShowDownloadOptions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium">Google Scholar</div>
                  <div className="text-sm text-gray-500">9 publications</div>
                </div>
              </button>
              
              <button
                onClick={() => {
                  navigator.clipboard.writeText('aryalkris9@gmail.com');
                  setShowDownloadOptions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-medium">Copy Email</div>
                  <div className="text-sm text-gray-500">Quick contact</div>
                </div>
              </button>
            </div>
          )}
        </div>
        
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-sm z-40 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex justify-center space-x-8 py-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          {sections.map((section) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`} 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                    : 'hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {section.icon} {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-20 px-4 max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                KRISHNA ARYAL
              </h1>
              <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
                Data Scientist & Analyst with 9 Publications
              </div>
            </div>

            {/* About Me Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Professional Summary
                <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
              </h2>
              
              <div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="/Resume_krishna/profile-new.jpg"  // Updated path
                      alt="Krishna Aryal" 
                      className="w-64 h-64 rounded-full object-cover object-center border-4 border-blue-600 dark:border-blue-400 shadow-2xl"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                      <span className="text-white text-xl">🟢</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Status */}
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <span className="text-green-700 dark:text-green-300 font-semibold">
                        🟢 US Permanent Resident • Available Immediately • Open to Relocation
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Data Scientist & Analyst with PhD in Computational Physics and 9 peer-reviewed publications.</strong> Skilled in Python, SQL, R, and BI tools, with proven success applying machine learning and statistical modeling to healthcare, finance, and infrastructure domains.
                  </p>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Proven track record of breakthrough research with <strong>9 published papers</strong> in high-impact journals including Physical Review D. Expertise in advanced analytics, machine learning model development, and transforming complex data into actionable business insights.
                  </p>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Currently pursuing <strong>MS Analytics at Georgia Tech</strong> while seeking data science leadership opportunities to leverage extensive research background and proven analytical capabilities in solving complex business challenges.
                  </p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-6 pt-6 text-blue-600 dark:text-blue-400">
                    <a href="mailto:aryalkris9@gmail.com" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                      <Mail className="w-5 h-5" />aryalkris9@gmail.com
                    </a>
                    <a href="tel:+12348175476" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                      <Phone className="w-5 h-5" />(234) 817-5476
                    </a>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />Kent, OH 44240
                    </span>
                    <a href="https://linkedin.com/in/krishna-aryal1" target="_blank" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />LinkedIn
                    </a>
                    <a href="https://github.com/kraryal" target="_blank" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                      <Github className="w-5 h-5" />GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Technology badges */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center gap-3">
                  {["Python", "SQL", "R", "Machine Learning", "9 Publications", "PhD Physics", "Statistical Analysis", "Power BI", "Tableau", "Git/GitHub"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  {category}
                </h3>
                <div className="space-y-6">
                  {skillList.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-blue-600 dark:text-blue-400">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    MS in Analytics
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    Georgia Institute of Technology
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">Expected 2025 • Atlanta, GA</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Machine Learning, Statistical Modeling, Business Intelligence
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    PhD in Physics (Computational)
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    Kent State University
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">2024 • Kent, OH</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Computational Physics, Statistical Modeling, 9 Publications
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <BookOpenText className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    MS in Applied Physics
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                    University of Massachusetts Boston
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">2015 • Boston, MA</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                  <BookOpenText className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    MS in Physics
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold mb-2">
                    Tribhuvan University
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">2012 • Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Key Data Science Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Selected Publications
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Research Impact & Publications</h3>
                <p className="text-gray-600 dark:text-gray-300">9 peer-reviewed papers in high-impact journals</p>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              {publications.map((pub, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                      {pub.year}
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded text-sm">
                      {pub.type}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {pub.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                    {pub.journal}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://scholar.google.com/citations?user=fsWWqa0AAAAJ&hl=en&oi=ao" 
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View All Publications
              </a>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
                <BookOpenText className="w-4 h-4" />
                9 Publications
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
                <TrendingUp className="w-4 h-4" />
                50+ Citations
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to leverage advanced analytics and research expertise for your data science needs? Let's discuss opportunities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                        <a href="mailto:aryalkris9@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                          aryalkris9@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                        <a href="tel:+12348175476" className="text-blue-600 dark:text-blue-400 hover:underline">
                          (234) 817-5476
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                        <span className="text-gray-600 dark:text-gray-300">1800 Rhodes Rd, Apt 520, Kent, OH 44240</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                        <a href="https://linkedin.com/in/krishna-aryal1" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                          linkedin.com/in/krishna-aryal
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                        <a href="https://github.com/kraryal" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                          github.com/kraryal
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Availability & Status</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-700 dark:text-green-300">US Permanent Resident</p>
                      <p className="text-sm text-green-600 dark:text-green-400">Authorized to work in the United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-700 dark:text-blue-300">Available Immediately</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Ready to start full-time position</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-700 dark:text-purple-300">Open to Relocation</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">Willing to relocate for the right opportunity</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <strong>References available upon request.</strong> Open to discussing data science opportunities, 
                      freelance projects, or research collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Krishna Aryal. All rights reserved. | PhD Computational Physicist & Data Scientist
          </p>
        </div>
      </footer>
    </div>
  );
}