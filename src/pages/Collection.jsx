import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Collection = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    artist: '',
    albumName: '',
    year: new Date().getFullYear(),
    genre: 'Rock',
    coverArtUrl: '',
    status: 'Owned',
  });

  // Load records from localStorage on mount
  useEffect(() => {
    const savedRecords = localStorage.getItem('vinylVault_records');
    if (savedRecords) {
      try {
        setRecords(JSON.parse(savedRecords));
      } catch (error) {
        console.error('Error loading records:', error);
      }
    }
  }, []);

  // Save records to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('vinylVault_records', JSON.stringify(records));
  }, [records]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.artist.trim() || !formData.albumName.trim()) {
      alert('Please fill in artist and album name');
      return;
    }

    const newRecord = {
      id: Date.now(),
      ...formData,
      year: parseInt(formData.year),
    };

    setRecords([newRecord, ...records]);
    
    // Reset form
    setFormData({
      artist: '',
      albumName: '',
      year: new Date().getFullYear(),
      genre: 'Rock',
      coverArtUrl: '',
      status: 'Owned',
    });
  };

  const handleDelete = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Owned':
        return '#2d9f44';
      case 'Wishlist':
        return '#d99d2a';
      case 'Loaned Out':
        return '#d42d2d';
      default:
        return '#7a6e62';
    }
  };

  return (
    <div>
      <Navbar />
      <div className="collection-container">
        <h1>My Collection</h1>
        
        <section className="add-record-section">
          <h2>Add a Record</h2>
          <form onSubmit={handleSubmit} className="add-record-form">
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={formData.artist}
                onChange={handleInputChange}
                placeholder="Artist name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="albumName">Album Name</label>
              <input
                type="text"
                id="albumName"
                name="albumName"
                value={formData.albumName}
                onChange={handleInputChange}
                placeholder="Album name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>

            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
              >
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Electronic">Electronic</option>
                <option value="Classical">Classical</option>
                <option value="Pop">Pop</option>
                <option value="R&B">R&B</option>
                <option value="Folk">Folk</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="coverArtUrl">Cover Art URL (optional)</label>
              <input
                type="text"
                id="coverArtUrl"
                name="coverArtUrl"
                value={formData.coverArtUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="Owned">Owned</option>
                <option value="Wishlist">Wishlist</option>
                <option value="Loaned Out">Loaned Out</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Add to Vault</button>
          </form>
        </section>

        <section className="records-grid-section">
          <h2>Vault ({records.length})</h2>
          {records.length === 0 ? (
            <p className="empty-state">No records yet. Add your first vinyl!</p>
          ) : (
            <div className="records-grid">
              {records.map((record) => (
                <div key={record.id} className="record-card">
                  <div className="record-cover">
                    {record.coverArtUrl ? (
                      <img src={record.coverArtUrl} alt={record.albumName} />
                    ) : (
                      <div className="vinyl-placeholder">
                        <svg width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="15" stroke="var(--accent)" strokeWidth="1.5" />
                          <circle cx="16" cy="16" r="4" stroke="var(--accent)" strokeWidth="1.5" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="record-info">
                    <h3>{record.albumName}</h3>
                    <p className="artist">{record.artist}</p>
                    <p className="meta">{record.year} • {record.genre}</p>
                    <div
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(record.status) }}
                    >
                      {record.status}
                    </div>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(record.id)}
                    aria-label="Delete record"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Collection;