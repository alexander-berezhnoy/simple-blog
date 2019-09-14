import { useState, useEffect } from 'react';

const fetchData = (url, options = {}, isArray = false) => {
    let [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();

                if (isArray) {
                    setResponse(json.map(item => ({
                        ...item
                    })));
                    console.log(response);
                } else {
                    setResponse({ ...json });
                }

            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    return { response, error };
};

export default useFetch;
