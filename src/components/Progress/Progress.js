import React from 'react';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar'



// const ProgressWrapper = styled.div`
//   height: 30px;
// `;

// const Progress = () => (
//     <ProgressWrapper>
//         <ProgressBar variant="success" now={40} />
//         <ProgressBar variant="info" now={20} />
//         <ProgressBar variant="warning" now={60} />
//         <ProgressBar variant="danger" now={80} />
//     </ProgressWrapper>
// );

export default function Progress(){
    const ProgressWrapper = styled.div`
        height: 50px;
        margin: 5%;
        `;
    // const ProgressBar = styled.div`
    //     height: 32px;
    //     `;
    return (
        <ProgressWrapper>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />
        </ProgressWrapper>
    )
};