import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const serviceData=useLoaderData();
    console.log(serviceData);
    return (
        <div>
            I am Service Details Page
        </div>
    );
};

export default ServiceDetails;