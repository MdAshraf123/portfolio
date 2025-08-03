import React from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-2">Md Ashraf</h1>
        <p className="text-lg text-gray-600 mb-4">Computer Science Engineering Student</p>

        <div className="space-y-2 mb-6">
          <p className="flex items-center gap-2"><Mail className="w-5 h-5" /> yourname@example.com</p>
          <p className="flex items-center gap-2">📞 +91-XXXXXXXXXX</p>
          <p className="flex items-center gap-2"><Linkedin className="w-5 h-5 text-blue-600" /><a href="#" className="text-blue-600 underline">linkedin.com/in/yourname</a></p>
          <p className="flex items-center gap-2"><Github className="w-5 h-5" /><a href="#" className="text-blue-600 underline">github.com/yourusername</a></p>
          <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-red-500" /> Amritsar, Punjab, India</p>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🎯 Career Objective</h2>
          <p>I am a B.Tech Computer Science student passionate about building real-world applications. I am actively looking for internship opportunities to apply my skills in web development, Django, and problem-solving, and to learn advanced technologies like AI/ML and app development.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">📚 Education</h2>
          <p><strong>Amritsar Group of Colleges</strong><br />
          B.Tech in Computer Science & Engineering (2021 – 2025)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">💻 Technical Skills</h2>
          <ul className="list-disc list-inside">
            <li><strong>Languages:</strong> Python, Java, JavaScript, C/C++</li>
            <li><strong>Web:</strong> HTML, CSS, Bootstrap, React.js, Django</li>
            <li><strong>Databases:</strong> SQLite, MySQL</li>
            <li><strong>Tools:</strong> Git, VS Code, Android Studio</li>
            <li><strong>Other:</strong> REST API, React Native (learning), AI/ML (beginner)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🧠 Projects</h2>
          <ul className="space-y-3">
            <li>
              <strong>DOCTORSHUB – Online Doctor Appointment System</strong><br />
              Full-stack web app using Django, React, and SQLite with appointment booking, dashboards, and user authentication.
            </li>
            <li>
              <strong>HomeAccounting – Expense Tracker</strong><br />
              Java Swing-based application to track family expenses and income with filter options.
            </li>
            <li>
              <strong>Campus Craving – College Canteen Portal (Idea)</strong><br />
              Design of a student food ordering platform using Django + Bootstrap + SQLite.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🏆 Achievements</h2>
          <ul className="list-disc list-inside">
            <li>Winner, Video Editing Contest – Applied Science Dept, AGC</li>
            <li>Completed Django Full Course by Jose Portilla (Udemy)</li>
            <li>Hackathon participant – Solved 30 programming questions</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">📈 Ongoing Learning</h2>
          <ul className="list-disc list-inside">
            <li>Learning AI/ML using Python (NLTK, pandas, scikit-learn)</li>
            <li>Practicing DSA regularly</li>
            <li>Exploring React Native and Android XML</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🤝 Looking For</h2>
          <p>Internships in: Web Development, Django, React, AI/ML<br />
          Open to remote or on-site opportunities<br />
          Willing to learn quickly and contribute to real projects</p>
        </section>
      </div>
    </div>
  );
}
