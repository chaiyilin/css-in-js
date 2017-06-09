const Button=styled.button`
    color: ${props=>props.default?'#999999':'#FFFFFF'};
    background: ${props=>props.default?'none':'#039BE5'};
    border: none;
    border-radius: 0.3rem;
    box-shadow: ${props=>props.default?'none':'0 2px 5px 0 rgba(0,0,0,0.26)'};
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s;
    
    &:hover{
      background: ${props=>props.default?'#EEEEEE':'#0388ca'};
    }
`