import React, { useState, useEffect } from 'react';
 
const EditableTable = () => {
    const initialData = [
        { name: 'John', age: 30, city: 'New York' },
        { name: 'Jane', age: 25, city: 'Los Angeles' },
        { name: 'Bob', age: 40, city: 'Chicago' }
    ];
 
    const [data, setData] = useState(initialData);
 
    useEffect(() => {
        const storedData = localStorage.getItem('tableData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);
 
    const handleCellChange = (rowIndex, key, value) => {
        const updatedData = [...data];
        updatedData[rowIndex][key] = value;
        setData(updatedData);
        localStorage.setItem('tableData', JSON.stringify(updatedData));
    };
 
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>
                            <input
                                type="text"
                                value={row.name}
                                onChange={(e) => handleCellChange(rowIndex, 'name', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={row.age}
                                onChange={(e) => handleCellChange(rowIndex, 'age', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.city}
                                onChange={(e) => handleCellChange(rowIndex, 'city', e.target.value)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
 
export default EditableTable;