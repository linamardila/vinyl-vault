import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Navbar from '../components/Navbar';
import './Stats.css';

const Stats = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  // Load records from Firestore on mount and when user changes
  useEffect(() => {
    if (!currentUser) {
      setRecords([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'records'),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const recordsData = [];
      querySnapshot.forEach((doc) => {
        recordsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setRecords(recordsData);
      setLoading(false);
    }, (error) => {
      console.error('Error loading records:', error);
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  // Calculate stats
  const totalRecords = records.length;
  const uniqueArtists = new Set(records.map(record => record.artist)).size;
  const uniqueGenres = new Set(records.map(record => record.genre)).size;

  // Prepare genre data for pie chart
  const genreData = records.reduce((acc, record) => {
    const existing = acc.find(item => item.genre === record.genre);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ genre: record.genre, value: 1 });
    }
    return acc;
  }, []);

  // Prepare status data for bar chart
  const statusData = [
    { status: 'Owned', count: records.filter(r => r.status === 'Owned').length },
    { status: 'Wishlist', count: records.filter(r => r.status === 'Wishlist').length },
    { status: 'Loaned Out', count: records.filter(r => r.status === 'Loaned Out').length }
  ];

  // Colors for charts
  const COLORS = ['#c8853a', '#7a6e62', '#8b6355', '#5a4a3a', '#c4956a'];

  if (!currentUser) {
    return (
      <div>
        <Navbar />
        <div className="stats-container">
          <div className="login-prompt">
            <h1>My Stats</h1>
            <p>Please <Link to="/login">log in</Link> to view your stats</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="stats-container">
        <h1>My Stats</h1>

        {loading ? (
          <div className="loading-state">
            <p>Loading your stats...</p>
          </div>
        ) : (
          <>
            {/* Stats Strip */}
            <section className="stats-strip">
              <div>
                <h2>{totalRecords}</h2>
                <div>Total Records</div>
              </div>
              <div>
                <h2>{uniqueArtists}</h2>
                <div>Unique Artists</div>
              </div>
              <div>
                <h2>{uniqueGenres}</h2>
                <div>Unique Genres</div>
              </div>
            </section>

            {/* Charts */}
            <div className="charts-grid">
              {/* Genre Pie Chart */}
              <div className="chart-card">
                <h3>Records by Genre</h3>
                {genreData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={genreData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ genre, percent }) => `${genre} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {genreData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="no-data">No data available</p>
                )}
              </div>

              {/* Status Bar Chart */}
              <div className="chart-card">
                <h3>Records by Status</h3>
                {statusData.some(item => item.count > 0) ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={statusData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#7a6e62" />
                      <XAxis dataKey="status" stroke="#f0e6d0" />
                      <YAxis stroke="#f0e6d0" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1a1714',
                          border: '1px solid #7a6e62',
                          color: '#f0e6d0'
                        }}
                      />
                      <Bar dataKey="count" fill="#c8853a" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="no-data">No data available</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Stats;