import { useState } from 'react';

export default function SignUpPage({ onSignUp, setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-primary-600 mb-4">Welcome, {email}!</h1>
        <p className="mb-6 text-gray-600">Your account has been created successfully.</p>
        <button 
          onClick={() => setCurrentPage('home')}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold text-primary-600 mb-8 text-center font-display">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{' '}
        <button 
          onClick={() => setCurrentPage('login')}
          className="text-primary-600 hover:text-primary-800 hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
}