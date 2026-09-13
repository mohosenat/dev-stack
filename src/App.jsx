import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, 1000);

  return () => clearTimeout(timer);
}, []);

  const addTechnology = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const removeTechnology = (id) => {
    const technology = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${technology?.name || "Technology"} removed.`);
  };

  const removeAllTechnologies = () => {
    if (!stack.length) return;
    setStack([]);
    toast.info("All technologies removed.");
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {loading ? (
          <div className="loading"><span></span>Loading technologies...</div>
        ) : (
          <Technologies
            technologies={technologies}
            stack={stack}
            onAdd={addTechnology}
            onRemove={removeTechnology}
            onRemoveAll={removeAllTechnologies}
          />
        )}
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2200} theme="light" />
    </>
  );
}
