import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

export default function VisitorCounter() {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 🔴 CHANGE THIS - Apni unique ID daalo
        const YOUR_UNIQUE_ID = 'divakargautam-portfolio';

        const apiUrl = `https://vbr.wocr.tk/api/page/${YOUR_UNIQUE_ID}/count`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('API response not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Visitor count:', data.count);
                setCount(data.count);
                localStorage.setItem('visitorCount', data.count);
                setLoading(false);
            })
            .catch(error => {
                console.error('Visitor counter error:', error);

                // Fallback - localStorage se count lo
                const savedCount = localStorage.getItem('visitorCount');
                if (savedCount) {
                    setCount(parseInt(savedCount));
                } else {
                    // Random demo count (100 to 500 ke beech)
                    const demoCount = Math.floor(Math.random() * 400) + 100;
                    setCount(demoCount);
                    localStorage.setItem('visitorCount', demoCount);
                }
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="visitor-counter">
                <span className="spinner-border spinner-border-sm" style={{ width: '10px', height: '10px' }}></span>
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <div className="visitor-counter">
            <FaEye size={12} />
            <span>
                <strong>{count.toLocaleString()}</strong> total visitors
            </span>
        </div>
    );
}