import React, { useState } from 'react';

const MyForm = () => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic khi form được gửi đi
        // ...
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Hiển thị form</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    {/* Các trường và nút gửi form */}
                </form>
            )}
        </div>
    );
};

export default MyForm;