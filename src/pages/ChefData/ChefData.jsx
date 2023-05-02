import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefData = () => {
    const {id} = useParams();
    // console.log(id);
    const chefsInfo = useLoaderData()
    console.log(chefsInfo);
    return (
        <div>
            {chefsInfo.length}
        </div>
    );
};

export default ChefData;