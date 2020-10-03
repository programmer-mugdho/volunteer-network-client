import React from 'react';
import RegisterList from '../RegisterList/RegisterList';

const Admin = () => {
    return (
        <div>
            {/* Admin navbar */}
            <aside>
                <button>Volunteer register list</button>
                <button>Add Event</button>
            </aside>
            <RegisterList />
        </div>
    );
};

export default Admin;