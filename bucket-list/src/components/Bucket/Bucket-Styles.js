import styled from 'styled-components'

export const BucketGrid = styled.div`
    margin: 20px 20px;
    display: grid;
    grid-gap: 20px;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-template-columns: auto auto auto auto;
    @media (max-width: 900px)
    {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 700px)
    {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px)
    {
        grid-template-columns: 1fr;
        margin: 20px auto;
    }
`;