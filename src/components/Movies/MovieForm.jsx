import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from './config'; // Adjust the import based on your config file path

const MovieForm = () => {
  const [movie, setMovie] = useState({
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [
      { Source: '', Value: '' },
      { Source: '', Value: '' },
      { Source: '', Value: '' }
    ],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (index, e) => {
    const { name, value } = e.target;
    const newRatings = [...movie.Ratings];
    newRatings[index][name] = value;

    setMovie((prev) => ({
      ...prev,
      Ratings: newRatings,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the movie to Firestore
      await setDoc(doc(db, 'movies', movie.imdbID), movie);
      alert('Movie added successfully!');
      setMovie({ /* Reset the form here if needed */ });
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('Failed to add movie. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">Add Movie</h2>

      <div className="grid grid-cols-1 gap-4">
        {Object.keys(movie).map((key, index) => {
          if (key === 'Ratings') {
            return movie.Ratings.map((rating, idx) => (
              <div key={idx} className="flex space-x-2">
                <input
                  type="text"
                  name="Source"
                  placeholder="Source"
                  value={rating.Source}
                  onChange={(e) => handleRatingChange(idx, e)}
                  className="border p-2 flex-1"
                  required
                />
                <input
                  type="text"
                  name="Value"
                  placeholder="Value"
                  value={rating.Value}
                  onChange={(e) => handleRatingChange(idx, e)}
                  className="border p-2 flex-1"
                  required
                />
              </div>
            ));
          }

          return (
            <input
              key={index}
              type="text"
              name={key}
              placeholder={key}
              value={movie[key]}
              onChange={handleChange}
              className="border p-2"
              required
            />
          );
        })}
      </div>

      <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
