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
        height: 40px;
        margin: 5%;
        // background-color: black;
        color: black;
        opacity: 1
        
        `;
    const Progress1 = 50
    const Progress2 = 30
    const Progress3 = 60
    const Progress4 = 80

    // const Title = styled.h1`
    //     height: 64px;
    //     pointer-events: none;
    //     `;

    // const ProgressBar = styled.div`
    //     height: 32px;
    //     font-color
    //     `;
    const ProgressBarStyles = {
        height: '25px',
        color: 'black'
    }

    return (
        <ProgressWrapper className="sticky-top">
            <ProgressBar style={ProgressBarStyles} striped variant="success" label={'Team 1  - ' + Progress1 + '% Complete'} now={Progress1} />
            <br/>
            <ProgressBar style={ProgressBarStyles} striped variant="info" label={'Team 2  - ' + Progress2 + '% Complete'}  now={Progress2} />
            <br/>
            <ProgressBar style={ProgressBarStyles} striped variant="warning" label={'Team 3  - ' + Progress3 + '% Complete'}  now={Progress3} />
            <br/>
            <ProgressBar style={ProgressBarStyles} striped variant="danger" label={'Team 4  - ' + Progress4 + '% Complete'}  now={Progress4} />
            <br/>
        </ProgressWrapper>
    )
};