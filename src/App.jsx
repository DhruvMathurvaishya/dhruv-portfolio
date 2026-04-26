import React from 'react';

export default function App() {
  const skills = [
    'Unreal Engine 5',
    'Blueprints',
    'C++',
    'Replication',
    'Behavior Trees',
    'UMG UI',
    'Mobile Optimization',
    'Cinematics'
  ];

  const projects = [
    'Up Rock Man',
    'Escape Room 3D',
    'Island Cinematic Environment',
    'Fantasy Cinematic World',
    'Multiplayer Replication Setup',
    'Boss Fight Prototype'
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg,#000,#07111f,#000)',
        color: 'white',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '40px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ padding: '60px 0' }}>
          <h1 style={{ fontSize: '64px', marginBottom: '10px' }}>
            Dhruv Mathurvaishya
          </h1>

          <p style={{ fontSize: '24px', color: '#cbd5e1' }}>
            Unreal Engine Developer • Multiplayer • Mobile Games
          </p>
        </section>

        <section style={{ padding: '30px 0' }}>
          <h2>Skills</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: '14px'
            }}
          >
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  padding: '16px',
                  background: '#111827',
                  borderRadius: '14px'
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '40px 0' }}>
          <h2>Projects</h2>

          {projects.map((project, index) => {
            const video =
              index === 1
                ? 'https://www.youtube.com/embed/QbjRLQ0UECU'
                : 'https://www.youtube.com/embed/dQw4w9WgXcQ';

            return (
              <div
                key={project}
                style={{
                  marginTop: '24px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#0b1120'
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                  }}
                >
                  <iframe
                    src={video}
                    title={project + '1'}
                    style={{ width: '100%', height: '280px', border: 0 }}
                    allowFullScreen
                  />

                  <iframe
                    src={video}
                    title={project + '2'}
                    style={{ width: '100%', height: '280px', border: 0 }}
                    allowFullScreen
                  />
                </div>

                <div style={{ padding: '20px' }}>
                  <h3>{project}</h3>
                </div>
              </div>
            );
          })}
        </section>

        <section style={{ padding: '60px 0' }}>
          <h2>Contact</h2>

          <p>Email: dhruv232002@gmail.com</p>
          <p>Phone: +91 9503759989</p>

          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/dhruv-mathurvaishya-33870826b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BF39ZXn%2BFQsiFdIklDy4Pcw%3D%3D"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#38bdf8' }}
            >
              View Profile
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
