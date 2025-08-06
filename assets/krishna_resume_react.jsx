import React from 'react';
import { Moon, Sun, Linkedin, Github, Mail, Phone, User, BookOpenText, BriefcaseBusiness, Code2, Contact2 } from 'lucide-react';
import { useState } from 'react';

export default function KrishnaResume() {
  const [darkMode, setDarkMode] = useState(false);

  const sections = [
    { id: 'about', icon: <User className="w-4 h-4 inline mr-1" />, label: 'About' },
    { id: 'skills', icon: <Code2 className="w-4 h-4 inline mr-1" />, label: 'Skills' },
    { id: 'education', icon: <BookOpenText className="w-4 h-4 inline mr-1" />, label: 'Education' },
    { id: 'projects', icon: <BriefcaseBusiness className="w-4 h-4 inline mr-1" />, label: 'Projects' },
    { id: 'contact', icon: <Contact2 className="w-4 h-4 inline mr-1" />, label: 'Contact' }
  ];

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <div className="fixed top-4 right-4 z-50">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-950 shadow z-40">
        <ul className="flex justify-center space-x-6 py-4 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:text-blue-600">
                {section.icon} {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-24 p-8 max-w-4xl mx-auto space-y-10">
        <section id="about">
          <div className="rounded-lg shadow p-8 bg-white dark:bg-gray-800 flex flex-col items-center">
            <img src="/krishna.jpg" alt="Krishna Aryal" className="w-32 h-32 rounded-full mb-4" />
            <h1 className="text-3xl font-bold">Krishna Aryal</h1>
            <p className="text-sm text-center">Data Analyst | PhD in Physics | MS in Analytics (Georgia Tech)</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-blue-600">
              <a href="mailto:aryalkris9@gmail.com"><Mail className="inline w-4 h-4 mr-1" />aryalkris9@gmail.com</a>
              <a href="tel:+12348175476"><Phone className="inline w-4 h-4 mr-1" />234-817-5476</a>
              <a href="https://linkedin.com/in/krishna-aryal-097677ab" target="_blank"><Linkedin className="inline w-4 h-4 mr-1" />LinkedIn</a>
              <a href="https://github.com/kraryal" target="_blank"><Github className="inline w-4 h-4 mr-1" />GitHub</a>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="rounded-lg shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc ml-5 space-y-2 text-sm">
              <li><strong>Python</strong>: NumPy, pandas, matplotlib, scikit-learn, Seaborn</li>
              <li><strong>R</strong>: ggplot2, caret, glmnet, dplyr</li>
              <li><strong>SQL</strong>: T-SQL, PostgreSQL, complex queries, stored procedures</li>
              <li><strong>Business Intelligence</strong>: Power BI (DAX, Power Query), Tableau, Looker</li>
              <li><strong>Excel</strong>: Advanced formulas, PivotTables, VBA Macros</li>
              <li><strong>Data Modeling</strong>: ER Diagrams, Normalization, Snowflake/Star Schemas</li>
              <li><strong>Machine Learning</strong>: Regression, Classification, Clustering, Ensemble Methods</li>
              <li><strong>Programming Tools</strong>: Git, Jupyter, Shell scripting, VS Code, PyCharm</li>
              <li><strong>Scientific Computing</strong>: Fortran, ROOT, HPC, MATLAB, MODE (Lumerical)</li>
              <li><strong>OS & Platforms</strong>: Linux, Windows, MacOS</li>
            </ul>
          </div>
        </section>

        <section id="education">
          <div className="rounded-lg shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>MS in Analytics – Georgia Institute of Technology (Expected Dec 2025)</li>
              <li>PhD in Physics – Kent State University (2024)</li>
              <li>MS in Applied Physics – University of Massachusetts Boston (2015)</li>
              <li>MS in Physics – Tribhuvan University, Nepal (2012)</li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <div className="rounded-lg shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-4">University Projects</h2>
            <ul className="list-disc ml-5 space-y-2 text-sm">
              <li>CKD Prediction: Built ML model with clinical data, boosting accuracy with feature selection & ensemble methods.</li>
              <li>VIX & Geopolitics: Used PCA, clustering, regression to analyze economic effects of global events on US markets.</li>
              <li>Insurance Fraud Detection: R-based pipeline using KSVM, ROC, and confusion matrix to flag fraudulent claims.</li>
              <li>Influenza Simulation: Excel macros project on pandemic flu transmission with visual dashboards.</li>
              <li>Bank Database Design: Created SQL schema, integrity constraints, stored procs for account management.</li>
              <li>Waveguide Simulation: MODE software used to analyze light propagation in nanostructures at UMASS Boston.</li>
              <li>Neutron Star Modeling: Wrote Fortran code to simulate dense matter using nuclear EOS & plotted via ROOT.</li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <div className="rounded-lg shadow p-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p>Email: <a href="mailto:aryalkris9@gmail.com" className="text-blue-600">aryalkris9@gmail.com</a></p>
            <p>Phone: <a href="tel:+12348175476" className="text-blue-600">234-817-5476</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/krishna-aryal-097677ab" className="text-blue-600" target="_blank">linkedin.com/in/krishna-aryal-097677ab</a></p>
            <p>GitHub: <a href="https://github.com/kraryal" className="text-blue-600" target="_blank">github.com/kraryal</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
