import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Linkedin, Github, Mail, Phone, User, BookOpenText, 
  BriefcaseBusiness, Code2, Contact2, Download, MapPin, Calendar,
  Award, TrendingUp, Database, Brain, BarChart3, Server, Cloud,
  GitBranch, ExternalLink, ChevronRight, CheckCircle, GraduationCap,
  Building, FileText
} from 'lucide-react';

// Resume window function
const openResumeInNewWindow = () => {
  const resumeWindow = window.open('', '_blank', 'width=900,height=1200,scrollbars=yes');
  
  resumeWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Krishna Aryal - Data Scientist Resume</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                background: #f8f9fa;
                padding: 20px;
            }
            
            .resume-container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
                border-radius: 8px;
                overflow: hidden;
                position: relative;
            }
            
            /* Action buttons - hide when printing */
            .action-buttons {
                position: fixed;
                top: 20px;
                right: 20px;
                display: flex;
                gap: 10px;
                z-index: 1000;
            }
            
            .action-btn {
                background: #2563eb;
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: bold;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: background 0.3s;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .action-btn:hover {
                background: #1d4ed8;
            }
            
            .download-btn {
                background: #10b981;
            }
            
            .download-btn:hover {
                background: #059669;
            }
            
            .header {
                background: linear-gradient(135deg, #2563eb, #7c3aed);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            
            .header h1 {
                font-size: 36px;
                margin-bottom: 10px;
                font-weight: bold;
            }
            
            .header .subtitle {
                font-size: 18px;
                opacity: 0.9;
                margin-bottom: 20px;
            }
            
            .contact-info {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 20px;
                font-size: 14px;
            }
            
            .contact-info span {
                background: rgba(255,255,255,0.2);
                padding: 5px 10px;
                border-radius: 15px;
            }
            
            .content {
                padding: 30px;
            }
            
            .section {
                margin-bottom: 30px;
            }
            
            .section-title {
                font-size: 20px;
                font-weight: bold;
                color: #2563eb;
                margin-bottom: 15px;
                padding-bottom: 5px;
                border-bottom: 2px solid #e5e7eb;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .summary {
                font-size: 16px;
                line-height: 1.8;
                color: #555;
                text-align: justify;
            }
            
            .skills-grid {
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap: 15px;
                margin-bottom: 15px;
            }
            
            .skill-category {
                font-weight: bold;
                color: #2563eb;
            }
            
            .skill-items {
                color: #666;
            }
            
            .experience-item {
                margin-bottom: 25px;
                border-left: 3px solid #2563eb;
                padding-left: 20px;
            }
            
            .job-title {
                font-size: 18px;
                font-weight: bold;
                color: #2563eb;
                margin-bottom: 5px;
            }
            
            .company-info {
                font-style: italic;
                color: #666;
                margin-bottom: 10px;
            }
            
            .achievements {
                list-style: none;
                padding: 0;
            }
            
            .achievements li {
                position: relative;
                padding-left: 20px;
                margin-bottom: 8px;
                color: #555;
            }
            
            .achievements li:before {
                content: "▸";
                position: absolute;
                left: 0;
                color: #2563eb;
                font-weight: bold;
            }
            
            .project-item {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
                border-left: 4px solid #2563eb;
            }
            
            .project-title {
                font-size: 16px;
                font-weight: bold;
                color: #2563eb;
                margin-bottom: 8px;
            }
            
            .project-tech {
                font-size: 12px;
                color: #7c3aed;
                font-style: italic;
                margin-bottom: 10px;
            }
            
            .project-desc {
                color: #555;
                line-height: 1.6;
            }
            
            .education-item {
                margin-bottom: 15px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .degree {
                font-weight: bold;
                color: #2563eb;
            }
            
            .university {
                color: #666;
                font-style: italic;
            }
            
            .publications {
                background: #f0f9ff;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #bfdbfe;
            }
            
            .publications ul {
                list-style: none;
                padding: 0;
            }
            
            .publications li {
                padding: 8px 0;
                border-bottom: 1px solid #e5e7eb;
                color: #555;
            }
            
            .publications li:last-child {
                border-bottom: none;
            }
            
            .status-badge {
                background: #10b981;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: bold;
                display: inline-block;
                margin: 20px 0;
            }
            
            /* Print styles */
/* Print styles */
@media print {
    body { 
        padding: 0; 
        background: white; 
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    .resume-container { 
        box-shadow: none; 
        border-radius: 0;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    .action-buttons {
        display: none !important;
    }
    .section {
        page-break-inside: avoid;
    }
    .header {
        background: #2563eb !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
        print-color-adjust: exact;
    }
    .header h1, .header .subtitle, .contact-info {
        color: white !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    .contact-info span {
        background: rgba(255,255,255,0.3) !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    .section-title {
        color: #2563eb !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    .status-badge {
        background: #10b981 !important;
        color: white !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    .project-item {
        background: #f8f9fa !important;
        border-left: 4px solid #2563eb !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
    .publications {
        background: #f0f9ff !important;
        border: 1px solid #bfdbfe !important;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
}
        </style>
    </head>
    <body>
        <!-- Action Buttons -->
        <div class="action-buttons">
            <button class="action-btn" onclick="window.print()">
                📄 Print / Save as PDF
            </button>
            
        </div>
        
        <div class="resume-container">
            <div class="header">
                <h1>KRISHNA ARYAL</h1>
                <div class="subtitle">Data Scientist | PhD Physics | Published Researcher</div>
                <div class="contact-info">
                    <span>📧 aryalkris9@gmail.com</span>
                    <span>📱 (234) 817-5476</span>
                    <span>📍 Kent, OH</span>
                    <span>🟢 US Permanent Resident</span>
                </div>
            </div>
            
            <div class="content">
                
                
                <div class="section">
                    <h2 class="section-title">Professional Summary</h2>
                    <div class="summary">
                        Recent PhD graduate in Physics with a proven track record of 8+ published research papers and 7+ years of experience in computational modeling, statistical analysis, and machine learning. Eligible for U.S. Public Trust Security Clearance. No criminal history, strong credit standing, verified advanced education, and continuous U.S. residency (>5 years).Expertise in Python, R, SQL, and advanced analytics with a strong background in solving complex problems using data-driven approaches. Available immediately for full-time positions and open to relocation.
                    </div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Core Technical Skills</h2>
                    <div class="skills-grid">
                        <div class="skill-category">Programming Languages:</div>
                        <div class="skill-items">Python, R, SQL, Fortran, MATLAB</div>
                        
                        <div class="skill-category">Machine Learning:</div>
                        <div class="skill-items">Scikit-learn, TensorFlow, Statistical Modeling, Predictive Analytics</div>
                        
                        <div class="skill-category">Data Visualization:</div>
                        <div class="skill-items">Tableau, Power BI, Matplotlib, Seaborn</div>
                        
                        <div class="skill-category">Analytics & Statistics:</div>
                        <div class="skill-items">Hypothesis Testing, Monte Carlo Simulation, A/B Testing</div>
                        
                        <div class="skill-category">Tools & Platforms:</div>
                        <div class="skill-items">Linux/Unix, Git, LaTeX, Visual Studio, Advanced Excel</div>
                    </div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Professional Experience</h2>
                    
                    <div class="experience-item">
                        <div class="job-title">Senior Research Data Scientist (PhD Research)</div>
                        <div class="company-info">Kent State University, Kent, OH | Aug 2019 - May 2024</div>
                        <ul class="achievements">
                            <li>Analyzed complex astrophysical datasets (100GB+) using Python, Fortran, and statistical methods</li>
                            <li>Developed predictive models for neutron star physics with 95%+ accuracy using machine learning</li>
                            <li>Published 8 peer-reviewed papers in high-impact journals (Physical Review D, Universe, etc.)</li>
                            <li>Presented research at 6+ international conferences and mentored 5+ graduate students</li>
                            <li>Built Monte Carlo simulation models for high-energy physics phenomena</li>
                        </ul>
                    </div>
                    
                    <div class="experience-item">
                        <div class="job-title">Graduate Student - Analytics Projects</div>
                        <div class="company-info">Georgia Institute of Technology, Atlanta, GA | Aug 2019 - Dec 2025</div>
                        <ul class="achievements">
                            <li>Built ensemble ML model for insurance fraud detection achieving 94% precision and 92% recall</li>
                            <li>Developed predictive models for chronic kidney disease classification with high accuracy</li>
                            <li>Created advanced database applications using SQL optimization techniques</li>
                            <li>Designed pandemic simulation models using statistical methods and automation</li>
                        </ul>
                    </div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Key Data Science Projects</h2>
                    
                    <div class="project-item">
                        <div class="project-title">Neutron Star Phase Transition Modeling (PhD Research)</div>
                        <div class="project-tech">Technologies: Python, TensorFlow, Fortran, Statistical Analysis</div>
                        <div class="project-desc">
                            Developed machine learning models to predict phase transitions in ultra-dense nuclear matter. Achieved 95%+ accuracy in predicting equation of state parameters, resulting in 8 published papers in Physical Review D and other high-impact journals.
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-title">QCD Phase Diagram Visualization & Analysis</div>
                        <div class="project-tech">Technologies: Python, Monte Carlo Methods, 3D Visualization</div>
                        <div class="project-desc">
                            Created comprehensive 3D visualization models for quantum chromodynamics phase transitions under extreme conditions. Published findings contributed to understanding of matter behavior in neutron star cores.
                        </div>
                    </div>
                    
                    <div class="project-item">
                        <div class="project-title">Healthcare Fraud Detection System (Georgia Tech)</div>  
                        <div class="project-tech">Technologies: Python, Scikit-learn, Ensemble Methods, ROC Analysis</div>
                        <div class="project-desc">
                            Built advanced ensemble machine learning model for insurance fraud detection achieving 94% precision and 92% recall using sophisticated feature engineering and cross-validation techniques.
                        </div>
                    </div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Education</h2>
                    
                    <div class="education-item">
                        <div class="degree">PhD in Physics (2024)</div>
                        <div class="university">Kent State University | Computational Physics & Nuclear Astrophysics</div>
                    </div>
                    
                    <div class="education-item">
                        <div class="degree">MS in Analytics (Expected 2025)</div>
                        <div class="university">Georgia Institute of Technology | Machine Learning & Statistics</div>
                    </div>
                    
                    <div class="education-item">
                        <div class="degree">MS in Applied Physics (2015)</div>
                        <div class="university">University of Massachusetts Boston | Optical Systems</div>
                    </div>
                    
                    <div class="education-item">
                        <div class="degree">MS in Physics (2012)</div>
                        <div class="university">Tribhuvan University, Nepal | High Energy Physics</div>
                    </div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Publications & Recognition</h2>
                    <div class="publications">
                        <ul>
                            <li>8+ Peer-reviewed publications in high-impact physics journals (Physical Review D, Universe, etc.)</li>
                            <li>6+ International conference presentations and invited talks</li>
                            <li>Google Scholar Profile: <a href="https://scholar.google.com/citations?user=fsWWqa0AAAAJ" target="_blank">View Publications</a></li>
                            <li>Graduate Student Senate Travel Award (2022) - Kent State University</li>
                            <li>Active member: American Physical Society (APS)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
            // Print functionality
            document.addEventListener('keydown', function(e) {
                if (e.ctrlKey && e.key === 'p') {
                    window.print();
                }
            });
            
            // Download resume function
            
            function downloadResume() {
                // Show user instructions
                alert('💡 For best results:\\n\\n1. In the print dialog, select "More settings"\\n2. Check "Background graphics"\\n3. Save as PDF or print\\n\\nThis ensures colors and styling are preserved!');
                
                // Hide buttons for clean PDF
                const buttons = document.querySelector('.action-buttons');
                buttons.style.display = 'none';
                
                // Trigger print dialog
                window.print();
                
                // Show buttons again after print dialog
                setTimeout(() => {
                    buttons.style.display = 'flex';
                }, 1000);
            }
            
            // Add a message for users
            console.log('💡 Tip: Use Ctrl+P to print or save as PDF anytime!');
        </script>
    </body>
    </html>
  `);
  
  resumeWindow.document.close();
};

export default function KrishnaResume() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'projects', 'contact'];
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
    { id: 'contact', icon: <Contact2 className="w-4 h-4" />, label: 'Contact' }
  ];

  const skills = {
    "Data Analysis & Visualization": [
      { name: "SQL", level: 95, icon: <Database className="w-5 h-5" /> },
      { name: "Python", level: 90, icon: <Code2 className="w-5 h-5" /> },
      { name: "Tableau", level: 85, icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Power BI", level: 85, icon: <TrendingUp className="w-5 h-5" /> }
    ],
    "Database & Cloud Technologies": [
      { name: "R Programming", level: 80, icon: <Code2 className="w-5 h-5" /> },
      { name: "Statistical Analysis", level: 90, icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Excel (Advanced)", level: 85, icon: <Database className="w-5 h-5" /> },
      { name: "Linux/Unix", level: 85, icon: <Server className="w-5 h-5" /> }
    ],
    "Machine Learning & Research": [
      { name: "TensorFlow", level: 80, icon: <Brain className="w-5 h-5" /> },
      { name: "Predictive Modeling", level: 95, icon: <TrendingUp className="w-5 h-5" /> },
      { name: "Monte Carlo Simulation", level: 90, icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Research & Publications", level: 95, icon: <Award className="w-5 h-5" /> }
    ]
  };

  const experiences = [
    {
      title: "Research & Teaching Assistant (PhD)",
      company: "Kent State University",
      location: "Kent, OH",
      period: "Aug 2019 - May 2024",
      type: "Research Position",
      achievements: [
        "Analyzed complex astrophysical datasets (100GB+) using Python, Fortran, and statistical methods",
        "Developed predictive models for neutron star physics with 95%+ accuracy using machine learning",
        "Published 8 peer-reviewed papers in high-impact journals (Physical Review D, Universe, etc.)",
        "Presented research at 6+ international conferences and mentored 5+ graduate students",
        "Built Monte Carlo simulation models for high-energy physics phenomena"
      ],
      technologies: ["Python", "Fortran", "Statistical Analysis", "Machine Learning", "Data Visualization", "Monte Carlo"]
    },
    {
      title: "Graduate Student - Analytics Projects",
      company: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "Aug 2019 - Present",
      type: "Academic Projects",
      achievements: [
        "Built ensemble ML model for insurance fraud detection achieving 94% precision and 92% recall",
        "Developed predictive models for chronic kidney disease classification with high sensitivity/specificity",
        "Created advanced database applications using SQL optimization techniques",
        "Designed pandemic simulation models using statistical methods and Excel automation"
      ],
      technologies: ["Python", "R", "Scikit-learn", "SQL", "Statistical Modeling", "Machine Learning"]
    },
    {
      title: "Research & Teaching Assistant",
      company: "University of Massachusetts Boston",
      location: "Boston, MA",
      period: "Sep 2013 - Sep 2015",
      type: "Research Position",
      achievements: [
        "Designed and simulated hybrid dielectric waveguide using Eigenmode solver (MODE Lumerical)",
        "Guided undergraduate students in lab sessions and evaluated student performances",
        "Provided detailed feedback and enhanced conceptual understanding in physics courses",
        "Conducted advanced optical device research related to interference and diffraction"
      ],
      technologies: ["MATLAB", "Lumerical", "Optical Design", "Teaching", "Laboratory Skills"]
    }
  ];

  const projects = [
    {
      title: "Neutron Star Phase Transition Modeling (PhD Research)",
      description: "Developed machine learning models to predict phase transitions in ultra-dense nuclear matter with 95%+ accuracy, resulting in 8 published research papers.",
      technologies: ["Python", "TensorFlow", "Statistical Modeling", "Fortran"],
      highlights: ["8 published papers", "95%+ accuracy", "International recognition"],
      link: "https://scholar.google.com/citations?user=fsWWqa0AAAAJ"
    },
    {
      title: "QCD Phase Diagram Analysis",
      description: "Created 3D visualization models for quantum chromodynamics phase transitions, published in Physical Review D and presented at international conferences.",
      technologies: ["Python", "Monte Carlo", "Data Visualization", "Statistical Analysis"],
      highlights: ["Published in Physical Review D", "3D visualization", "Conference presentations"],
      link: "https://scholar.google.com/citations?user=fsWWqa0AAAAJ"
    },
    {
      title: "Healthcare Fraud Detection System",
      description: "Built ensemble machine learning model for insurance fraud detection achieving 94% precision and 92% recall using advanced classification techniques.",
      technologies: ["Python", "Scikit-learn", "ROC Analysis", "Ensemble Methods"],
      highlights: ["94% precision", "Ensemble ML methods", "Real-world application"],
      link: "#"
    },
    {
      title: "Chronic Kidney Disease Predictor",
      description: "Developed clinical prediction model using Random Forest and statistical analysis with high sensitivity and specificity for early disease detection.",
      technologies: ["R", "Random Forest", "Statistical Analysis", "Healthcare Data"],
      highlights: ["Clinical application", "High accuracy", "Early detection focus"],
      link: "#"
    },
    {
      title: "Hybrid Dielectric Waveguide Design (MS Research)",
      description: "Designed and simulated advanced optical waveguide systems using Eigenmode solver, contributing to next-generation photonic device development.",
      technologies: ["MATLAB", "Lumerical", "Optical Design", "Simulation"],
      highlights: ["Advanced simulation", "Optical engineering", "Research publication"],
      link: "#"
    },
    {
      title: "Pandemic Simulation Model",
      description: "Created advanced Excel-based epidemiological modeling system with VBA automation for flu scenario analysis and public health planning.",
      technologies: ["Excel", "VBA", "Statistical Modeling", "Simulation"],
      highlights: ["Public health application", "Scenario modeling", "Automation"],
      link: "#"
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
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
              <button
                onClick={() => {
                  openResumeInNewWindow();
                  setShowDownloadOptions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">View Resume</div>
                  <div className="text-sm text-gray-500">Opens in new window</div>
                </div>
              </button>
              
              <button
                onClick={() => {
                  window.open('https://scholar.google.com/citations?user=fsWWqa0AAAAJ&hl=en&oi=ao', '_blank');
                  setShowDownloadOptions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium">Google Scholar</div>
                  <div className="text-sm text-gray-500">Research publications</div>
                </div>
              </button>
              
              <button
                onClick={() => {
                  navigator.clipboard.writeText('aryalkris9@gmail.com');
                  setShowDownloadOptions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-purple-600" />
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
                Welcome to Krishna's Portfolio
              </h1>
              <div className="flex justify-center space-x-8 text-lg font-medium text-gray-600 dark:text-gray-300">
                {/* <span>About</span>
                <span>Projects</span>
                <span>Skills</span>
                <span>Resume</span>
                <span>Contact</span> */}
              </div>
            </div>

            {/* About Me Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                About Me
                <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
              </h2>
              
              <div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="./profile-new.jpg" 
                      alt="Krishna Aryal" 
                      className="w-64 h-64 rounded-full object-cover object-center border-4 border-blue-600 dark:border-blue-400 shadow-2xl"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                      <span className="text-white text-xl">✓</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Status at the top - more prominent */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <span className="text-blue-700 dark:text-blue-300 font-semibold">
                        Actively Seeking Data Science Opportunities
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 ml-6">
                      Available for full-time positions • Open to relocation • Ready to start immediately
                    </p>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am a highly skilled Data Analyst & Business Analyst with expertise in data modeling, 
                    process optimization, and strategic decision-making. With a strong background in 
                    SQL, Python, and ETL workflows, I specialize in transforming complex data into 
                    actionable insights.
                  </p>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Recent PhD graduate in Physics with proven track record of 8+ published research papers and 7+ years of experience in computational modeling, statistical analysis, and machine learning. 
                      Seeking to leverage extensive research background to solve complex business problems through data science.
                    </p>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      I hold a Master's degree in Analytics from Georgia Institute of Technology and a 
                      Master's in Applied Physics from the University of Massachusetts, Boston.
                    </p>
                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-6 pt-6 text-blue-600 dark:text-blue-400">
                    <a href="mailto:aryalkris9@gmail.com" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                      <Mail className="w-5 h-5" />aryalkris9@gmail.com
                    </a>
                    <a href="tel:+12348175476" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                      <Phone className="w-5 h-5" />234-817-5476
                    </a>
                    <a href="https://linkedin.com/in/krishna-aryal" target="_blank" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
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
                  {["SQL", "Python", "R", "Tableau", "Power BI", "Machine Learning", "Statistical Analysis", "Research"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
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
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
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
                    Master of Science in Analytics
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    Georgia Institute of Technology
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">Expected 2025</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Courses: Machine Learning, Business Intelligence, Statistical Modeling
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
                    PhD in Physics
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    Kent State University
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">2024</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Research: Nuclear astrophysics, computational modeling, 8+ publications
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
                    UMass Boston
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">2015</p>
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
                    Tribhuvan University, Nepal
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">2012</p>
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
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Research & Publications
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Published Researcher</h3>
                <p className="text-gray-600 dark:text-gray-300">Nuclear Physics & Computational Astrophysics</p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Extensive research experience in nuclear astrophysics with focus on neutron star modeling and 
              computational physics. Published 8+ findings in peer-reviewed journals and presented at 6+ international conferences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://scholar.google.com/citations?user=fsWWqa0AAAAJ&hl=en&oi=ao" 
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Google Scholar Profile
              </a>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
                <BookOpenText className="w-4 h-4" />
                8+ Publications
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
                <TrendingUp className="w-4 h-4" />
                6+ Conferences
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                  
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
                          234-817-5476
                        </a>
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

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Tell me about your data science opportunity..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Krishna Aryal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}