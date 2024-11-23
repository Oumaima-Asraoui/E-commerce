import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import HeroImg from "../assets/Home.jpg";

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Etat pour savoir si on est en mode connexion ou inscription

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification selon le mode (connexion ou inscription)
    if (isLogin) {
      // Vérification si l'email est celui de l'admin
      if (email === "oumaima12@gmail.com" && password === "123456789") {
        // Si c'est l'admin, redirige vers le dashboard
        navigate('/dashboard'); 
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } else {
      // Si on est en mode inscription
      setMessage(`Compte créé pour ${email}. Vous pouvez maintenant vous connecter.`);
      setEmail('');
      setPassword('');
      setError('');
    }
  };

  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Image de fond floue */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)', // Application du flou uniquement à l'image
          zIndex: -1 // S'assurer que l'image reste en arrière-plan
        }}
      ></div>
      
      <div className="min-h-screen flex flex-col justify-center items-center mt-1 py-2">
        <div className="max-w-md w-full p-8 bg-white rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105">
          <h2 className="text-5xl font-bold text-center mb-8 text-gray-900 transform transition-all duration-500 hover:text-blue-600 hover:scale-110 hover:rotate-2 hover:shadow-2xl">
            {isLogin ? "Se connecter" : "S'inscrire"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ease-in-out"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Mot de passe:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ease-in-out"
                required
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}
            {message && <div className="text-green-600 text-sm">{message}</div>} {/* Message de confirmation */}

            <button  
              type="submit" 
              className="w-full bg-cyan-600 text-white p-4 rounded-3xl mt-4 hover:bg-blue-700 focus:outline-none transition-all ease-in-out transform hover:scale-105"
            >
              {isLogin ? "Se connecter" : "S'inscrire"}
            </button>
          </form>

          {/* Bouton pour basculer entre connexion et inscription */}
          <div className="text-center mt-4">
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setMessage('');
              }} 
              className="text-blue-600 hover:underline"
            >
              {isLogin ? "Vous n'avez pas de compte? Inscrivez-vous" : "Déjà inscrit? Connectez-vous"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
