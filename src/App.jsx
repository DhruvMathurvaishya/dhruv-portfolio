import React from 'react';

export default function App() {
  const skills = [
    'Unreal Engine 5',
    'Blueprints',
    'C++',
    'Replication',
    'Behavior Trees',
    'UMG UI',
    'AI Systems',
    'Level Design',
    'Lighting',
    'Cinematics',
    'Multiplayer Setup',
    'Mobile Optimization'
  ];

  const projects = [
    {
      name: 'Escape Room 3D',
      videos: [
        'https://youtu.be/cW-qUq9t8T4?si=V8W3efX2SvRF12n9',
        'https://youtu.be/cW-qUq9t8T4?si=0vHTVg0M7dhjwZce'
      ],
      desc: [
        '3D puzzle-based escape room experience',
        'Designed immersive environments and interactions',
        'Focused on player logic and progression systems'
      ]
    },
    {
      name: 'Up Rock Man',
      video: 'https://youtu.be/NQfM6CHE5Uc?si=WyPZ-tstA6m-KRgm',
      desc: [
        'Mobile game published on Play Store',
        'Arcade-style gameplay with responsive controls',
        'Integrated ads and monetization systems'
      ]
    },
    {
      name: 'Village Environment',
      videos: [
        'https://youtu.be/2ev5xYcsid8?si=QFfUvjINUv4KyEo9',
        'https://youtu.be/NQfM6CHE5Uc?si=WyPZ-tstA6m-KRgm'
      ],
      desc: [
        'Cinematic village environment design',
        'Focus on lighting, mood, and realism',
        'Built using Unreal Engine tools'
      ]
    },
    {
      name: 'Fantasy Cinematic World',
      video: 'https://youtu.be/V9ARLnhc96Q?si=XN3wnaSTf_Fh7BTL',
      desc: [
        'Fantasy-themed cinematic scene',
        'Stylized environment and mood design',
        'Advanced lighting and composition'
      ]
    }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Dhruv Mathurvaishya</h1>
          <p style={styles.subtitle}>
            Unreal Engine Developer • Multiplayer • Mobile Games
          </p>
        </section>

        {/* SKILLS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>

          <div style={styles.skillsGrid}>
            {skills.map(skill => (
              <div key={skill} className="skillCard" style={styles.skillCard}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          {projects.map(project => (
            <div key={project.name} style={styles.projectCard} className="card">

              {/* INFO BOX */}
              <div style={styles.infoBox}>
                <h3 style={styles.projectTitle}>{project.name}</h3>

                {project.desc.map((line, i) => (
                  <p key={i} style={styles.projectText}>{line}</p>
                ))}
              </div>

              {/* VIDEOS */}
              {project.videos ? (
                <div style={styles.videoStack}>
                  {project.videos.map((vid, i) => (
                    <iframe
                      key={i}
                      src={vid}
                      title={project.name + i}
                      style={styles.video}
                      allowFullScreen
                    />
                  ))}
                </div>
              ) : (
                <iframe
                  src={project.video}
                  title={project.name}
                  style={styles.video}
                  allowFullScreen
                />
              )}

            </div>
          ))}
        </section>

        {/* CONTACT */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>

          <p>Email: dhruv232002@gmail.com</p>
          <p>Phone: +91 9503759989</p>

          <a
            href="https://www.linkedin.com/in/dhruv-mathurvaishya-33870826b/"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            LinkedIn Profile
          </a>
        </section>

      </div>

      {/* HOVER EFFECTS */}
      <style>{`
        .card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 70px rgba(0,0,0,0.7);
        }

        iframe {
          transition: transform 0.5s ease;
        }

        .card:hover iframe {
          transform: scale(1.04);
        }

        .skillCard {
          transition: all 0.3s ease;
        }

        .skillCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(56,189,248,0.3);
          background: #1e293b;
        }
      `}</style>

    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg,#000,#07111f,#000)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: '40px'
  },

  container: {
    maxWidth: '1100px',
    margin: '0 auto'
  },

  hero: {
    marginBottom: '80px'
  },

  title: {
    fontSize: '64px',
    marginBottom: '10px'
  },

  subtitle: {
    color: '#94a3b8'
  },

  section: {
    marginBottom: '80px'
  },

  sectionTitle: {
    fontSize: '32px',
    marginBottom: '30px'
  },

  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
    gap: '15px'
  },

  skillCard: {
    padding: '16px',
    background: '#0f172a',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.05)'
  },

  projectCard: {
    marginBottom: '60px'
  },

  infoBox: {
    background: '#0f172a',
    padding: '20px',
    borderRadius: '14px',
    marginBottom: '20px',
    border: '1px solid rgba(255,255,255,0.08)'
  },

  projectTitle: {
    fontSize: '22px',
    marginBottom: '10px'
  },

  projectText: {
    color: '#cbd5e1',
    margin: '4px 0'
  },

  videoStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },

  video: {
    width: '100%',
    height: '420px',
    border: 'none',
    borderRadius: '14px'
  },

  link: {
    color: '#38bdf8'
  }
};
