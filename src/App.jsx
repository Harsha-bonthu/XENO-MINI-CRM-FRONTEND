import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  // Let's rename this for clarity
  const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
    const fetchUser = async () => {
      try {
      const { data } = await axios.get('/api/auth/current_user');
        // This is a more robust check.
        // It ensures data is not null and is a non-empty object.
        if (data && Object.keys(data).length > 0) {
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed, setting user to null");
        setUser(null);
      } finally {
        setIsAuthLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Helper function to render the login/logout links in the navbar
  const renderAuthLinks = () => {
    if (isAuthLoading) {
        return null; // Don't show anything while we check
    }
    if (user) {
        return (
            <>
                <span style={{ marginRight: '1rem' }}>Welcome, {user.displayName}</span>
                <a href="http://localhost:4000/api/auth/logout">Logout</a>
            </>
        );
    } else {
       return <a href="http://localhost:4000/api/auth/google">Login with Google</a>;
    }
  };

  // Helper function to render the main content based on auth state
  const renderMainContent = () => {
      if (isAuthLoading) {
          return <h2>Authenticating...</h2>;
      }
      // If user is logged in, show the page content
      if (user) {
          return <Outlet />;
      }
      // If NOT logged in, decide what to show
      if (window.location.pathname === '/campaigns') {
          // Allow viewing campaign history even when logged out
          return <Outlet />;
      } else {
          // For all other protected pages (like the root '/'), show login prompt
          return <h2>Please log in to create a campaign.</h2>;
      }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        color: '#23272f',
        fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
        transition: 'background 0.5s',
      }}
    >
      <nav
        style={{
          padding: '1.5rem 2rem',
          background: 'rgba(255,255,255,0.85)',
          borderBottom: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 16px 0 rgba(44,62,80,0.10)',
          backdropFilter: 'blur(8px)',
          borderRadius: '0 0 18px 18px',
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              marginRight: '1.5rem',
              color: '#3b5bdb',
              fontWeight: 800,
              fontSize: '1.5rem',
              letterSpacing: '1px',
              textShadow: '0 2px 8px rgba(44,62,80,0.10)',
              transition: 'color 0.2s',
            }}
          >
            Audience Builder
          </Link>
          <Link
            to="/campaigns"
            style={{
              color: '#5f27cd',
              fontWeight: 600,
              fontSize: '1.15rem',
              letterSpacing: '0.5px',
              transition: 'color 0.2s',
            }}
          >
            Campaign History
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>{renderAuthLinks()}</div>
      </nav>
      <main
        style={{
          padding: '2.5rem 1.5rem',
          maxWidth: '900px',
          margin: '2.5rem auto',
          background: 'rgba(255,255,255,0.65)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px 0 rgba(44,62,80,0.13)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.25)',
        }}
      >
        {renderMainContent()}
      </main>
      <footer
        style={{
          textAlign: 'center',
          padding: '1.2rem 0 0.7rem 0',
          color: '#7b809a',
          fontSize: '1rem',
          letterSpacing: '0.5px',
        }}
      >
        © {new Date().getFullYear()} Xeno SDE Internship Project. All rights reserved.
      </footer>
    </div>
  );
}

export default App;