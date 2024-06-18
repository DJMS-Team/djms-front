import React from 'react';
import Navbar from './components/navbar';  
import MainLayout from './layout'; 

const Page: React.FC = () => {
    return (
        <MainLayout>
            <Navbar />
            <div>
                <h1>Welcome to DMJS</h1>
               
            </div>
        </MainLayout>
    );
};

export default Page;
