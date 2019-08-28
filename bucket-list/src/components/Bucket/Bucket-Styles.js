import styled from 'styled-components'

export const BucketGrid = styled.div`
    margin: 20px auto;
    display: grid;
    grid-gap: 20px;
    justify-items: center;
    /* align-items: center; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-columns: auto auto auto auto; */
    @media (max-width: 1500px)
    {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 1150px)
    {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 760px)
    {
        grid-template-columns: 1fr;
        margin: 20px auto;
    }
`;

export const ItemButton = styled.button`
// align-text: center;
// padding-right: 10px;
// background: none;
// border: none;
// width: 20px;
// height: 20px;
`
export const MenuItem = styled.div`
border-bottom: 1px solid grey;
padding: 10px;
cursor: pointer;
`