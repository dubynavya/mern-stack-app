// Home page component — landing page for the Book Management System

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/home.css";

const Home = () => {
  const { isAuth } = useAuth();

  return (
    <div className="hero-container">

      {/* ============ HERO SECTION ============ */}
      <section className="hero-top">
        <span className="hero-badge">MERN Stack Project</span>

        <h1 className="hero-title">
          Manage your books,<br />the simple way.
        </h1>

        <p className="hero-subtitle">
          A full-stack book management system with secure authentication,
          instant search, and complete control over your collection -
          built with React, Node.js, Express, and MongoDB.
        </p>

        <div className="hero-cta">
          {isAuth ? (
            <Link to="/books" className="btn btn-primary btn-lg">
              Go to My Books →
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg">
                Login
              </Link>
            </>
          )}
        </div>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <section className="hero-features">
        <div className="feature-card">
          <div className="feature-icon">🔐</div>
          <h3>Secure Authentication</h3>
          <p>JWT-based login keeps every account and every book list private.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Full Book Control</h3>
          <p>Add, edit, and delete books from your personal collection anytime.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Instant Search</h3>
          <p>Find any title or author in your library with live, debounced search.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <h3>Smart Pagination</h3>
          <p>Large collections stay fast and easy to browse, page by page.</p>
        </div>
      </section>

      {/* ============ TECH STACK SECTION ============ */}
      <section className="hero-stack">
        <h3 className="stack-heading">Built With</h3>
        <div className="stack-pills">
          <span className="pill">React</span>
          <span className="pill">Axios</span>
          <span className="pill">Node.js</span>
          <span className="pill">Express</span>
          <span className="pill">MongoDB</span>
          <span className="pill">Mongoose</span>
          <span className="pill">JWT</span>
        </div>
      </section>

    </div>
  );
};

export default Home;