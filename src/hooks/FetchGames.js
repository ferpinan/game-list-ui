import { useState, useEffect } from 'react';

function FetchGames() {
    const [data, setData] = useState([]);

    useEffect(() => {
        let input = "https://game-list-y38p.onrender.com/games";
//        let input = "http://localhost:8080/games";
        fetch(input)
            .then(response => response.json())
            .then(jsonData => setData(jsonData));
    }, []);

    return data;
}

export default FetchGames;