function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Systems />
        <Discovery />
        <Numbers />
        <Trade />
        <Stories />
        <Newsletter />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
