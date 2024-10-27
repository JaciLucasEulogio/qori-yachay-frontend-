//En construcción

/*import React, { useState, useEffect } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [suggestions, setSuggestions] = useState([]);

  // Cargar sugerencias del Local Storage al inicializar el componente
  useEffect(() => {
    const storedSuggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
    setSuggestions(storedSuggestions);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSuggestion = { ...formData, id: Date.now() };
    const updatedSuggestions = [...suggestions, newSuggestion];

    // Guardar las nuevas sugerencias en el Local Storage
    localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions));
    setSuggestions(updatedSuggestions);
    setFormData({ name: '', message: '' }); // Reiniciar el formulario
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Enviar Sugerencias</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
      </form>

      <h3 className="text-lg font-semibold mt-6">Sugerencias Recibidas:</h3>
      <ul className="space-y-2 mt-2">
        {suggestions.map((suggestion) => (
          <li key={suggestion.id} className="border p-2 rounded">
            <strong>{suggestion.name}</strong>: {suggestion.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackForm;*/
